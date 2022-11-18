import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { IconLibraryModule } from 'projects/icon-library/src/public-api';

import { AppComponent } from './app.component';
import { DataComponent } from './modules/data/data.component';
import { DataResolver } from './modules/data/data.resolver';

const routes: Routes = [
  {path: 'data', component: DataComponent, resolve: { dataR: DataResolver }},
];

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,

    IconLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
