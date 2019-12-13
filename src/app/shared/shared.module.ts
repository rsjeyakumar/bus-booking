import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Prime NG modules */
import { CalendarModule } from 'primeng/calendar';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpService } from './services/http.service';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, OverlayPanelModule
  ],
  providers: [HttpService],
  exports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CalendarModule]
})
export class SharedModule { }
