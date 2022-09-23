import axios from "axios";
import { createStandaloneToast } from "@chakra-ui/toast";
import theme from "../theme/theme";
import logger from "./logService";

const { toast } = createStandaloneToast(theme);

axios.interceptors.response.use(undefined, (ex) => {
  const expectedError =
    ex.response && ex.response.status >= 400 && ex.response.status < 500;

  if (!expectedError) {
    toast({
      title: "An unexpected error occurred.",
      status: "error",
      variant: "error",
      duration: 9000,
      isClosable: true,
    });

    logger.log(ex);
  }

  return Promise.reject(ex);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
