
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePathsEnum } from './core/navigation/enums/router-paths-enum';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home/market',
        pathMatch: 'full',
    },
    {
        path: RoutePathsEnum.home,
        loadChildren: './pages/home/home.module#HomeModule'
    },
    {
        path: RoutePathsEnum.account,
        loadChildren: './pages/my-account/my-account.module#MyAccountModule'
    },
    {
        path: RoutePathsEnum.howToPlay,
        loadChildren: './pages/how-to-play/how-to-play.module#HowToPlayModule'
    },
    {
        path: RoutePathsEnum.AchievementsIncentives,
        loadChildren: './pages/achievements-incentives/achievements-incentives.module#AchievementsIncentivesModule'
    },
    {
        path: RoutePathsEnum.results,
        loadChildren: './pages/results/results.module#ResultsModule'
    },
    {
        path: RoutePathsEnum.termsOfService,
        loadChildren: './pages/terms-of-service/terms-of-service.module#TermsOfServiceModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
