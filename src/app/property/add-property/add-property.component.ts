import { Component, OnInit } from '@angular/core';
import { Localhostapi } from 'src/app/interfaces/localhostapi';
import { TredingService } from 'src/app/service/treding.service';
import { Iproperty } from '../property-list/Iproperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  properties:Array<Localhostapi> | undefined;

  constructor(private tredingService:TredingService) { }

  ngOnInit(): void {
    this.tredingService.getAlldata().subscribe(
      data=>{
        console.log(data);
        this.properties=data;
        console.log(data);
      },error=>{
        console.log('httperror');
        console.log(error);

      }
    );

  }
 }
