import { InputType, Field } from "type-graphql";
import {UserRole} from "../types";
@InputType()
export class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;

  @Field(() => [String])
  roles: UserRole[]
}
