/**
 *  @license
 *
 *
 * Copyright [2018] [(MAMB Manuel HUbert, Marcel Werle, Artur Mandybura and Benjamin Stone)]

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Copyright (c) 2018 by MAMB (Manuel HUbert, Marcel Werle, Artur Mandybura and Benjamin Stone)
 *
 *
 */

import {Component, Input, OnInit} from "@angular/core";
import {IConstructionArea, IConstructionAreaDay} from "../../Resourcenpanel/IConstructionArea";
import { Employee } from "../../../model/employee";
import { Vehicle } from "../../../model/vehicle";
import { Material } from "../../../model/material";

@Component({
  selector: 'pl-calender-construction-area',
  templateUrl: './calender-construction-area.component.html',
  styleUrls: ['./calender-construction-area.component.css']
})
export class CalenderConstructionAreaComponent implements OnInit{

  @Input()
  public constructionArea : IConstructionArea;

  @Input()
  public  date : string;

  public constructionAreaDay : IConstructionAreaDay;

  ngOnInit(): void
  {
    this.constructionAreaDay = this.constructionArea.days[this.date];
    
    if (this.constructionAreaDay.employees === (null|| undefined))
      this.constructionAreaDay.employees = new Array<Employee>();

    if (this.constructionAreaDay.materials === (null || undefined))
      this.constructionAreaDay.materials = new Array<Material>();

    if (this.constructionAreaDay.vehicles === (null || undefined))
      this.constructionAreaDay.vehicles = new Array<Vehicle>();
  }

  public hasEmployees() : boolean
  {
    if (this.constructionAreaDay.employees === null || this.constructionAreaDay.employees === undefined)
      return false;
    
    return true;
  }
  public hasVehicles() : boolean
  {
    if (this.constructionAreaDay.vehicles === null || this.constructionAreaDay.vehicles === undefined)
      return false;
    
    return true;
  }
  public hasMaterials() : boolean
  {
    if (this.constructionAreaDay.materials === null || this.constructionAreaDay.materials === undefined)
      return false;
    
    return true;
  }
  public onDropItem(e :any) : void
  {
    let droppedObject = e.dragData;
    console.log("Data gedroppt");
    console.log(typeof(droppedObject));

    if (droppedObject.hasOwnProperty('skills') )
    {
      this.constructionAreaDay.employees.push(droppedObject);
      console.log("mitarbeiter gedroppt");
    }
    if (droppedObject.hasOwnProperty('modell'))
    {
      this.constructionAreaDay.vehicles.push(droppedObject);
      console.log("fahrzeug gedroppt");
      
    }
    if (droppedObject.hasOwnProperty('description'))
    {
      this.constructionAreaDay.materials.push(droppedObject);
      console.log("material gedroppt");
      
    }
  }



}