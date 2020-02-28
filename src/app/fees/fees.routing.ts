import { FeeslistComponent } from './feeslist/feeslist.component';
import { FeesComponent } from './Fees.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  path: "",component:FeeslistComponent},
  {path:"fees",component:FeeslistComponent}
];

export const FeesRoutes = RouterModule.forChild(routes);
