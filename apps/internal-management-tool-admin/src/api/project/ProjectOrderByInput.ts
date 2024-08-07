import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  statusDetails?: SortOrder;
  timeline?: SortOrder;
  updatedAt?: SortOrder;
};
