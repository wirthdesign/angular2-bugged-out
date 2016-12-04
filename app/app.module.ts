// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugModule } from './bugs/bug.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// Component 
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    BugModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
