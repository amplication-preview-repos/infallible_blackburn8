import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type EmployeeWhereInput = {
  assignedTo?: ProjectListRelationFilter;
  department?: DepartmentWhereUniqueInput;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
};
