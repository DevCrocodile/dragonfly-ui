/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";
import { peerDependencies } from './package.json';
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

// https://vite.dev/config/
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(), 
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: ['**/*.stories.ts', '**/*.test.ts']
    }),
    tailwindcss()
  ],
  resolve:{
    alias:{
      "@": resolve(__dirname, 'src'),
      "@utils": resolve(__dirname, 'src/utils'),
      "@components": resolve(__dirname, "src/components")
    }
  },
  build:{
    lib:{
      entry: './src/index.ts',
      name: 'dragonfly-ui',
      fileName: (format) => `dragonfly-ui.${format}.js`,
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions:{
      external: Object.keys(peerDependencies),
      output:{
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
  // test: {
  //   projects: [{
  //     extends: true,
  //     plugins: [   
  //     // The plugin will run tests for the stories defined in your Storybook config
  //     // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
  //     storybookTest({
  //       configDir: path.join(dirname, '.storybook')
  //     })],
  //     test: {
  //       name: 'storybook',
  //       browser: {
  //         enabled: true,
  //         headless: true,
  //         provider: 'playwright',
  //         instances: [{
  //           browser: 'chromium'
  //         }]
  //       },
  //       setupFiles: ['.storybook/vitest.setup.ts']
  //     }
  //   }]
  // }
});