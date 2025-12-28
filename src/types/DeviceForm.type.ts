type QuestionType = "checkbox" | "radio" | "select";

interface Question {
  name: string;
  question: { en: string; uk: string };
  answers: string[] | { en: string[]; uk: string[] };
  type: QuestionType;
}

export interface DeviceForm {
  title: { en: string; uk: string };
  deviceType: string;
  questions: Question[];
}
