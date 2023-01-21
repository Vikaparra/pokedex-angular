import { defineConfig } from 'cypress';
import { BASE_CONFIGS, CI_CONFIGS } from 'cypress.variables';

export default defineConfig({
  e2e: {
    ...BASE_CONFIGS,
    ...CI_CONFIGS,
  },
});
