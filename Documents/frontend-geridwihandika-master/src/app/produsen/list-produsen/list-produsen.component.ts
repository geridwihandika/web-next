import { Component, OnInit } from '@angular/core';
import { ProdusenModel } from '../produsen.model';
import { ProdusenService } from '../produsen.service';

@Component({
  selector: 'app-list-produsen',
  templateUrl: './list-produsen.component.html',
  styleUrls: ['./list-produsen.component.css']
})
export class ListProdusenComponent implements OnInit {

  listProdusen!: ProdusenModel[];

  constructor(private _produsenService: ProdusenService) { }

  ngOnInit(): void {
    this.getListProdusen();
  }

  getListProdusen() {
    this._produsenService.list().subscribe({
      next: response => {
        console.log(response);
        this.listProdusen= response
      

      },
      error: err => {
        console.log(err);

      },
      complete: () => {
        console.log("service telah dijalankan")

      }
    })
  }
}
