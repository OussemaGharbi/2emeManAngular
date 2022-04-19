import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  addForm = new FormGroup({
    description: new FormControl(''),
    etat: new FormControl(''),
    objet: new FormControl(''),
    genre: new FormControl(''),

  })
  constructor() { }
  pointer(input){
    input.click()

  }
  ngOnInit(): void {
  }
  submit(){
    console.log(this.addForm.value);
    

  }
}
