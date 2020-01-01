import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../component/footer/footer.component';
import { HeaderComponent } from '../component/header/header.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DefaultModule } from 'src/app/layouts/default/default.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ShardModule { }
