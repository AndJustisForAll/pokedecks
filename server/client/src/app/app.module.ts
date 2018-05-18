import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/store';

import { AppRouterModule } from './app-router.module';
import { DeckBuilderModule } from './deck-builder/deck-builder.module';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    HttpClientModule,
    AngularMaterialModule,
    AppRouterModule,
    DeckBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
