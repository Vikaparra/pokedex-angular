export const VIEWPORT = {
  mobile: {
    width: 375,
    height: 838,
  },
  desktop: {
    width: 1280,
    height: 800,
  },
};

export const BASE_CONFIGS = {
  baseUrl: 'http://localhost:4200',
  specPattern: '**/*.cy.ts',
  viewportWidth: VIEWPORT.desktop.width,
  viewportHeight: VIEWPORT.desktop.height,
  screenshotOnRunFailure: false,
  video: false,
};

export const CI_CONFIGS = {
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: false,
  screenshotsFolder: 'cypress/screenshots/',
};
