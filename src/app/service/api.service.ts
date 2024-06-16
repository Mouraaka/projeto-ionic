import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = 'd562be4e93mshdbb079fc5dd9b1bp181c5fjsne115f1654351';
  private apiUrl = 'https://gamerpower.p.rapidapi.com/api/giveaways';
  private idApiUrl = 'https://gamerpower.p.rapidapi.com/api/giveaway';  

  constructor(private http: HttpClient) { }
  
  getGiveaways(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
      }
    });
  }
  
  getGiveawayDetails(id: string): Observable<any> {
    const url = `${this.idApiUrl}?id=${id}`;
    return this.http.get<any>(url, {
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
      }
    });
  }

  giveawayPlataform(platform: string): Observable<any> {
    const url = `${this.apiUrl}?platform=${platform}`;
    return this.http.get<any>(url, {
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
      }
    });
  }

}
