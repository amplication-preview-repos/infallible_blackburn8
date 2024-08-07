import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: EmployeeWhereUniqueInput;
  deadline?: DateTimeNullableFilter;
  dependencies?: JsonFilter;
  description?: StringNullableFilter;
  estimatedTimeToComplete?: JsonFilter;
  id?: StringFilter;
  priority?: "Option1";
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
};
