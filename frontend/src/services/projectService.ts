import http from "./httpService";

const endPoint = "/api/projects";

export function getProjects() {
  return http.get<projectTypes[]>(endPoint);
}

export function getProject(id: string) {
  return http.get<projectTypes>(`${endPoint}/${id}`);
}
