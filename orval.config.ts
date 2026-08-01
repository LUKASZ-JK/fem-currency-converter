import { defineConfig } from 'orval'

export default defineConfig({
  frankfurter: {
    input: {
      target: 'https://api.frankfurter.dev/v2/openapi.json',
    },
    output: {
      client: 'zod',
      mode: 'single',
      target: './src/api/schemas',
      override: {
        zod: {
          // Prefer Mini for more tree-shakeable generated schemas.
          variant: 'mini',
          version: 4,
        },
      },
    },
  },
})
