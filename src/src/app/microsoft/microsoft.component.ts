import { Component, OnInit } from '@angular/core';
import{Location} from '@angular/common';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
    
  }

}
