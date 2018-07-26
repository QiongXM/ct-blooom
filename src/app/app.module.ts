import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FormsComponent } from './home/forms/forms.component';
import { StatsComponent } from './home/stats/stats.component';
import { ClientsComponent } from './home/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    FormsComponent,
    StatsComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
