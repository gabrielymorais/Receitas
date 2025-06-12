import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Route } from '@angular/router';

import { RecipesList } from './recipes-list/recipes-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeForm } from './recipe-form/recipe-form';

const routes: Route[] = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesList },
  { path: 'recipes/new', component: RecipeForm },
  { path: 'recipes/:id', component: RecipeDetail },
  { path: 'recipes/:id/edit', component: RecipeForm },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

  ]
};
