import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})
export class DataComponent implements OnInit {
  dataR: string[] = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataR = this.route.snapshot.data['dataR'];
  }

}
