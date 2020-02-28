import { FeesService } from './../fees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeslist',
  templateUrl: './feeslist.component.html',
  styleUrls: ['./feeslist.component.css']
})
export class FeeslistComponent implements OnInit {
  feeslist: Object;

  constructor(private service : FeesService) { }

  ngOnInit() {
    this.service.getFees()
    .subscribe(res=>
      this.feeslist=res)
  }

}
