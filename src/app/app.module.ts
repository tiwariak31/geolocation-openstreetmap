import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { CustomeSelect2Component } from './custom-select2/custom-select2.component';
import { SharedService } from './shared.service';
import { GeneralService } from './general.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CustomeSelect2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GeneralService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
