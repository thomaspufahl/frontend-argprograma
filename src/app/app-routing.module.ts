import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layout/main/main.component';
import { LoggedGuard } from '@core/guards/logged.guard';


const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('@modules/visitor/visitor.module').then(m => m.VisitorModule)
			},
			{
				path: 'logged',
				loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule),
				canActivate: [LoggedGuard]
			}
		],
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
