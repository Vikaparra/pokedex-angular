import { defineConfig } from 'cypress';
import { BASE_CONFIGS } from 'cypress.variables';

export default defineConfig({
  e2e: {
    ...BASE_CONFIGS,
  },
});
