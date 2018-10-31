import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TarefaService } from './shared';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		TarefaService
	]
})
export class TarefasModule { }
