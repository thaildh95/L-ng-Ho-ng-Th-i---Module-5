import {FromArea} from "./FromArea";
import {ToArea} from "./ToArea";

export interface Travel {
  id:number;
  carCode:string;
  typeCar:string;
  from:FromArea;
  to  :ToArea;
  phone:string;
  email:string;
  start:string;
  end:string;

}
