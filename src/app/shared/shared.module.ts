import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [NavbarComponent, SideBarComponent, SpinnerComponent],
  exports: [NavbarComponent, SideBarComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
