import * as yup from "yup";
import "yup-phone";

const phoneSchema = yup.string().trim().phone();

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters.")
    .required("Name is required."),
  email: yup
    .string()
    .trim()
    .email("Email must be a valid e-mail address.")
    .required("Email is required."),
  subject: yup.string().trim().min(2, "Subject must be at least 2 characters."),
  phone: yup
    .string()
    .trim()
    .test("phone", "Phone must be a valid phone number.", (value) => {
      if (value) return phoneSchema.isValidSync(value);
      return true;
    }),
  message: yup
    .string()
    .trim()
    .min(2, "Message must be at least 2 characters.")
    .required("Message is required."),
});

export default schema;
