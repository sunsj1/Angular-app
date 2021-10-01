import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TredingService } from './service/treding.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes,RouterModule } from '@angular/router';
//import { AddPropertyComponent } from './add-property/add-property.component';

const appRoutes:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'add-property',component:AddPropertyComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TredingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
