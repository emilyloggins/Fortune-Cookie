import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Required for Angular apps
import { AppComponent } from './app.component';
import { FortuneCookieComponent } from './fortune-cookie/fortune-cookie.component';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    AppComponent,       // Declare the root app component
    FortuneCookieComponent, // Declare your fortune cookie component
    HelloWorldComponent
  ],
  imports: [
    BrowserModule      // Import necessary modules (like BrowserModule)
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the app with the AppComponent
})
export class AppModule { }
