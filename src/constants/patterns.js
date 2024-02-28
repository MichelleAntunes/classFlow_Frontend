export const namePattern = /^.{3,}$/;

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const passwordPattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()[\]{}\-_+=]).{8,}$/;

// namePattern:
//Allows uppercase and lowercase letters, as well as spaces, and requires a minimum of 2 characters.
// emailPattern:
// Uses a simple regular expression to validate the email format.
// passwordPattern:
// Uses the same regular expression used in the backend to validate passwords, requiring at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.
