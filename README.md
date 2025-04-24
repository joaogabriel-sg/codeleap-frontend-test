<h1 align="center">CodeLeap Frontend Test</h1>

<p align="center">
  This project is a frontend test for <a href="https://codeleap.co.uk/" target="_blank">CodeLeap</a>, built with Vite, React, and TypeScript.
  </br>
  It includes a simple UI for creating and displaying posts, with a focus on clean code and best practices.
</p>

<p align="center">
  <img alt="CodeLeap" src='https://codeleap.co.uk/images/codeleap-share.png' width="600" style="aspect-ratio: auto;"/>
</p>

https://github.com/user-attachments/assets/34ac1f6e-dea6-4f15-8ac4-5dd7baff5c49

## Getting started

### Download and Install

To download this project and install its dependencies, run:

```
git clone https://github.com/joaogabriel-sg/codeleap-frontend-test.git
cd codeleap-frontend-test
pnpm setup:project
```

### Run the app

To start the development server, run:

```
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Technologies

- ⚡️ Vite — build tool and dev server
- ⚛️ React — UI library
- 🧠 TypeScript — static typing
- 🎨 Tailwind CSS — utility-first CSS framework
- 🧩 ShadCh UI — component library
- 📦 Tanstack Query — data fetching and caching
- 🧹 ESLint — code linting
- ✨ Prettier — code formatting
- 🪝 Lefthook — git hooks
- 🔎 Path mapping — use "@/..." instead of relative paths
- ✅ PR workflow — lint and type check before merging

## Available scripts

- `pnpm setup:project` — install deps and enable git hooks
- `pnpm dev` — start development server
- `pnpm build` — type-check and create production build
- `pnpm preview` — preview production build
- `pnpm lint` — run ESLint
- `pnpm lint:fix` — fix lint issues
- `pnpm typeCheck` — run TypeScript type checks
- `preinstall` - prevent installing with npm or yarn, use pnpm instead

## Feature-Based Architecture (Modules)

This project follows a feature-based modular architecture, which organizes the application around business domains (e.g., `auth`, `posts`) rather than file types (e.g., `components/`, `pages/`, `types/`, `services/`). This approach promotes scalability, maintainability, and domain clarity.

## Path Mapping (Alias)

To improve DX and avoid long relative imports like `../../../components`, this project uses a path alias:

- `@/` points to the `src/` directory.
  You can use it in your imports like this:

```ts
import { Button } from "@/components/Button";
```

The alias is configured in:

- `tsconfig.json` — for TypeScript support
- `vite.config.ts` — for Vite resolution

## Author

This project was created by [João Gabriel](https://www.linkedin.com/in/joaogabriel-sg/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more information.
