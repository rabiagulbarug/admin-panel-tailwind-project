import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import App from "../App";
import Login from "../pages/auth/login";
import PrivateRoutes from "./private-route";
import ForgotPassword from "../pages/auth/forgot-password";
import Register from "../pages/auth/register";
import ResetPassword from "../pages/auth/reset-password";

const { PUBLIC_URL } = process.env;

const AppRoutes = () => {
    return (
        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>
                <Route element={<App/>}>
                        <>
                            <Route path='/*' element={<PrivateRoutes/>} />
                            <Route index element={<Navigate to='/dashboard' />} />
                        </>
                        <>
                            <Route path='auth/login' element={<Login/>} />
                            <Route path='auth/forgot-password' element={<ForgotPassword/>} />
                            <Route path='auth/register' element={<Register/>} />
                            <Route path='auth/reset-password' element={<ResetPassword/>} />
                            <Route path='*' element={<Navigate to='/auth' />} />
                        </>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { AppRoutes };
