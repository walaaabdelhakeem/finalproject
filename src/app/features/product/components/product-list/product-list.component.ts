import { Component, inject, OnInit } from '@angular/core';
import { ProductservicesService } from '../../services/productservices.service';
import { Iproduct } from '../../models/iproduct';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  allProducts:Iproduct[]=[]
private products=inject(ProductservicesService)

getAllProduct(){
  this.products.getproducts().subscribe({
    next:({data})=>{
      console.log(data)
      this.allProducts=data;
    },error:(err)=>{
      console.log(err)
    }
  })
}
ngOnInit(): void {
  this.getAllProduct()
}
}
