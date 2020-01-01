import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../component/footer/footer.component';
import { HeaderComponent } from '../component/header/header.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DefaultModule } from 'src/app/layouts/default/default.module';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule  } from '@angular/flex-layout';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,

    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ShardModule { }
