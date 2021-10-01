import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{map} from 'rxjs/operators';
import { Iproperty } from '../property/property-list/Iproperty.interface';
import { Observable } from 'rxjs';
import { Localhostapi } from '../interfaces/localhostapi';

@Injectable({
  providedIn: 'root'
})
export class TredingService {

  constructor(private http:HttpClient) { }

  getAllProperties():Observable<Iproperty[]>{
    return this.http.get<Iproperty[]>('https://jsonplaceholder.typicode.com/photos').pipe(
      map(
        data=>{
          const propertiesArray: Array<Iproperty> =[];
          for(const id in data){
            if(data.hasOwnProperty(id)){
              propertiesArray.push(data[id]);
            }
          }
            return propertiesArray;
        }
      )
    )
  }
  getAlldata():Observable<Localhostapi[]>{
    return this.http.get<Localhostapi[]>('http://localhost:8000/api').pipe(
      map(
        data=>{
          const propertiesArray: Array<Localhostapi> =[];
          for(const id in data){
            if(data.hasOwnProperty(id)){
              propertiesArray.push(data[id]);
            }
          }
            return propertiesArray;
        }
      )
    )
  }


}
