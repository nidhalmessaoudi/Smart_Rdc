const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const googleOAuthClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleTokenAndGetUserInfos(token) {
  try {
    const ticket = await googleOAuthClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const userInfos = {
      googleId: payload["aud"],
      name: payload["name"],
      firstName: payload["given_name"],
      familyName: payload["family_name"],
      email: payload["email"],
      verified: payload["email_verified"],
      photo: payload["picture"],
    };

    return userInfos;
  } catch (err) {
    throw new Error("Invalid Google Id Token!");
  }
}

exports.postAuthenticateWithGoogle = async function (req, res) {
  try {
    console.log(req.body);
    const { credential } = req.body;
    console.log(credential);

    const userInfos = await verifyGoogleTokenAndGetUserInfos(credential);

    let user = await User.findOne({ email: userInfos.email });

    if (!user) {
      user = await User.create(userInfos);
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.error(err);

    res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};
