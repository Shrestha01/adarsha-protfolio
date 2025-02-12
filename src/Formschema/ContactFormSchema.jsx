import { string, object } from "yup";

export const ContactFormSchema = object({
  name: string().required().min(5).max(20),
  email: string().email().required(),
  textbox: string().required().min(10).max(50),
});
