import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
import {MainLayout} from "../component/layout/main-layout";

const PrivateRoutes = () => {

    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='auth/*' element={<Navigate to='/dashboard' />} />
                <Route path='dashboard' element={<Dashboard/>} />

                <Route path='*' element={<Navigate to='/error/404' />} />
            </Route>
        </Routes>
    );
};

export default PrivateRoutes;
