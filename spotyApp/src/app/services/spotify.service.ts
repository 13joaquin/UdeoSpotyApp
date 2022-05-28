import { Injectable, Pipe } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 public credentials = {
  client_id: '508600b5f1f048d09afb174c4c37e85c',
  client_secret: '0db964503e6a4bf5b5dfeb7f0d59e854',
  accesToken: ''
 };
 public poolURls = {
autohirze: 'https://accounts.spotify.com/es-ES/authorize?client_id='+
this.credentials.client_id ,
refreshAccessToken: 'https://accounts.spotify.com/api/token'
 };
  constructor(private http: HttpClient) {
    this.upDateToken();
        console.log("Spotify Service is Ready!");
   }
   upDateToken(){
     this.credentials.accesToken = sessionStorage.getItem('token') || '';
   }
   getQuery(query: string){ 
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = {headers: new HttpHeaders({'Authorization':'Bearer' + this.credentials.accesToken})}
      return this.http.get(url,headers);   
    }
   getReleases(){
    console.log('getReleases') 
    return this.getQuery('browse/new-relases?limit=15');
    }
    getArtistas(termino: string){
      return this.getQuery(`search?q=${ termino }&type=artist&market=ES&limit=10&offset=5`);
    }
    getArtista(id: string){
      return this.getQuery(`artists/${id}`);
    }
       //tarea: getTopTracks(artista), revisar api
    //Query para obtener : Las Mejores Pistas del Artista - Artist's Top Tracks 
    getArtistTopTracks(id : string){
      return this.getQuery(`artists/${ id }/top-tracks?market=ES`);
      }
  
      //Query para obtener : Pistas - Tracks 
      getTracks(id: string){
        return this.getQuery(`tracks/${ id }`);
      }
  
      getTopTracks(id : string){
        return this.getQuery(`artists/${ id }/top-tracks?market=ES`);
      }
     
      checkTokenSpo(){
        return !!this.credentials.accesToken;
      }
    tokenRefreshURL(){
      this.credentials.accesToken = '';
      sessionStorage.removeItem('token');
    }
}
