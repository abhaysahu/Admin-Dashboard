import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { ShardModule } from 'src/app/shard/shard/shard.module';
import { MatSidenavModule, MatDividerModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ShardModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule

    
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
