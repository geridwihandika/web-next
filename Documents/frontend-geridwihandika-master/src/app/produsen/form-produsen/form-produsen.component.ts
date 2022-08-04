import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdusenModel } from '../produsen.model';
import { ProdusenService } from '../produsen.service';

@Component({
  selector: 'app-form-produsen',
  templateUrl: './form-produsen.component.html',
  styleUrls: ['./form-produsen.component.css']
})
export class FormProdusenComponent implements OnInit {
  formProdusen!: FormGroup;

  constructor(private formBuild: FormBuilder, private _produsenService:ProdusenService) {
    this.formProdusen = this.formBuild.group({
      'nama': new FormControl(null, [Validators.required]),
      'kode': new FormControl(null, [Validators.required]),
      'alamat': new FormControl(null, [Validators.required])
    });

  }

  ngOnInit(): void { }

  save(){
    let produsen: ProdusenModel = new ProdusenModel();
    produsen = this.formProdusen.value;

    this._produsenService.create(produsen).subscribe( response => {
      if (response.status === 200) {
        console.log(response.body)
      }
    })
  }

}



