import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from "@angular/router"
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
     WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: 'welcome', pathMatch: "full" },
      { path: "**", redirectTo: 'welcome', pathMatch: "full"}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
