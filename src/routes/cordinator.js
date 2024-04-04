export const goToHome = (navigate) => {
  navigate("/");
};

export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToSignup = (navigate) => {
  navigate("/signup");
};

export const goToAboutUs = (navigate) => {
  navigate("/aboutUs");
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};

export const goToInactiveStudent = (navigate) => {
  navigate("/inactiveStudent");
};

export const goNewStudent = (navigate) => {
  navigate("/newStudent");
};

export const goToStudent = (navigate, id) => {
  navigate(`/student/${id}`);
};
export const goToContactUs = (navigate, id) => {
  navigate(`/contactUs/${id}`);
};

export const goToBurguerPageModal = (navigate) => {
  navigate(`/burguer`);
};
export const goToTeacherProfil = (navigate) => {
  navigate(`/teacherProfil`);
};

export const goToNewStudentPage = (navigate) => {
  navigate(`/newStudent`);
};

export const goToTeacherCalendar = (navigate) => {
  navigate(`/calendar`);
};
export const goToAddNewCalendar = (navigate) => {
  navigate(`/newClass`);
};
