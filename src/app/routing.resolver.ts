import { ResolveFn } from '@angular/router';

export const routingResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
