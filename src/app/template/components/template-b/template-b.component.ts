import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-b',
  templateUrl: './template-b.component.html',
  styleUrls: ['./template-b.component.scss']
})
export class TemplateBComponent implements OnInit {

  @Input() title: string;
  @Input() label: string;

  titre: string;
  libelle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data) => {
      // console.log(data);
      this.titre = data.titre;
      this.libelle = data.libelle;
    });

  }

}
