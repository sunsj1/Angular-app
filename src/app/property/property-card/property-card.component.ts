import { LIFECYCLE_HOOKS_VALUES } from "@angular/compiler/src/lifecycle_reflector";
import { Component, Input } from "@angular/core";
import { Iproperty } from "../property-list/Iproperty.interface";

@Component({
  selector:'app-property-card',
  //template:`<h1>First Component</h1>`,
  templateUrl:`property-card.component.html`,
  styleUrls:['property-card.component.css']

})
export class PropertyCardComponent{
  @Input()
  property!: Iproperty;



}
