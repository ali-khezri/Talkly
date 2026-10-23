export async function signup(req, res) {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
}

export async function login(req, res) {
  console.log("loginUser");
}

export async function logout(req, res) {
  console.log("logoutUser ");
}
