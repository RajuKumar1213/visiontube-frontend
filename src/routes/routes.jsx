import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  AuthLayout,
  HomePageInLogout,
  NotUserThenHistory,
} from "../components";

import {
  DashboardPage,
  HomePage,
  LoginPage,
  NotUserThenYouPage,
  SignupPage,
  UploadVideoPage,
  VideoWatchPage,
} from "../pages";
import NotUserSubscriptionPage from "../pages/not-login-pages/NotUserSubscriptionPage";
import NotUserThenLikedVidPage from "../pages/not-login-pages/NotUserThenLikedVidPage";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        // element: <HomePageInLogout />,
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/feed/you",
        element: (
          <AuthLayout authentication={false}>
            <NotUserThenYouPage />
          </AuthLayout>
        ),
      },
      {
        path: "/feed/history",
        element: (
          <AuthLayout authentication={false}>
            <NotUserThenHistory />
          </AuthLayout>
        ),
      },
      {
        path: "/feed/subscriptions",
        element: (
          <AuthLayout authentication={false}>
            <NotUserSubscriptionPage />
          </AuthLayout>
        ),
      },
      {
        path: "/feed/liked-videos",
        element: (
          <AuthLayout authentication={false}>
            <NotUserThenLikedVidPage />
          </AuthLayout>
        ),
      },
      {
        path: "/watch/:videoId",
        element: <VideoWatchPage />,
      },
      {
        path: "/upload",
        element: (
          <AuthLayout authentication={true}>
            <UploadVideoPage />
          </AuthLayout>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication={true}>
            <DashboardPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);
