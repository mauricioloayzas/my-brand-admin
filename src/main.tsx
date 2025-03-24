import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Providers } from "./redux/provider.tsx";
import "react-datepicker/dist/react-datepicker.css";
import "overlayscrollbars/overlayscrollbars.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/tabler-icons/tabler-icons.min.css";
import "./styles/fontawesome/all.min.css";
import "./styles/fontawesome/sharp-solid.min.css";
import "./styles/fontawesome/sharp-regular.min.css";
import "./styles/scss/style.scss";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: import.meta.env.VITE_API_COGNITO_AUTHORITY,
  client_id: import.meta.env.VITE_API_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_API_COGNITO_REDIRECT_URL,
  response_type: "code",
  scope: "phone openid email",
};console.log(import.meta.env);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <Providers>
        <App />
        <ToastContainer />
      </Providers>
    </AuthProvider>
  </React.StrictMode>
);
