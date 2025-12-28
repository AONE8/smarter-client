import { type DeviceForm } from "../DeviceForm.type";

export type UserLoaderData = {
  username: string;
  email: string;
  deviceFormData?: DeviceForm;
} | null;
