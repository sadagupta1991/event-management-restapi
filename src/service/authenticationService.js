import authenticationDAO from "../dao/authenticationDAO.js";

const signup = async ({ email, password }) => {
  console.log("Authentication service signup called");
  const user = await authenticationDAO.create({ email, password });
  return user;
};

export default {
  signup
};
