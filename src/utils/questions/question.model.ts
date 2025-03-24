export type QuestionType = "checkbox" | "radio" | "select";

export interface Question {
  name: string;
  question: string;
  answers: string[];
  type: QuestionType;
}

export class CheckboxQuestion implements Question {
  readonly type: QuestionType = "checkbox";

  constructor(
    public name: string,
    public question: string,
    public answers: string[]
  ) {}
}

export class RadioQuestion implements Question {
  readonly type: QuestionType = "radio";

  constructor(
    public name: string,
    public question: string,
    public answers: string[]
  ) {}
}

export class SelectQuestion implements Question {
  readonly type: QuestionType = "select";

  constructor(
    public name: string,
    public question: string,
    public answers: string[]
  ) {}
}
