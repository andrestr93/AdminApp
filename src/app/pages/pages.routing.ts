
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountsSettingsComponent } from './accounts-settings/accounts-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

export const routes: Routes = [

    {
        path: 'dashboard',
        component: PagesComponent,

        children: [


            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Graficas' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' } },
            { path: 'account-settings', component: AccountsSettingsComponent, data: { titulo: 'Settings' } },
            { path: 'promises', component: PromisesComponent, data: { titulo: 'Promises' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'rxjs' } },

        ]
    },


]


@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]


})

export class PagesRoutingModule { }