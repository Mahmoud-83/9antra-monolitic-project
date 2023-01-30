import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: 'homeadmin',
  component: HomeComponent,
  data: {
    pageTitle: 'Welcome, Java Hipster!',
  },
};
