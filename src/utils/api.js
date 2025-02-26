export const API_URL = process.env.REACT_APP_API_URL;

export const getTeachersListEndpoint = `${API_URL}/teachers`;
export const postTeacherEndpoint = `${API_URL}/teachers`;
export const getTeacherProfileInfoEndpoint = `${API_URL}/teacher/:id`;
export const getStudentProfileInfoEndpoint = `${API_URL}/ٍStudent/:id`;
export const postUsersSignupEndpoint = `${API_URL}/users`;
export const postUsersLoginEndpoint = `${API_URL}/users/login`;



