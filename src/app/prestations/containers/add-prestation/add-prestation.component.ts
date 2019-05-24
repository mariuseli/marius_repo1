import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationService } from 'src/app/prestations/services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  )
    {

    }

  ngOnInit() {
  }

  add(item: Prestation){
    this.prestationService
      .add(item)
      .then((res) => { //car le firebase retourne une promesse

        this.router.navigate(['../', {relativeTo: this.route}]);
      })
  }

  // //Par Api Http
  // add(item: Prestation){
  //   this.prestationService
  //     .add(item)
  //     .subscribe((res) => { //car l'api http retourne un Observable

  //       this.router.navigate(['../', {relativeTo: this.route}]);
  //     })
  // }
}
