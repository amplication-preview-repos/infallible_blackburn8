import { ProjectUpdateManyWithoutEmployeesInput } from "./ProjectUpdateManyWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { TaskUpdateManyWithoutEmployeesInput } from "./TaskUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  assignedTo?: ProjectUpdateManyWithoutEmployeesInput;
  department?: DepartmentWhereUniqueInput | null;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  tasks?: TaskUpdateManyWithoutEmployeesInput;
};
