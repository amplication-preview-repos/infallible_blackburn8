import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assignedTo.id"
          reference="Employee"
          label="assignedTo"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <DateTimeInput label="deadline" source="deadline" />
        <div />
        <TextInput label="description" multiline source="description" />
        <div />
        <SelectInput
          source="priority"
          label="priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
