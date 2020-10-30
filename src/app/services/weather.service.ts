import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiURL:string = "http://api.openweathermap.org/data/2.5/weather?q=";
  city:string="Orizaba"
  
  constructor(private http: HttpClient) { }

  getWeather(){
    return this.http.get(this.apiURL+this.city+"&appid="+environment.apiKeyWeather+"&units=metric");
  }
}
