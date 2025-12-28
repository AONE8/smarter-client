import * as z from "zod/mini";

export const signupSchema = z
  .object({
    username: z.string({ error: "Invalid username" }).check(
      z.trim(),
      z.minLength(3, { error: "Username must be at least 3 characters long" }),
      z.regex(/^[a-zA-Z0-9_]+$/, {
        error: "Username can only contain letters, numbers, and underscores",
      })
    ),
    email: z.email({ error: "Invalid email" }).check(z.trim(), z.normalize()),
    password: z
      .string({ error: "Invalid password" })
      .check(
        z.minLength(6, { error: "Password must be at least 6 characters long" })
      ),
    confirmPassword: z.string({ error: "Invalid confirm password" }),
  })
  .check(
    z.refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      error: "Passwords do not match",
    })
  );

export const loginSchema = z.pick(signupSchema, {
  email: true,
  password: true,
});

export type SignupData = z.infer<typeof signupSchema>;
export type LoginData = z.infer<typeof loginSchema>;
