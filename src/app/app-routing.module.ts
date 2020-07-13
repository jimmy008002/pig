import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PigBarnComponent } from './pig-barn/pig-barn.component';
import { PigBarnDetailComponent } from './pig-barn-detail/pig-barn-detail.component';
import { FarmManagementComponent } from './farm-management/farm-management.component';
import { ArTagComponent } from './ar-tag/ar-tag.component';
import { AppTechGuard } from './app-tech.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoPermissionComponent } from './no-permission/no-permission.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', component: DashboardComponent, 
    children: [
      { path: 'Dashboard/FarmManagement', component: FarmManagementComponent, canActivate: [AppTechGuard], outlet: '' },
      { path: 'Dashboard/PigBarn', component: PigBarnComponent, outlet: '' },
      { path: 'Dashboard/PigBarn/PigBarnDetail/:id', component: PigBarnDetailComponent, outlet: '' }
    ]
  },
  { path: 'ArTag', component: ArTagComponent },
  { path: 'no-permission', component: NoPermissionComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
