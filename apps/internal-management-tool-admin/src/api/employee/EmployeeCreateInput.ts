import { ProjectCreateNestedManyWithoutEmployeesInput } from "./ProjectCreateNestedManyWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { TaskCreateNestedManyWithoutEmployeesInput } from "./TaskCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  assignedTo?: ProjectCreateNestedManyWithoutEmployeesInput;
  department?: DepartmentWhereUniqueInput | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  tasks?: TaskCreateNestedManyWithoutEmployeesInput;
};
