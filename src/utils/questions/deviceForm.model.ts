import { QUESTIONS_FOR_LAPTOP } from "./laptop";
import { QUESTIONS_FOR_MONOBLOCK } from "./monoblock";
import { Question } from "./question.model";
import { QUESTIONS_FOR_SMARTPHONE } from "./smartphone";
import { QUESTIONS_FOR_SMARTWATCH } from "./smartwatch";

export interface DeviceForm {
  englishTitle: string;
  ukranianTitle: string;
  deviceType: string;
  minPrice: number;
  maxPrice: number;
  questions: Question[];
}

const SmartphoneForm: DeviceForm = {
  englishTitle: "Smartphone",
  ukranianTitle: "Смартфон",
  deviceType: "smartphone",
  minPrice: 1450,
  maxPrice: 200_000,
  questions: QUESTIONS_FOR_SMARTPHONE,
};

const SmartwatchForm: DeviceForm = {
  englishTitle: "Smartwatch",
  ukranianTitle: "Смартгодинник",
  deviceType: "smartwatch",
  minPrice: 1450,
  maxPrice: 200_000,
  questions: QUESTIONS_FOR_SMARTWATCH,
};

const MonoblockForm: DeviceForm = {
  englishTitle: "Monoblock",
  ukranianTitle: "Моноблок",
  deviceType: "monoblock",
  minPrice: 1450,
  maxPrice: 200_000,
  questions: QUESTIONS_FOR_MONOBLOCK,
};

const LaptopForm: DeviceForm = {
  englishTitle: "Laptop",
  ukranianTitle: "Ноутбук",
  deviceType: "laptop",
  minPrice: 1450,
  maxPrice: 200_000,
  questions: QUESTIONS_FOR_LAPTOP,
};

export const DEVICE_FORMS: DeviceForm[] = [
  SmartphoneForm,
  SmartwatchForm,
  MonoblockForm,
  LaptopForm,
];
