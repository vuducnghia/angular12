/**
 * This file defines the root module of the Angular 2 of the application.
 */

// import angular2
import { NgModule, Component } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';

// import app modules
// import {MessagesNgModule} from './messages';
import { HomeNgModule } from './home/home.module';
import { ContactNgModule } from './contact/contact.module';



// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith("/contact"); // bắt buộc có nếu muốn 
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@Component({
  selector: 'root-cmp',
  templateUrl: './app2.html',
})
export class RootCmp { }

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,

    // import all modules
    HomeNgModule,
    ContactNgModule,

    // MessagesNgModule,
    // SettingsNgModule,

    // We don't need to provide any routes.
    // The router will collect all routes from all the registered modules.
    RouterModule.forRoot([])
  ],
  providers: [  // import các component của angular 2
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],

  bootstrap: [RootCmp],
  declarations: [RootCmp]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule) { }
}