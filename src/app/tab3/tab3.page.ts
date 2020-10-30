import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Activities } from '../models/activities';
import { InterappService } from '../services/interapp.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [[]];
  doughnutChartType: ChartType = 'doughnut';
  flag:boolean=false;
  result:any[];

  constructor(private service: InterappService ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

  ionViewWillEnter(){
    this.doughnutChartLabels = [];
    this.doughnutChartData = [[]];
    
    this.service.getActivities().subscribe((data: Activities[])=>{
      this.result  = [...data.reduce((mp,o) =>{
        if (!mp.has(o.categoria)) mp.set(o.categoria, { ...o, count: 0 });
        mp.get(o.categoria).count++;
        return mp;
      }, new Map).values()]

      this.result.sort((a,b) => (a.count > b.count) ? -1 : 1);

      this.result.map((data,index) =>{
        if(index => 4){
          this.doughnutChartLabels.push(data.categoria);
          this.doughnutChartData[0].push(data.count);
        }
      });

      this.flag= true;
    });
  }
}
