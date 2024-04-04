// import React from "react";
// import { useProtectedPage } from "../../hooks/useProtectedPage";

// const StudentPage = () => {
//   useProtectedPage();
//   return <div>studentPage</div>;
// };

// export default StudentPage;

// StudentPage.js

import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const StudentPage = () => {
  useProtectedPage();
  return <div>studentPage</div>;
};

export default StudentPage;
