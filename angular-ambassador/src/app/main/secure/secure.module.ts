import {NgModule} from '@angular/core';
import {SecureComponent} from './secure.component';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from '../../shared/shared.module';
import { StatsComponent } from './stats/stats.component';
import { RankingsComponent } from './rankings/rankings.component';


@NgModule({
  declarations: [
    SecureComponent,
    ProfileComponent,
    StatsComponent,
    RankingsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SecureModule {
}
