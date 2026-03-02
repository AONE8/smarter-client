export function isFormDataEmpty(formData: FormData): boolean {
  for (const value of formData.values()) {
    if (value) return false;
  }
  return true;
}
