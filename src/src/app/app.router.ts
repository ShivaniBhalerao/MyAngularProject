import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule}from '@angular/router';

import {AppComponent} from './app.component';
import{PythonComponent} from './python/python.component';
import{JavaComponent} from './java/java.component';
import{MicrosoftComponent} from './microsoft/microsoft.component';
import{HomeComponent} from './home/home.component';

export const router:Routes=[
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'python',component:PythonComponent},
{path:'java',component:JavaComponent},
{path:'microsoft',component:MicrosoftComponent}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);



