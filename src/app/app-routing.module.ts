import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { CreditsComponent } from './credits/credits.component';


const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'credits', component: CreditsComponent },
	{ path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
