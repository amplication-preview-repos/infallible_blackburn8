import { Employee } from "../employee/Employee";
import { Task } from "../task/Task";
import { JsonValue } from "type-fest";

export type Project = {
  createdAt: Date;
  createdBy?: Array<Employee>;
  description: string | null;
  id: string;
  identifier: string | null;
  name: string | null;
  status?: "Option1" | null;
  statusDetails: string | null;
  tasks?: Array<Task>;
  timeline: JsonValue;
  updatedAt: Date;
};
