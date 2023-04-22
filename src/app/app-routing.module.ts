import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layout/main/main.component';
import { AdminGuard } from './core/guards/admin.guard';


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
				path: 'user',
				loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule),
				canActivate: [AdminGuard]
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
