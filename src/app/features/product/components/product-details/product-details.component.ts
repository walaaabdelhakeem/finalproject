import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductservicesService } from '../../services/productservices.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
private readonly ActivatedRoute=inject(ActivatedRoute);
private readonly idhttp=inject(ProductservicesService)
id:string|null=''
detailsProduct:Iproduct={} as Iproduct
getproductId(){
 
  this.ActivatedRoute.paramMap.subscribe({
    next:(res)=>{
    this.id=res.get('id')
    }
  })
}
getproductIddetails(){
  this.idhttp.getproductdetails(this.id).subscribe({
    next:({data})=>{
this.detailsProduct=data
    }
  })
}
ngOnInit(): void {
  this.getproductId();
  this.getproductIddetails();
}
}
