import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Provider } from "react-redux";
import Store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={Store}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </>
);
