import * as z from "zod/mini";

import { signupSchema } from "./authSchema";

export const updateUserSchema = z.pick(signupSchema, {
  email: true,
  username: true,
});

export const changePasswordSchema = z
  .pick(signupSchema, {
    password: true,
    confirmPassword: true,
  })
  .check(
    z.refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      error: "Passwords do not match",
    })
  );

export const deleteUserSchema = z.pick(signupSchema, {
  password: true,
});

export type UpdateUserData = z.infer<typeof updateUserSchema>;
export type ChangePasswordData = z.infer<typeof changePasswordSchema>;
export type DeleteUserData = z.infer<typeof deleteUserSchema>;
