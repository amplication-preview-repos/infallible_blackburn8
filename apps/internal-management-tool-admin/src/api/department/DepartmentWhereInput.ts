import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DepartmentWhereInput = {
  description?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  headOfDepartment?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
