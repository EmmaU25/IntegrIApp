import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Activities } from '../models/activities';
import { InterappService } from '../services/interapp.service';
import { DetailPage } from '../detail/detail.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit,OnChanges{
  
  activities: Activities[];
  constructor(public activitiesService: InterappService, private modalcontroller: ModalController) {}

  ngOnInit(){
    this.activitiesService.getActivities().subscribe( (data: Activities[]) =>{
      this.activitiesService.activies = data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }
  async presentModal(id: string) {
    const modal = await this.modalcontroller.create({
      component: DetailPage,
      cssClass: 'modal-80',
      swipeToClose: true,
      backdropDismiss: true,
      mode: 'ios',
      componentProps: {
        'ide': id
      }
    });
    return await modal.present();
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
