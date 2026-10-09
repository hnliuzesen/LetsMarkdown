# Repository Guidelines

## Project Structure & Module Organization

- `src/` contains the React/TypeScript frontend: routes in `pages/`, reusable UI
  in `components/`, collaboration logic in `lib/`, and Markdown examples in
  `markdown/`.
- `public/` holds static assets, including demo images and the favicon.
- `letsmarkdown-server/src/` implements the Rust WebSocket server and
  operational transformation logic.
- `letsmarkdown-wasm/src/` exposes Rust editing operations to the browser
  through WebAssembly.
- The root `Cargo.toml` defines both Rust workspace members. Generated outputs
  live in `target/`, `dist/`, and `letsmarkdown-wasm/pkg/`; do not commit them.

## Build, Test, and Development Commands

Install Rust, Node.js/npm, and `wasm-pack`. Run commands from the repository
root:

- `wasm-pack build --target web letsmarkdown-wasm`: generate the local WASM
  package before installing frontend dependencies; repeat after WASM changes.
- `npm install`: install frontend dependencies.
- `cargo run`: start the backend on port 3030 by default.
- `npm run dev`: start Vite; `/api` requests and WebSockets proxy to the
  backend.
- `npm run concurrent`: run the backend and frontend together.
- `npm run build` / `npm run serve`: build the frontend / preview its production
  bundle.
- `cargo test --release`: run Rust tests, matching the Docker build.
- `npm run format` / `cargo fmt`: format frontend/documentation files / Rust
  code.

## Coding Style & Naming Conventions

Use two-space indentation for frontend files and four spaces for Rust. Preserve
LF endings, final newlines, and no trailing whitespace. Follow Prettier 2.4.1
and Rustfmt. Use PascalCase for React components and filenames, camelCase for
TypeScript functions and variables, and snake_case for Rust modules and
functions. Keep TypeScript compatible with the strict configuration in
`tsconfig.json`.

## Testing Guidelines

No frontend test runner, existing Rust test cases, or coverage threshold is
configured. Add Rust unit tests near the affected module using `#[test]` or
`#[tokio::test]`, with descriptive snake_case names. Manually verify editor and
preview changes, including synchronization between two browser sessions. Before
submitting, run the build, Rust tests, `npx prettier@2.4.1 --check .`, and
`cargo fmt -- --check`.

## Commit & Pull Request Guidelines

History uses short imperative descriptions and occasional prefixes such as
`ci:`; no uniform commit convention is enforced. Write focused commits
describing the behavior changed. Open an issue for proposed features or bugs, as
requested in the README. Include a concise PR description, related issue links,
validation results, and screenshots for visible UI changes. Ensure Docker build
and formatting CI pass.
