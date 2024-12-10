# Foxify App

## Tech Stack

This template combines a number of third party open-source tools:

- [Vite](https://vitejs.dev/) builds the [React](https://reactjs.org/) frontend.
- [React Router](https://reactrouter.com/) is used for routing. We wrap this with file-based routing.

## Getting started

### Project structures

`src/`

- `assets/` - Defined all static assets (image, svg, etc) of app.
- `components/` - Defined all component (input, button, modal, etc). When you want change anything in this folder, pls ask me before do it.
- `pages/` - Defined all mini react app (view + logic + context). Each subfolder include page and sub-page.
- `services/` - Defined all function interact with restful API.
- `shared/constants/` - Defined all constant value
- `shared/hooks/` - Defined all logic UI function use more than one place in project.
- `shared/utils/` - Defined all logic function use more than one place in project.
- `shared/state/` - Defined all global states of project.
- `shared/styles/` - Defined all global styles of project.
- `Routes.jsx` - Defined all route of each page.
- `App.jsx` - Root of app.
- `index.jsx` - Root of project.

### Local Development

```shell
yarn dev
```