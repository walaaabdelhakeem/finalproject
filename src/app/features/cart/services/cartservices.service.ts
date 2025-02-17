import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { IauthService } from '../../../core/auth/services/iauth.service';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {

  constructor(private httpClient: HttpClient, private httpservice: IauthService) { }

  addTOCart(productId: string) {
    return this.httpClient.post(`${environment.baseUrl}cart`, { productId }, {
      headers: { token: this.httpservice.checkifuserExist()! }
    })
  }
  uddateQuantityOfCart(productId: string,count:number) {
    return this.httpClient.put(`${environment.baseUrl}cart/${productId}`, {count}  , {
      headers: { token: this.httpservice.checkifuserExist()! }
    })
  }
  getLoggeduse() {
    return this.httpClient.get(`${environment.baseUrl}cart`, {
      headers: { token: this.httpservice.checkifuserExist()! }
    })
  }
  removespecificcartItem(productId: string,count:number) {
    return this.httpClient.delete(`${environment.baseUrl}cart/${productId}`  , {
      headers: { token: this.httpservice.checkifuserExist()! }
    })
  }
  Clearusercart() {
    return this.httpClient.delete(`${environment.baseUrl}cart/`  , {
      headers: { token: this.httpservice.checkifuserExist()! }
    })
  }
}
