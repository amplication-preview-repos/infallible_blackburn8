import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  taskEmployeeId?: SortOrder;
  createdAt?: SortOrder;
  deadline?: SortOrder;
  dependencies?: SortOrder;
  description?: SortOrder;
  estimatedTimeToComplete?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  tasProjectId?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
