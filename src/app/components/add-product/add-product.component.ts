import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment } from 'src/environments/environment';

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
    title: new FormControl(''),
    genre: new FormControl(''),
    size: new FormControl(''),
    color : new FormControl(''),
    category: new FormControl(''),
    subcategory: new FormControl(''),
    image1: new FormControl(''),
    image2: new FormControl(''),
    image3: new FormControl(''),
  })
  categories
  constructor(private productService: ProductService, private router: Router) { }
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
    /* if(this.addForm.valid) */
    this.productService.addProduct(this.addForm.value).subscribe(result => {
      this.router.navigate(["/myproducts"]);
    })

  }
  imagePreview
  imagePreviewtwo 
  imagePreview3
  showImage(imageInput: any) {
    const file: File = imageInput.files[0];
    this.addForm.patchValue({image1: file});
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  showImage2(imageInput: any) {
    const file: File = imageInput.files[0];
    this.addForm.patchValue({image2: file});
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreviewtwo = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  showImage3(imageInput: any) {
    const file: File = imageInput.files[0];
    this.addForm.patchValue({image3: file});
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview3 = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  deleteImage1(){
    this.imagePreview=null;
    this.addForm.patchValue({image1: null});
  }
  deleteImage2(){
    this.imagePreviewtwo=null;
    this.addForm.patchValue({image2: null});
  }
  deleteImage3(){
    this.imagePreview3=null,
    this.addForm.patchValue({image3: null});
  }
}
