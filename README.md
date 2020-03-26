# Frontend: ContactTracing.app

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
