import { Project } from "../project/Project";
import { Department } from "../department/Department";
import { Task } from "../task/Task";

export type Employee = {
  assignedTo?: Array<Project>;
  createdAt: Date;
  department?: Department | null;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
