# Vite Theme Importer POC

Built on the minimal React + TypeScript + Vite template using the command below:

```sh
npm create vite@latest . -- --template react-ts
```

## Objective

This simple POC showcases a concept for developing UI components in React that can handle multiple themes. This might not be the best way to do it, but the technology used can adapt to a longer-lasting solution. I'll hopefully have the motivation to push this further.

## Demo

This project is a very basic demo for the idea. Running it or building it requires using the `VITE_THEME` environment variable. There are 4 themes the `VITE_THEME` variable accepts in this demo, listed below:

- ```theme-1```
- ```theme-2```
- ```theme-3```
- ```theme-4```

### Usage

This demo uses the `npm` package manager.

#### Start
```VITE_THEME=[theme] npm run dev```

#### Build
```VITE_THEME=[theme] npm run build```
