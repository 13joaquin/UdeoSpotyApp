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
     const headers = new HttpHeaders({'Authorization':'Bearer BQAdtTDmM58fgSKeOqnl_fQrkccP_XCn1Kxh2ocajFbz9fl4PTWDnOA3dTbYksapAkET8kvVlynUIoLqrPQ-HyB0JTl4iAaEFeAXCzQqbWTmdoH07jn2PwiDt52sg8sGtu7UBl7zPfSqrqXVCR8TlsMhSvbU9-CEqD9DrpL0fE-Fshms' })
      return this.http.get(url,{headers: headers});   
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
      getTopTracks(id : string){
      return this.getQuery(`artists/${id}/top-tracks?market=ES`);
    }
}
