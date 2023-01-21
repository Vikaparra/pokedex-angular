import { NgModule, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@NgModule()
export class E2EModule {
  public constructor(router: Router, zone: NgZone) {
    if (window['Cypress']) {
      // faster navigation in e2e tests since default cy.visit() command reloads the entire application
      // with this we can effectively skip as much as possible of the UI when testing specific scenarios
      window['navigateByUrl'] = (
        ...params: Parameters<Router['navigateByUrl']>
      ): Promise<boolean> => {
        return zone.run(() => router.navigateByUrl(...params));
      };
    }
  }
}
