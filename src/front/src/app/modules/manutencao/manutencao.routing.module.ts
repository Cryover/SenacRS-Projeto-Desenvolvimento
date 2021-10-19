import { VisualizaManutencaoComponent } from './visualiza-manutencao/visualiza-manutencao.component';
import { CadastraManutencaoComponent } from './cadastra-manutencao/cadastra-manutencao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
	{
    path: 'cadastra',
    component: CadastraManutencaoComponent,
    data: { title: 'Cadastro de manutenção'}
  },
	{
    path: 'visualiza',
    component: VisualizaManutencaoComponent,
    data: { title: 'Visualiza manutenção'}
  }
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})

export class ManutencaoRoutingModule {

}
