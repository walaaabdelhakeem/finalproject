import { Routes } from '@angular/router';
import { AuthComponent } from './core/layouts/auth/auth.component';
import { UserComponent } from './core/layouts/user/user.component';
import { AdminComponent } from './core/layouts/admin/admin.component';
import { LoginComponent } from './core/auth/componentes/login/login.component';
import { RegisterComponent } from './core/auth/componentes/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CatogaryComponent } from './features/catogary/components/catogary/catogary.component';
import { CartComponent } from './features/cart/cart/cart.component';
import { NotfoundComponent } from './core/auth/componentes/notfound/notfound.component';

export const routes: Routes = [
    {path:'auth',component:AuthComponent,children:[
        {path:'',redirectTo:"login",pathMatch:'full'},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'**',component:NotfoundComponent},
    ]},
    {path:'user',component:UserComponent,children:[
        {path:'',redirectTo:"home",pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'category',component:CatogaryComponent},
        {path:'cart',component:CartComponent},
        {path:'**',component:NotfoundComponent},
    ]},
];
