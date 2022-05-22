import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private router: Router) {
    console.log("TarjetasComponent")
   }

  ngOnInit(): void {
  }
  verArtista(item : any){
    let artistaId;
    console.log(item.type)
    if(item.type === 'artists'){
      artistaId = item.id;
    }else{
      console.log(item.id)
      artistaId = item.artists["0"].id;
    }
    this.router.navigate(['/artists',artistaId]);
  }

}
