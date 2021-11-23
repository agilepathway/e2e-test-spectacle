# Updating dependencies

## Dependabot

We use [GitHub Dependabot](https://docs.github.com/en/github/administering-a-repository/keeping-your-dependencies-updated-automatically) 
([bought by GitHub in 2019](https://dependabot.com/blog/hello-github/) and now 
[baked into GitHub](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/)) 
to manage our dependencies.

Whenever possible we let Dependabot update our dependencies automatically (by 
[automatically creating a PR](https://docs.github.com/en/github/administering-a-repository/managing-pull-requests-for-dependency-updates#about-github-dependabot-pull-requests)
for us to merge).

Dependabot will automatically update our npm dependencies, along with
[non-Docker dependencies in our GitHub Actions](https://github.blog/2020-06-25-dependabot-now-updates-your-actions-workflows/).


## Ubuntu version

GitHub Actions supports Ubuntu LTS versions only.  [Ubuntu releases a new LTS version every second year in
April](https://wiki.ubuntu.com/Releases).  In 2020 the GitHub Actions team [supported the new version by mid
June](https://github.com/actions/virtual-environments/issues/228#issuecomment-644065532), so the owner of the repo has
a reminder in their calendar every 2 years (on 15 July as that should have given GitHub sufficient time to update to 
the new LTS version) to update the GitHub Actions on this repo with the new version.
