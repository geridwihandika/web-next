import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  formatDataDiri!: FormGroup;

  constructor(private formBuild: FormBuilder) { 
    this.formatDataDiri = this.formBuild.group({
      'nama':new FormControl( null , [Validators.required]),
      'umur':new FormControl( null, [Validators.min(10), Validators.max(70), Validators.required]),
      'noTelp':new FormControl( null , [Validators.minLength(12),Validators.required]),
      'email':new FormControl( null, [Validators.email, Validators.required]),
      'alamat':new FormControl( null, [Validators.minLength(10),Validators.required]),
    }
      

    )
  }

  ngOnInit(): void {
  }

}
