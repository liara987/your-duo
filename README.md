# your-duo

This template should help get you started developing with Vue 3 in Vite.

## screenshots

### home mobile

![home-mobile](./screens/home-mobile.png)

### home tablet

![home-tablet](./screens/home-tablet.png)

### home desktop

![home-desktop](./screens/home-desktop.png)

### form mobile

![form-mobile](./screens/form-mobile.png)

### form desktop

![form-desktop](./screens/form-desktop.png)

## What this project have

### Components

- [x] Logo
- [x] Carousel
- [x] Card
- [x] Button
- [x] Connect message
- [x] Create New Post Button
- [x] Publish Post Form
- [ ] Validate form fields
- [ ] Add a post to list
- [ ] List how much posts have

### Pages

- [ ] Home page
- [ ] Post detail page
- [ ] Profile page

### Unit Test

- [ ] Logo
  - [ ] Should be created
- [ ] Carousel
  - [ ] Should be created
- [ ] Card
  - [ ] Should be created
- [ ] Button
  - [ ] Should be created
- [ ] Connect message
  - [ ] Should be created
- [ ] Create New Post Button
  - [ ] Should be created
- [ ] Publish Post Form
  - [ ] Should be created
- [ ] Login Form
  - [ ] Should be created

### Test E2E

- [ ] Home page
- [ ] Post detail page
- [ ] Profile page

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
