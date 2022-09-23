import { Box, Text, Grid, Heading, Button, useToast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import CustomField from "./common/CustomField";
import {schema} from "../schemas/contactSchema";
import { sendMessage } from "../services/messageService";

const Contact = () => {
  const toast = useToast();

  return (
    <Box as="section" py="14" id="contact">
      <Box mb="12" textAlign="center">
        <Heading as="h2" fontSize="40px" lineHeight="1.3">
          Contact
        </Heading>
        <Text maxW="490px" mx="auto" pt="2">
          Do you have a project you want me to work on? Do you want me to be
          part of your team? Shoot at me, let’s build great things together.
        </Text>
      </Box>

      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        }}
        validationSchema={schema}
        onSubmit={async (formData, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          try {
            await sendMessage(formData);

            toast({
              title: "Message sent.",
              status: "success",
              variant: "success",
              duration: 9000,
              isClosable: true,
            });
          } catch (ex) {}

          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form style={{ maxWidth: "750px", margin: "0 auto" }}>
            <Grid
              gridColumnGap={{ sm: "4" }}
              templateColumns={{ sm: "repeat(2, 1fr)" }}
            >
              <CustomField
                name="name"
                type="text"
                errors={errors}
                touched={touched}
                label="Your Name (required)"
              />
              <CustomField
                name="email"
                type="email"
                errors={errors}
                touched={touched}
                label="Your E-mail (required)"
              />
            </Grid>

            <Grid
              gridColumnGap={{ sm: "4" }}
              templateColumns={{ sm: "repeat(2, 1fr)" }}
            >
              <CustomField
                name="subject"
                type="text"
                label="Subject"
                errors={errors}
                touched={touched}
              />
              <CustomField
                name="phone"
                type="tel"
                errors={errors}
                touched={touched}
                label="Your Phone Number"
              />
            </Grid>

            <CustomField
              name="message"
              errors={errors}
              touched={touched}
              isTextarea={true}
              label="Your Message (required)"
            />

            <Button
              w="100px"
              bg="primary"
              color="#fff"
              type="submit"
              fontWeight="semibold"
              border="1px solid"
              borderColor="primary"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Contact;
