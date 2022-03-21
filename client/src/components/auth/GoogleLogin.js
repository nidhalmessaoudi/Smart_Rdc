import useHttp from "../../hooks/useHttp";
import { useDispatch } from "react-redux";

import { authActions } from "../../store/authSlice";

function GoogleLogin() {
  const [send, status, data] = useHttp();
  const dispatch = useDispatch();

  window.handleCredentialResponse = async function handleCredentialResponse(
    res
  ) {
    console.log("Encoded JWT ID token: " + res.credential);

    await send({
      path: "/auth/google",
      method: "POST",
      body: {
        credential: res.credential,
      },
    });
  };

  if (data) {
    dispatch(authActions.login(data.user));
  }

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="532116285295-k1slh5ser97j7t9divk5k21h9nj6eqho.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleCredentialResponse"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
}

export default GoogleLogin;
