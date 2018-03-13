import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <--- JavaScript import from Angular

import { AppComponent } from "./app.component";
import { PickerComponent } from "./picker/picker.component";

import { StateService } from "./state.service";

@NgModule({
  declarations: [AppComponent, PickerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
