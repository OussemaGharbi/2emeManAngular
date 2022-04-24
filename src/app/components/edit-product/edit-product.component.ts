import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  //to show formulaire
  pv = false

  shower = false
  produit: Product

  productId: string;

  addForm = new FormGroup({
    description: new FormControl(''),
    etat: new FormControl(''),
    title: new FormControl(''),
    genre: new FormControl(''),
    size: new FormControl(''),
    color: new FormControl(''),
    category: new FormControl(''),
    subcategory: new FormControl(''),
    image1: new FormControl(''),
    image2: new FormControl(''),
    image3: new FormControl(''),
  })
  categories
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {

  }
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
  // show1(){

  //   this.shower = true
  //   const x = this.categories.find(item => {
  //     return item.name == this.addForm.get('category')
  //   })
  //   this.subcategories = x.subcategories
  //   console.log(this.subcategories);
  // }
  ngOnInit(): void {
    this.productService.getCategories().subscribe(result => {
      this.categories = result
      console.log(this.categories)
    })
    this.activatedRoute.paramMap.subscribe({
      next: param => {
        this.productId = param.get('id')
        this.productService.getProduct(this.productId).subscribe(result => {
          this.produit = result
          console.log(this.produit)
          this.pv = true
          this.addForm.get('title').setValue(this.produit.title)
          this.addForm.get('description').setValue(this.produit.description)
          this.addForm.get('genre').setValue(this.produit['genre'])
          this.addForm.get('etat').setValue(this.produit['etat'])
          this.addForm.get('size').setValue(this.produit.size)
          this.addForm.get('color').setValue(this.produit.color)
          this.addForm.get('category').setValue(this.produit.category)
          this.addForm.get('subcategory').setValue(this.produit.subcategory)
          this.imagePreview= this.produit['images'][0] ?? null
          this.imagePreviewtwo=this.produit['images'][1] ?? null
          this.imagePreview3 =this.produit['images'][2] ?? null
          const x = this.categories.find(item => {
            return item.name == this.produit.category
          })
          this.subcategories = x.subcategories
        })
      }
    })
  }
  submit() {
    console.log(this.addForm.value);
    /* if(this.addForm.valid) */
    this.productService.editProduct(this.addForm.value, this.productId).subscribe(result => {
      this.router.navigate(["/myproducts"]);
    })

  }
  imagePreview
  imagePreviewtwo
  imagePreview3
  showImage(imageInput: any) {
    const file: File = imageInput.files[0];
    this.addForm.patchValue({ image1: file });
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  showImage2(imageInput: any) {
    const file: File = imageInput.files[0];
    this.addForm.patchValue({ image2: file });
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreviewtwo = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  showImage3(imageInput: any) {
    const file: File = imageInput.files[0];
    this.addForm.patchValue({ image3: file });
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview3 = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  deleteImage1() {
    this.imagePreview = null;
    this.addForm.patchValue({ image1: null });
  }
  deleteImage2() {
    this.imagePreviewtwo = null;
    this.addForm.patchValue({ image2: null });
  }
  deleteImage3() {
    this.imagePreview3 = null,
      this.addForm.patchValue({ image3: null });
  }
}
