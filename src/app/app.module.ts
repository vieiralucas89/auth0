import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HighlightModule } from "ngx-highlightjs";
import json from "highlight.js/lib/languages/json";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeContentComponent } from "./components/home-content/home-content.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';

export function hljsLanguages() {
  return [{ name: "json", func: json }];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HomeContentComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    HighlightModule.forRoot({
      languages: hljsLanguages,
    }),
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
