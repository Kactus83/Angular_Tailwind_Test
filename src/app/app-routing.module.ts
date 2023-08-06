import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';

export const appRoutes: Route[] = [
    // Redirect empty path to '/home'
    {path: '', pathMatch : 'full', redirectTo: 'home'},

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty' // vous pouvez remplacer 'empty' par le nom de layout approprié
        },
        children: [
            {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty' // vous pouvez remplacer 'empty' par le nom de layout approprié
        },
        children: [
            {path: 'test', loadChildren: () => import('./modules/test-page/test-page.module').then(m => m.TestPageModule)},
        ]
    }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
