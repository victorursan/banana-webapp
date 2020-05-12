import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { environment } from '../environments/environment';
import { HomeComponent, ScanComponent, TicketComponent, AboutComponent, TicketsComponent, PersonnelComponent, StickiesComponent, LocationsComponent } from './components';
import { BananaHttpService } from './services';
import { AppAuthGuard } from './app.authguard';
import { FormsModule } from '@angular/forms';

const keycloakService: KeycloakService = new KeycloakService();

@NgModule({
  declarations: [AppComponent, HomeComponent, ScanComponent, TicketComponent, AboutComponent, TicketsComponent, PersonnelComponent, StickiesComponent, LocationsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    KeycloakAngularModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BananaHttpService,
    {
      provide: KeycloakService,
      useValue: keycloakService,
    }
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(app) {
    const { keycloakConfig } = environment;
    keycloakService
    .init({ config: keycloakConfig,
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true
      },
      enableBearerInterceptor: true
    })
    .then(() => {
      console.log('[ngDoBootstrap] bootstrap app');

      app.bootstrap(AppComponent);
    })
    .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
  }
}
