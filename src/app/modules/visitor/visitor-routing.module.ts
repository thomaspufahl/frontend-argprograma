import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from '@modules/visitor/page/visitor/visitor.component';

const routes: Routes = [
	{
		path: '',
		component: VisitorComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VisitorRoutingModule { }
