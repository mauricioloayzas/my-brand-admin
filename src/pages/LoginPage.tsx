import OtherAuthOptions from "../components/auth/OtherAuthOptions";
import AuthForm from "../components/forms/AuthForm";
import { useAppSelector } from "../redux/hooks";
import AuthTopLogo from "../components/auth/AuthTopLogo";

import { useAuth } from "react-oidc-context";

const LoginPage = () => {
  const auth = useAuth();

  const darkMode = useAppSelector((state) => state.theme.isDark);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    if(auth.user){
      if (auth.user.id_token != null) {
        localStorage.setItem("id_token", auth.user.id_token);
      }
      if (auth.user.access_token != null) {
        localStorage.setItem("id_token", auth.user.access_token);
      }
      if (auth.user.refresh_token != null) {
        localStorage.setItem("id_token", auth.user.refresh_token);
      }
      window.location.href = "/pos";
    }
  }

  return (
    <main
      className={`home-call-center ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      <div className="main-content login-panel">
        <div className="login-body">
          <div className="top d-flex justify-content-between align-items-center">
            <AuthTopLogo/>
          </div>
          <div className="bottom">
            <h3 className="panel-title">Login</h3>
            <AuthForm/>
            <div className="other-option m-3"></div>
            <button onClick={() => auth.signinRedirect()}
                    className="btn btn-primary w-100 login-btn">
              Sign AWS
            </button>
            <OtherAuthOptions/>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;
