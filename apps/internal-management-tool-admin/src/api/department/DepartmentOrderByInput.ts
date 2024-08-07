import { SortOrder } from "../../util/SortOrder";

export type DepartmentOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  headOfDepartment?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
