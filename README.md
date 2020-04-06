# Frontend: ContactTracing.app
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Our aim is to let people keep track of who they meet in the face of the COVID-19 pandemic. Should anything happen to you, Contract Tracing will notify your friends & family to keep them safe.

## Getting set up

1. Clone the repo
2. Copy `.envsample` > `.env`
3. Ask @mmmoli for real env details
4. `yarn`
5. `yarn run dev`

## The design of the MVP (Webapp)
https://www.figma.com/file/CFy0c183XgjiPfUMRuuFYt/Contact-tracing?node-id=373%3A0

## Mobx Stores
This is a tricky point. Our api only stores `uid` of nodes. It has no personal identifible information in it. So when it return a list of people that the current logged in user knows, all you have are ids.

We needed one way to look-up the uid with the public information that that particular user is willing to show. This is done using Firebase database, and the `profile/${uid}/` location.

To prevent looking-up that same information over and over again, a Mobx store called `PersonStore` provides a cache of info.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://rebagliatte.com"><img src="https://avatars2.githubusercontent.com/u/669889?v=4" width="100px;" alt=""/><br /><sub><b>Vero Rebagliatte</b></sub></a><br /><a href="https://github.com/ContactTracing-app/Frontend/commits?author=rebagliatte" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!