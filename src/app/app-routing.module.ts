import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layout/main/main.component';


const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('@modules/visitor/visitor.module').then(m => m.VisitorModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
