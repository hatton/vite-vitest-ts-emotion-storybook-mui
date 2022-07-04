import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  /* This would remove the need to import the css in every file, and it works. However, typescript doesn't know about it so 
  you get errors in the vscode editor. So there's no point until we can get tsconfig to do something similar to this import.
   esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import {jsx, css} from '@emotion/react'`,
  },
  */
  test: {}, // enables vitest
});
