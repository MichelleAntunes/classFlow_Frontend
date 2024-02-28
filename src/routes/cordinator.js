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
