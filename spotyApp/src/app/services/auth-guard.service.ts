import { Inject, Injectable } from "@angular/core";
import { CanActivate,RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Observable, observable } from "rxjs";
import { SpotifyService } from './spotify.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
    constructor(private _SpotifyService: SpotifyService){
    }
    canActivate(
        next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this._SpotifyService.checkTokenSpoLogin();
        return this._SpotifyService.checkTokenSpo();
    }
}