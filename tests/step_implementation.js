/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* globals gauge, beforeSuite, afterSuite, step */

const path = require('path');
const {
  openBrowser,
  write,
  closeBrowser,
  goto,
  press,
  screenshot,
  // eslint-disable-next-line no-unused-vars
  above,
  click,
  checkBox,
  // eslint-disable-next-line no-unused-vars
  listItem,
  toLeftOf,
  link,
  text,
  into,
  textBox,
  evaluate,
} = require('taiko');

const assert = require('assert');

const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
  await openBrowser({ headless });
});

afterSuite(async () => {
  await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function customScreenshotWriter() {
  const screenshotFilePath = path.join(process.env.gauge_screenshots_dir,
    `screenshot-${process.hrtime.bigint()}.png`);

  await screenshot({
    path: screenshotFilePath,
  });
  return path.basename(screenshotFilePath);
};

step('Add task <item>', async (item) => {
  await write(item, into(textBox('What needs to be done?')));
  await press('Enter');
});

step('View <type> tasks', async (type) => {
  await click(link(type));
});

step('Complete tasks <table>', async (table) => {
  for (const row of table.rows) {
    await click(checkBox(toLeftOf(row.cells[0])));
  }
});

step('Clear all tasks', async () => {
  await evaluate(() => localStorage.clear());
});

step('Open todo application', async () => {
  await goto('todo.taiko.dev');
});

step('Must not have <table>', async (table) => {
  for (const row of table.rows) {
    assert.ok(!await text(row.cells[0]).exists(0, 0));
  }
});

step('Must display <message>', async (message) => {
  assert.ok(await text(message).exists(0, 0));
});

step('Add tasks <table>', async (table) => {
  for (const row of table.rows) {
    await write(row.cells[0]);
    await press('Enter');
  }
});

step('Must have <table>', async (table) => {
  for (const row of table.rows) {
    assert.ok(await text(row.cells[0]).exists());
  }
});
