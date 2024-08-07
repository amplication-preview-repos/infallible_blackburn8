import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Projects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="identifier" source="identifier" />
        <TextField label="name" source="name" />
        <TextField label="status" source="status" />
        <TextField label="statusDetails" source="statusDetails" />
        <TextField label="timeline" source="timeline" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
