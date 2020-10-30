import { Component, Input, OnInit } from '@angular/core';
import { Activities } from '../models/activities';
import { InterappService } from '../services/interapp.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({  
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input () ide: string;
  activity: Activities;
  activities:Activities[];
  lenthg: number;
  forma: FormGroup;
  flag:boolean =false;
  constructor(private service: InterappService, private formBuilder: FormBuilder, private modal: ModalController) { 
    this.createForm();
  }

  ngOnInit() {

    if(this.ide != ''){
      this.service.getActivityByID(this.ide).subscribe((data : Activities) =>{
        this.activity = data;
        this.flag = true;
        
        this.forma.patchValue({
          id: this.activity.id,
          categoria: this.activity.categoria,
          descripcion : this.activity.descripcion,
          fecha : this.activity.fecha
        });
      });
    }else{
      //to know the lenght and put the new id
      this.forma.patchValue({
        id: Date.now(),
      });
      this.flag = true;
    }

    this.forma.get('categoria').valueChanges.subscribe((event) => {
      this.forma.get('categoria').setValue(event.toLowerCase(), {emitEvent: false});
   })
  }

  
  getCategoriaInvalid(){
    this.forma.get('categoria').invalid  && this.forma.get('categoria').touched;
  }

  getDescripcionInvalid(){
    return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched;
  }

  getfechaInvalid(){
    this.forma.get('fecha').invalid  && this.forma.get('fecha').touched;
  }

  createForm(){
    this.forma = this.formBuilder.group({
      id: ['',[Validators.required]],
      categoria: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      fecha: ['',[Validators.required]]
    });
  }

  delete(){
    this.service.deleteByID(this.ide).subscribe(res =>{
      this.refresh();
    })
  }

  refresh() {
    this.service.getActivities().subscribe((data: Activities[]) => {
      this.service.activies = data;
    });
    this.modal.dismiss();
  }

  save(){
    if(this.forma.valid){
      if(this.ide != ''){
        this.service.updateById(this.ide,this.forma.value).subscribe(res => this.refresh());
      } else{
        this.service.addNewActivity(this.forma.value).subscribe(res => this.refresh());
      }
      
        
    }
  }


  closeModal(){
    this.modal.dismiss();
  }

}
