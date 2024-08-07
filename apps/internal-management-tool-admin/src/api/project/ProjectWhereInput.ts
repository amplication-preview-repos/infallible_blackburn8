import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProjectWhereInput = {
  createdBy?: EmployeeListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  identifier?: StringNullableFilter;
  name?: StringNullableFilter;
  status?: "Option1";
  statusDetails?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  timeline?: JsonFilter;
};
