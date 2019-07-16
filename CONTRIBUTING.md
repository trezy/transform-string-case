# Contributing

You want to contribute to the project? Awesome!

**Working on your first Pull Request?**
[How to Contribute to an Open Source Project on GitHub][egghead]

## How do

* Project setup?
  [We've got you covered!](#project-setup)

* Found a bug?
  [Let us know!][bugs]

* Patched a bug?
  [Make a PR!][new-pr]

* Adding a new feature?
  [Make a PR for that, too!][new-pr]

## Project setup

1. Fork and clone the repo
1. Run `yarn install` or `npm install` to install dependencies
1. Create a branch for your PR with `git checkout -b pr/your-branch-name`

> Tip: Keep your master branch pointing at the original repository and make pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/trezy-studios/transform-string-case.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then fetch the git information from that remote, then set your local master branch to use the upstream master branch whenever you run git pull. Then you can make all of your pull request branches based on this master branch. Whenever you want to update your version of master, do a regular git pull.

## Committing and Pushing changes

Please make sure to run the tests before you commit your changes. You can run the tests with `yarn test`

### opt into git hooks

There are git hooks set up with this project that are automatically installed when you install dependencies. They're really handy, but are turned off by default (so as to not hinder new contributors). You can opt into these by creating a file called .opt-in at the root of the project and putting this inside:

```
pre-commit
```

### Commit conventions

We use an interpretation of the angular commit conventions in this project. Generally spueaking, all commits should follow this pattern:
```
type(component): commit message
```
* **type** - The type of work done in the commit. See below for types.
* **component** - Should follow these rules:
    * If the file is one of the function files, no suffix is needed. Just use the file name (e.g., the `component` for `capitalizeFirstCharacter.js` would be `capitalizeFirstCharacter`).
    * If the file is a test use the same rule you would use for the tested file (e.g., the `component` for `capitalizeFirstCharacter.test.js` would be `capitalizeFirstCharacter`).
    * If the file is documentation, no suffix is needed, however docs should **ALWAYS** have a commit type of `docs`.
    * Remain as consistent in naming as possible. Use git history as precedence for the component name given to a file.
* **commit message** - should quickly summarize changes made. If there are multiple changes, multiline commit messages are allowed to fully summarize the changes.

If in doubt about component naming, try to dive into the commit history for the file in question. If you're still confused, ask! Use your best judgment, but prefer consistency over enforcing the rules set by this document. The point of these rules is to make searching through commits easier, and consistency helps the most.

Commits should be as samll as possible, with exceptions for large sweeping changes required by lint rule changes, package updates, etc.

If the commit **must** make changes to two or more **completely unrelated** files, the component name and parentheses are not required.

### Commit types
* `feat` - A new feature
* `fix` - A bug fix
* `docs` - Documentation only changes
* `style` - Changes that do not affect the meaning of the code (white-space, formatting, semi-colons, etc)
* `refactor` - A code change that neither fixes a bug nor adds a feature
* `perf` - A code change that imporves performance
* `test` - Adding missing tests or correcting existing tests
* `build` - Changes that affect the build system or external dependencies (example scopes: babel, rollup)
* `ci` - Changes to our CI configuration files and scripts (example scopes: CircleCI, semantic-release)
* `chore` - Other changes that don't modify src or test files
* `revert` - Reverts a previous commit

[bugs]: https://github.com/trezy-studios/transform-string-case/issues/new?labels=bug
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-pr]: https://github.com/trezy-studios/transform-string-case/compare
[ops-email]: mailto:help@trezy.com
