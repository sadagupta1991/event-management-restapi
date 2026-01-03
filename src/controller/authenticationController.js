import authenticationService from "../service/authenticationService.js";

export async function signup(req, res) {
  try {
    console.log("Signup request received");
    const user = await authenticationService.signup(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
