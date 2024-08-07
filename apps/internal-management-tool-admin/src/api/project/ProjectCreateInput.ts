import { EmployeeCreateNestedManyWithoutProjectsInput } from "./EmployeeCreateNestedManyWithoutProjectsInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";

export type ProjectCreateInput = {
  createdBy?: EmployeeCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  identifier?: string | null;
  name?: string | null;
  status?: "Option1" | null;
  statusDetails?: string | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  timeline?: InputJsonValue;
};
