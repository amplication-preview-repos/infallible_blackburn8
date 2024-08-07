import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  headOfDepartment?: string | null;
  name?: string | null;
};
