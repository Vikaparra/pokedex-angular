/// <reference types="cypress" />

import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;
import Withinable = Cypress.Withinable;
import Shadow = Cypress.Shadow;

import { NavigationBehaviorOptions, UrlTree } from '@angular/router';
import { VIEWPORT } from 'cypress.variables';

declare global {
  interface Window {
    navigateByUrl(url: string | UrlTree, extras?: NavigationBehaviorOptions | undefined): Promise<boolean>;
  }
}

Cypress.Commands.add('navigate', (...params) => {
  cy.window().then(window => {
    window.navigateByUrl(...params);
  });
});

Cypress.Commands.add('mobileView', () => {
  cy.viewport(VIEWPORT.mobile.width, VIEWPORT.mobile.height);
});

Cypress.Commands.add('getByDataCy', (feature: string, context: string, args?: Partial<Loggable & Timeoutable & Withinable & Shadow>) => {
  return cy.get(`[data-cy=${feature}--${context}]`, args);
});
