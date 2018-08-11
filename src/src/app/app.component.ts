import { Component } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { variable } from '../../node_modules/@angular/compiler/src/output/output_ast';
import { DISABLED } from '../../node_modules/@angular/forms/src/model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm:FormGroup;
  //rFormP:FormGroup;  //new
  
  post:any;
  description:string='';
  name:string='';
  pythonbutton:string='';
  javabutton:string='';
  microsoftbutton:string='';
  reserbutton:string='';
  constructor(private fb:FormBuilder)
  {
    this.rForm=fb.group({
      
      'pythonbutton':['Python'],
      'javabutton':['Java'],
      'microsoftbutton':['Microsoft'],
      'resetbutton':[null],


'validate':''

    });

  }
  
  addPost(post){
this.pythonbutton=post.pythonbutton;
this.javabutton=post.javabutton;
this.microsoftbutton=post.microsoftbutton;
this.microsoftbutton=post.microsoftbutton;




  }
  addPostM(post){
    this.microsoftbutton=post.microsoftbutton;
    this.pythonbutton=null;
    this.javabutton=null;
    //document.body.innerHTML="";
    //document.body.innerHTML="You have entered Microsoft Section!"

    
  }

  addPostP(post){


    this.pythonbutton=post.pythonbutton;
    this.microsoftbutton=null;
    this.javabutton=null;
    //document.body.innerHTML="";
    //document.body.innerHTML="You have entered Python Section!"

    }
    
  
  

  addPostJ(post){
    this.javabutton=post.javabutton;
    this.microsoftbutton=null;
    this.pythonbutton=null;
    //document.body.innerHTML="";
    //document.body.innerHTML="You have entered Java Section!"
    

  }
  addPostR(post){
    this.javabutton=null;
    this.microsoftbutton=null;
    this.pythonbutton=null;
    //document.body.innerHTML="";
    
  }
  

//)
  
}