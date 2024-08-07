import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: EmployeeWhereUniqueInput | null;
  deadline?: Date | null;
  dependencies?: InputJsonValue;
  description?: string | null;
  estimatedTimeToComplete?: InputJsonValue;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
