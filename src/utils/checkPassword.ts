export const checkPassword = (password: string) => {
  let strength = 0;

  if (password.length < 8) return "Very Low";
  if (password.match(/[a-z]+/g)) strength++;
  if (password.match(/[A-Z]+/g)) strength++;
  if (password.match(/[0-9]+/g)) strength++;
  if (password.match(/[-!$%^&*()_+|~=`{}\\[\]:";'<>?,.\\/]/g)) strength++;

  switch (strength) {
    case 0:
      return "Very Low";
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    case 4:
      return "Very High";
    default:
      return "Very Low";
  }
};
