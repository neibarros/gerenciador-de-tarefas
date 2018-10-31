import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		ListarTarefaComponent
	],
	providers: [
		TarefaService
	]
})
export class TarefasModule { }
