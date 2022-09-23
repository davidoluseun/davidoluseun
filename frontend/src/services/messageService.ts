import http from "./httpService";

const endPoint = "/api/messages";

export function sendMessage(message: MessageTypes) {
  return http.post(endPoint, message);
}
