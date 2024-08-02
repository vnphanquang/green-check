# Green Web Badge as Custom Element

![green badge example](https://raw.githubusercontent.com/vnphanquang/green-check/main/.github/green.svg)

## Introduction

This library defines an [HTML Custom Element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) to check and display a badge if your site passes the [Green Web Check][greenwebcheck] from [The Green Web Foundation][greenwebfoundation].

See https://github.com/thegreenwebfoundation/admin-portal/issues/234 for the original discussion that led to this library.

## 1. Installation

Install `@vnphanquang/green-check` with your package manager of choice (recommended):

```bash
pnpm add @vnphanquang/green-check
npm install @vnphanquang/green-check
yarn add @vnphanquang/green-check
```

> [!NOTE]
> This method is recommended as it allows the `green-check` module to be part of your dependency tree and build process, making it easier to integrate into framework contexts, track version, and deploy with high availability (you are effectively self-hosting the module).

Alternatively, you may load the module via a CDN by adding to [importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) in your html:

```html
<script type="importmap">
  {
    "imports": {
      "@vnphanquang/green-check": "https://cdn.jsdelivr.net/npm/@vnphanquang/green-check/dist/greencheck.js"
    }
  }
</script>
```

## 2. Register the Custom Element

Import `GreenCheck` and register `<green-check>` using the global [customElements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements), where applicable:

```javascript
import { GreenCheck } from '@vnphanquang/green-check';

// later where applicable
customElements.define('green-check', GreenCheck);
```

Optionally, you may find dynamically importing the module to be more efficient depending on your use case:

```javascript
async function loadGreenCheck() {
  const { GreenCheck } = await import('@vnphanquang/green-check');
  customElements.define('green-check', GreenCheck);
}

// later
loadGreenCheck();
```

## 3. Using the Custom Element

```html
<green-check hostname="www.yourdomain.xyz">
  <img
    src="https://cdn.jsdelivr.net/npm/@vnphanquang/green-check/dist/fallback.svg"
    width="200"
    height="95"
    alt="Fallback blank greencheck badge from The Green Web Foundation, in case JS is not (yet) available"
  />
</green-check>
```

### Customizing Colors

Colors of the badge can be customized by providing the following CSS custom properties (default values are shown):

```html
<green-check>
  <!-- [...truncated fallback image...] -->
</green-check>

<style>
  green-check {
    --green-check-fg: #000;
    --green-check-bg: linear-gradient(45deg, #06ff06 4%, #dffcdd 24%, #fff 32%);
  }
</style>
```

This is helpful to ensure consistency with your site's color scheme or to support dark mode.

## Development

### Prerequisites

| Dependency | Installation                            | Description                     |
| ---------- | --------------------------------------- | ------------------------------- |
| [node]     | recommended via [volta]                 |                                 |
| [pnpm]     | [follow guide on website][pnpm.install] | alternative to `npm` and `yarn` |

See [package.json] for preferred versions of `node` and `pnpm`. At project root, run:

### Getting Started

This project is built with [Vite](https://vitejs.dev/). Start by installing dependencies

```bash
pnpm install
```

And run development server

```bash
pnpm dev
```

### Todos

- [ ] Add tests

[greenwebfoundation]: https://www.thegreenwebfoundation.org
[greenwebcheck]: https://www.thegreenwebfoundation.org/green-web-check

[node]: https://nodejs.org/en/
[volta]: https://volta.sh/
[pnpm]: https://pnpm.io/
[pnpm.install]: https://pnpm.io/installation

