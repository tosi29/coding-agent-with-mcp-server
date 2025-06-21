# coding-agent-with-mcp-server

Minimal TypeScript + React configuration with Playwright Google search automation.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Playwright Google Search Automation

This project includes Playwright-based automation scripts to search Google for "React" and save the results to HTML files.

### Available Commands

- `npm run search:react` - Run basic Google search for React
- `npm run search:playwright` - Run advanced Playwright automation with Japanese support
- `npm run search:demo` - Run demonstration search

### Usage Example

```bash
# Run the Playwright automation
npm run search:playwright
```

This will:
1. Search Google for "React"
2. Generate an HTML file with search results
3. Create a markdown report
4. Save files to the `results/` directory

### Output Files

The automation generates:
- `google-react-search-[timestamp].html` - Styled HTML with search results
- `search-report-[timestamp].md` - Detailed report in Japanese

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Playwright** - Browser automation for search functionality

## Project Structure

```
├── src/
│   ├── App.tsx      # Main React component
│   └── main.tsx     # Application entry point
├── scripts/
│   ├── google-react-search.ts     # Basic search automation
│   └── playwright-google-search.ts # Advanced Playwright automation
├── results/         # Generated search results (created automatically)
├── index.html       # HTML template
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── package.json     # Project dependencies
```