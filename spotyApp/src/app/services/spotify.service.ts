import { Injectable, Pipe } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service is Ready!");
   }
   getQuery(query: string){ 
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders({'Authorization':'Bearer BQDAIqBxWA6LS0' })
      return this.http.get(url,{headers: headers});   
    }
   getReleases(){
     return this.getQuery('browse/new-relases?limit=15').pipe(map((data: any) => data['albums'].item));
    }
    getArtistas(id: string){
      return this.getQuery('artists/${id}');
    }
      getTopTracks(id : string){
      return this.getQuery('artists/${id}/top-tracks?market=ES');
    }
}
