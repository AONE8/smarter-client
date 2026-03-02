export function isFormDataEmpty(formData: FormData): boolean {
  for (const _ of formData.entries()) {
    return false;
  }
  return true;
}
