/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeListRelationFilter } from "../../employee/base/EmployeeListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumProjectStatus } from "./EnumProjectStatus";
import { TaskListRelationFilter } from "../../task/base/TaskListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

@InputType()
class ProjectWhereInput {
  @ApiProperty({
    required: false,
    type: () => EmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeListRelationFilter, {
    nullable: true,
  })
  createdBy?: EmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  identifier?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumProjectStatus,
  })
  @IsEnum(EnumProjectStatus)
  @IsOptional()
  @Field(() => EnumProjectStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  statusDetails?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TaskListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TaskListRelationFilter)
  @IsOptional()
  @Field(() => TaskListRelationFilter, {
    nullable: true,
  })
  tasks?: TaskListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  timeline?: JsonFilter;
}

export { ProjectWhereInput as ProjectWhereInput };