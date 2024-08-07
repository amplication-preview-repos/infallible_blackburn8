import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { PROJECT_TITLE_FIELD } from "./ProjectTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="identifier" source="identifier" />
        <TextField label="name" source="name" />
        <TextField label="status" source="status" />
        <TextField label="statusDetails" source="statusDetails" />
        <TextField label="timeline" source="timeline" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Task"
          target="tasProjectId"
          label="Tasks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="assignedTo"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="deadline" source="deadline" />
            <TextField label="dependencies" source="dependencies" />
            <TextField label="description" source="description" />
            <TextField
              label="estimatedTimeToComplete"
              source="estimatedTimeToComplete"
            />
            <TextField label="ID" source="id" />
            <TextField label="priority" source="priority" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
