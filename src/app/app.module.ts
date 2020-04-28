import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportComponent } from './components/report/report.component';
import { UpdateComponent } from './components/update/update.component';
import { ErrorComponent } from './components/error/error.component';
import { DataService } from './services/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, AppRoutingModule ],
  declarations: [ AppComponent, NavbarComponent, ReportComponent, UpdateComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
