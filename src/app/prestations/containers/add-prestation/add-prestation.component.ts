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
    this.prestationService.add(item);
    this.router.navigate(['../', {relativeTo: this.route}]);
  }
}
