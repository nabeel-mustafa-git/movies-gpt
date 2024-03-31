const checkValidateData = (name, email, password) => {
  const nameCheck = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!nameCheck) return ["Enter valid name:", "First Character should be letters", "Must be greater than 2 letters"];
  if (!emailCheck) return ["Enter Valid Email"];
  if (!passwordCheck)
    return [
      "Enter Valid Password:",
      "Must be greater than 8 letters",
      "At least one capital letter",
      "At least one small letter",
      "At least one number",
    ];

  return null;
};
export default checkValidateData;
