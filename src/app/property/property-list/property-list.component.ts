
import { Component, OnInit } from '@angular/core';
import { TredingService } from 'src/app/service/treding.service';
import { Iproperty } from './Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<Iproperty> | undefined;

  constructor(private tredingService:TredingService) { }

  ngOnInit(): void {
    this.tredingService.getAllProperties().subscribe(
      data=>{
        this.properties=data;
        console.log(data);
      },error=>{
        console.log('httperror');
        console.log(error);

      }
    );
    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.Properties=data;
    //   }
    // );
  }

}
