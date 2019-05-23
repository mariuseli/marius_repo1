import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {

  @Input() title: string;
  @Input() label: string;

  titre: string;
  libelle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data) => {
      this.titre = data.titre;
      this.libelle = data.libelle;
    });

  }

}
