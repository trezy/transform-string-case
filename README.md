<div align="center">
  <h1>transform-string-case</h1>

  <p>Transform strings between snake, camel, and upper camel case.</p>

  <hr />
</div>

[![Build status][circleci-badge]][circleci]
[![Code Coverage][coveralls-badge]][coveralls]
[![Dependencies][daviddm-badge]][daviddm]
[![Maintainability][codeclimate-badge]][codeclimate]
[![BSD-3-Clause License][license-badge]][license]
[![Version][version-badge]][package]
<!-- [![Downloads][downloads-badge]][npmtrends] -->

[![Code of Conduct][code-of-conduct-badge]][code-of-conduct]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Use Case

`transform-string-case` is a tiny, versatile library that can convert your strings between several different cases. My original use case was this: I was building a JavaScript project that needed to interact with both the [Firebase][firebase] and the [Twilio][twilio] APIs. The issue is that my lettercase was different everywhere. Since I was using JavaScript, my variables were all camel cased (`thisIsACamelCasedVariable`). Firebase, however, sent all their JSON keys in snake case (`this_is_a_snake_cased_variable`), while Twilio sent all of their JSON keys in upper camel case (`ThisIsAnUpperCamelCasedVariable`).

To make matters worse, my ESlint config enforced camel casing and I didn't want to change it! Instead, I wrote a couple of tools to solve the issue: [`convert-object-keys`][convert-object-keys] and `transform-string-case`.

## Usage

To use `transform-string-case`, you need to pass it a string, what case the string is starting as, and what case the string is being transformed to:

```js
import { transformStringCase } from 'transform-string-case'

transformStringCase('camelCaseString', 'camel', 'snake') // 'camel_case_string'

transformStringCase('snake_case_string', 'snake', 'upperCamel') // 'SnakeCaseString'

transformStringCase('UpperCamelCaseString', 'upperCamel', 'snake') // 'upper_camel_case_string'
```

### Exports

`transform-string-case` has a default export, as well as a couple of named helper exports (`capitalizeFirstCharacter` and `lowercaseFirstCharacter`). these helpers are used internally by the `transformStringCase`, but they are exposed for convenience.

```js
import transformStringCase from 'transform-string-case'
// or
import {
  capitalizeFirstCharacter,
  lowercaseFirstCharacter,
  transformFirstCharacter,
  transformStringCase,
} from 'transform-string-case'

capitalizeFirstCharacter('hello world!') // 'Hello world!'
lowercaseFirstCharacter('Hello World!') // 'hello World!'
transformFirstCharacter('Hello World!', (firstCharacter) => {
  return firstCharacter = '😁'
}) // '😁ello World!'
```

## Contributing

If you want to contribute, make sure to check out our [contributing guide][contributing]!

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://trezy.com"><img src="https://avatars2.githubusercontent.com/u/442980?v=4" width="100px;" alt="Trezy"/><br /><sub><b>Trezy</b></sub></a><br /><a href="https://github.com/trezy/transform-string-case/commits?author=trezy" title="Code">💻</a> <a href="https://github.com/trezy/transform-string-case/commits?author=trezy" title="Documentation">📖</a> <a href="#ideas-trezy" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-trezy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-trezy" title="Maintenance">🚧</a> <a href="#tool-trezy" title="Tools">🔧</a> <a href="https://github.com/trezy/transform-string-case/commits?author=trezy" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

[circleci]: https://circleci.com/gh/trezy/workflows/transform-string-case
[circleci-badge]: https://img.shields.io/circleci/build/gh/trezy/transform-string-case/master.svg?style=flat-square
[code-of-conduct]: CODE_OF_CONDUCT.md
[code-of-conduct-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[codeclimate]: https://codeclimate.com/github/trezy/transform-string-case
[codeclimate-badge]: https://img.shields.io/codeclimate/maintainability/trezy/transform-string-case.svg?style=flat-square
[contributing]: CONTRIBUTING.md
[convert-object-keys]: https://github.com/trezy/convert-object-keys
[coveralls]: https://coveralls.io/github/trezy/transform-string-case
[coveralls-badge]: https://img.shields.io/coveralls/trezy/transform-string-case.svg?style=flat-square
[daviddm]: https://david-dm.org/trezy/transform-string-case
[daviddm-badge]: https://img.shields.io/david/dev/trezy/transform-string-case.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/transform-string-case.svg?style=flat-square
[github-watch]: https://github.com/trezy/transform-string-case/watchers
[github-watch-badge]: https://img.shields.io/github/watchers/trezy/transform-string-case.svg?style=social
[github-star]: https://github.com/trezy/transform-string-case/stargazers
[github-star-badge]: https://img.shields.io/github/stars/trezy/transform-string-case.svg?style=social
[license]: LICENSE
[license-badge]: https://img.shields.io/npm/l/transform-string-case.svg?style=flat-square
[npmtrends]: https://www.npmtrends.com/transform-string-case
[package]: https://npmjs.com/package/transform-string-case
[prs]: CONTRIBUTING.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20transform-string-case%20by%20%40TrezyCodes%20https%3A%2F%2Fgithub.com%2Ftrezy%2Ftransform-string-case%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/trezy/transform-string-case.svg?style=social
[version-badge]: https://img.shields.io/npm/v/transform-string-case.svg?style=flat-square
