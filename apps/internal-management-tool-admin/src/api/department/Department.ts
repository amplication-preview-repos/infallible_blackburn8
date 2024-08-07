import { Employee } from "../employee/Employee";

export type Department = {
  createdAt: Date;
  description: string | null;
  employees?: Array<Employee>;
  headOfDepartment: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
