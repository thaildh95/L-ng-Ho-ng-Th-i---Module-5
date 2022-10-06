import {TypeCustomer} from './TypeCustomer';

export interface Customer {
  id: number;
  name: string;
  dayOfBirth: string;
  gender: boolean;
  phone: string;
  email: string;
  type: TypeCustomer;
  address: string;
  statuss: boolean;

}
