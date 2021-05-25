import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionListComponent } from './components/region-list/region-list.component';

const routes: Routes = [
  { path: 'region', component: RegionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {}
