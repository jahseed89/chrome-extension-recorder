import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import { HOME_ROUTE, RECORDER_ROUTE, SIGNUP_ROUTE } from "../content-management/Landing";

const LandingLayout = lazy(() => import('../layout/LandingLayout'))
const Home = lazy(() => import("../pages/home/Home"))
const Recorder = lazy(() => import("../pages/recorder/Recorder"))
const SignUp = lazy(() => import("../auth/SignUp"))





const LandingRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<LandingLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route
              path={HOME_ROUTE}
              element={<Home />}
            />
            <Route
              path={SIGNUP_ROUTE}
              element={<SignUp />}
            />
            <Route
              path={RECORDER_ROUTE}
              element={<Recorder />}
            />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
};

export default LandingRoute;
