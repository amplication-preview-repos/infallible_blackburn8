import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  headOfDepartment?: string | null;
  name?: string | null;
};
