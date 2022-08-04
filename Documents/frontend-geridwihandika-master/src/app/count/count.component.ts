import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { count } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  count: number = 0;
  formCount!: FormGroup;

  constructor(private formBuild: FormBuilder){
    this.formCount= this.formBuild.group( { 
      'minimal' : new FormControl( null),
      'maksimal' : new FormControl(null)
    })

  }


  ngOnInit(): void { this.count=0
  }

  penjumlahan() {
    if (this.count >= 10) {
      alert("penjumlahan maksimal 10")
    } else {
      this.count++;
    }
  }
  pengurangan(minimal : number) {
    console.log(minimal);
    if (this.count <= minimal) {
      alert("Pengurangan minimal "+ minimal)
    } else {
      this.count--;
    }

  }
}