function GoogleLogin() {
  window.handleCredentialResponse = function handleCredentialResponse(
    response
  ) {
    console.log("Encoded JWT ID token: " + response.credential);
  };

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
