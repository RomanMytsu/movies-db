/* eslint-disable react-refresh/only-export-components */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import About from "./features/About/About.tsx";
import store from "./store";
import Home from "./features/Home/Home.tsx";
import { LinearProgress } from "@mui/material";
import { Extra } from "./features/Extra/Extra.tsx";
import { StatefulAuthProvider } from "./auth/StatefulAuthProvider.tsx";
import { AuthCallback } from "./auth/AuthCallback.tsx";
import { Profile } from "./features/Profile/Profile.tsx";
import { AuthenticationGuard } from "./auth/AuthenticatedGuard.tsx";
import { Protected } from "./features/Protected/Protected.tsx";

const Movies = lazy(() => import("./features/Movies/Movies"));

function AppEntrypoint() {
  return (
    <StatefulAuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StatefulAuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppEntrypoint />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movies",
        element: (
          <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
            <Movies />
          </Suspense>
        ),
      },
      {
        path: "/extra",
        element: <Extra />,
      },
      {
        path: "/profile",
        element: <AuthenticationGuard component={Profile} />,
      },
      {
        path: "/protected",
        element: <AuthenticationGuard component={Protected} />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/callback",
        element: <AuthCallback />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
