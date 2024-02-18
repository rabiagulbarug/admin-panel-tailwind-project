import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import App from "../App";
import Login from "../pages/auth/login";
import PrivateRoutes from "./private-route";

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
                            <Route path='auth/*' element={<Login/>} />
                            <Route path='*' element={<Navigate to='/auth' />} />
                        </>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { AppRoutes };
