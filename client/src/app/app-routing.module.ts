import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'Exh',
		component: ExhibitionsComponent
	},
	{
		path: 'MsF',
		component: ContactFormComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
