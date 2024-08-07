import { Employee } from "../employee/Employee";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Task = {
  assignedTo?: Employee | null;
  createdAt: Date;
  deadline: Date | null;
  dependencies: JsonValue;
  description: string | null;
  estimatedTimeToComplete: JsonValue;
  id: string;
  priority?: "Option1" | null;
  project?: Project | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
