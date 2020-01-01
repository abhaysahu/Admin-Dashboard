import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { ShardModule } from 'src/app/shard/shard/shard.module';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ShardModule
    
  ]
})
export class DefaultModule { }
