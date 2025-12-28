export type SignupFormErrors = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type LoginFormErrors = Pick<SignupFormErrors, "email" | "password">;

export type UpdateUserFormErrors = Pick<SignupFormErrors, "username" | "email">;

export type ChangePasswordFormErrors = Pick<
  SignupFormErrors,
  "password" | "confirmPassword"
>;

export type DeleteUserFormErrors = Pick<SignupFormErrors, "password">;
