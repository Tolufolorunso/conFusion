import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
// import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatRippleModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import "hammerjs";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // HttpModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
