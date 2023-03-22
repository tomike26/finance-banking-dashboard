import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../scenes/global/Sidebar";
import { PublicRoute } from "./PublicRoutes";
const AppRoutes = () => {
    return (
        
            <Router>
                <Sidebar />
                <main className="content">
                    <Routes>
                        {PublicRoute.map((PublicRoute, index) => {
                            return (
                                <Route
                                    exact={PublicRoute.exact}
                                    key={index}
                                    path={PublicRoute.path}
                                    element={PublicRoute.component}
                                />
                            );
                        })}

                    </Routes>
                </main>

            </Router>
        

    );
};

export default AppRoutes;