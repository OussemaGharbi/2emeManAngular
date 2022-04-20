import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  shower = false



  addForm = new FormGroup({
    description: new FormControl(''),
    etat: new FormControl(''),
    objet: new FormControl(''),
    genre: new FormControl(''),

  })
  categories
  constructor(private productService: ProductService) { }
  pointer(input) {
    input.click()

  }
  subcategories
  show(categorieName) {
    console.log(categorieName.value);

    this.shower = true
    const x = this.categories.find(item => {
      return item.name == categorieName.value
    })
    this.subcategories = x.subcategories
    console.log(this.subcategories);

  }
  ngOnInit(): void {
    this.productService.getCategories().subscribe(result => {
      this.categories = result
      console.log(this.categories)
    })
  }
  submit() {
    console.log(this.addForm.value);


  }
  imagePreview
  imagePreviewtwo 
  imagePreview3
  showImage(imageInput: any) {
    const file: File = imageInput.files[0];
    /* this.postForm.patchValue({image: file}); */
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  showImage2(imageInput: any) {
    const file: File = imageInput.files[0];
    /* this.postForm.patchValue({image: file}); */
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreviewtwo = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  showImage3(imageInput: any) {
    const file: File = imageInput.files[0];
    /* this.postForm.patchValue({image: file}); */
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview3 = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  deleteImage1(){
    this.imagePreview=null
  }
  deleteImage2(){
    this.imagePreviewtwo=null
  }
  deleteImage3(){
    this.imagePreview3=null
  }
}
