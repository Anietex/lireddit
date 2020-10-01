import {MiddlewareFn} from "type-graphql";
import {MyContext, UserRole} from "../types";
import {User} from "../entities/User";

export const isAdmin: MiddlewareFn<MyContext> =  async ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("not authenticated");
  }

  const user = await User.findOne(context.req.session.userId);

  if(!user?.roles.includes(UserRole.ADMIN)){
    throw new Error("Only admin are allowed to view users")
  }

  return next();
};
