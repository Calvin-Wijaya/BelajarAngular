import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NavInfoComponent } from './components/nav-info/nav-info.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { SearchBrandComponent } from './components/search-brand/search-brand.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [UserComponent, NavInfoComponent, NavigationComponent, HeadlineComponent, SearchBrandComponent, FooterComponent],
  imports: [CommonModule, UserRoutingModule, MaterialModule],
})
export class UserModule {}
