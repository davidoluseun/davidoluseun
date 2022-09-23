import {
  FormControl,
  FormLabel,
  Input,
  useColorMode,
  VisuallyHidden,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Field, FieldAttributes } from "formik";

type CustomFieldProps = {
  name: string;
  label: string;
  type?: string;
  isTextarea?: boolean;
  errors: any;
  touched: any;
};

const CustomField = ({
  name,
  label,
  type,
  isTextarea,
  errors,
  touched,
}: CustomFieldProps) => {
  const { colorMode } = useColorMode();
  return (
    <Field name={name}>
      {({ field }: FieldAttributes<any>) => (
        <FormControl mb="8" isInvalid={!!errors[name] && touched[name]}>
          <VisuallyHidden>
            <FormLabel>{label}</FormLabel>
          </VisuallyHidden>
          {!isTextarea ? (
            <Input
              {...field}
              type={type}
              placeholder={label}
              focusBorderColor="primary"
              errorBorderColor="error"
              _hover={{ borderColor: "none" }}
              bg={colorMode === "dark" ? "dark" : ""}
              borderColor={colorMode === "light" ? "borderDark" : "borderLight"}
            />
          ) : (
            <Textarea
              {...field}
              name="message"
              focusBorderColor="primary"
              errorBorderColor="error"
              _hover={{ borderColor: "none" }}
              placeholder="Your Message (required)"
              bg={colorMode === "dark" ? "dark" : ""}
              borderColor={colorMode === "light" ? "borderDark" : "borderLight"}
            />
          )}

          <FormErrorMessage fontSize="16px" color="error">
            {errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default CustomField;
