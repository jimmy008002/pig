import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TopSideMenuComponent } from './top-side-menu/top-side-menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { PigBarnComponent } from './pig-barn/pig-barn.component';
import { FarmManagementComponent } from './farm-management/farm-management.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PigBarnDetailComponent } from './pig-barn-detail/pig-barn-detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { ArTagComponent } from './ar-tag/ar-tag.component';
// Translate Module
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NoPermissionComponent } from './no-permission/no-permission.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TopSideMenuComponent,
    PigBarnComponent,
    FarmManagementComponent,
    BreadcrumbComponent,
    PigBarnDetailComponent,
    ArTagComponent,
    NoPermissionComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (HttpLoaderFactory),
            deps: [HttpClient]
        }
    })
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
