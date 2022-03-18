const { OAuth2Client } = require("google-auth-library");

const googleOAuthClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
  const ticket = await googleOAuthClient.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];

  return { payload, userid };
}

exports.postGoogleIdentity = async function (req, res) {
  try {
    console.log(req);
    const { credential } = req.query;

    console.log(credential);

    const googleData = await verifyGoogleToken(credential);

    res.status(200).json({
      status: "success",
      data: {
        userid: googleData.userid,
      },
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
