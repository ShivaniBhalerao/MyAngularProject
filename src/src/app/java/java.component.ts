import { Component, OnInit } from '@angular/core';
import{Location} from '@angular/common';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
   goBack(){
    this.location.back();

}
}
