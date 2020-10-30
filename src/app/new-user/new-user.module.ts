import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserPageRoutingModule } from './new-user-routing.module';

import { NewUserPage } from './new-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewUserPage]
})
export class NewUserPageModule {}