import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AiAgentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
};
