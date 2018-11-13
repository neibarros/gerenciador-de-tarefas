import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		ListarTarefaComponent,
		CadastrarTarefaComponent,
		EditarTarefaComponent,
		TarefaConcluidaDirective
	],
	providers: [
		TarefaService
	]
})
export class TarefasModule { }
