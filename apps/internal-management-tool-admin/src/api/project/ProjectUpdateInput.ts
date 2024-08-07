import { EmployeeUpdateManyWithoutProjectsInput } from "./EmployeeUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";

export type ProjectUpdateInput = {
  createdBy?: EmployeeUpdateManyWithoutProjectsInput;
  description?: string | null;
  identifier?: string | null;
  name?: string | null;
  status?: "Option1" | null;
  statusDetails?: string | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  timeline?: InputJsonValue;
};
