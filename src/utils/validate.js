const checkValidateData = (name, email, password) => {
  const nameCheck = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name.length < 3) return ["Enter valid name."];
  if (!emailCheck) return ["Enter Valid Email."];
  if (password.length < 8) return ["Enter Valid Password:", "Atleast 8 letters."];

  return null;
};
export default checkValidateData;
