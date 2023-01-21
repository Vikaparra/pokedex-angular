import { NavigationBehaviorOptions, UrlTree } from '@angular/router';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to navigate without reloading the entire application like cy.visit() would.
       * @example cy.navigate('/salesman/auctions')
       */
      navigate(
        url: string | UrlTree,
        extras?: NavigationBehaviorOptions | undefined
      ): Chainable<boolean>;

      /**
       * Custom command to change viewport to mobile size.
       * @example cy.mobileView()
       */
      mobileView(): Chainable<null>;

      /**
       * Custom command to get an HTMLElement by it's `data-cy` attribute following the `{feature}--{context}` pattern.
       * @example cy.getByDataCy('auction-creation', 'vin-input')
       */
      getByDataCy(
        feature: string,
        context: string,
        args?: Partial<Loggable & Timeoutable & Withinable & Shadow>
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
