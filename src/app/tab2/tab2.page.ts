import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dateae:any;
  dateNumber = new Date().getDate();
  day =  new Date().getDay();
  days: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
  flag:boolean =false;

  constructor(public service: WeatherService) {
    this.service.getWeather().subscribe(data =>{
      this.dateae = data;
      console.log(data);
      this.flag = true;
    })
  }

}
