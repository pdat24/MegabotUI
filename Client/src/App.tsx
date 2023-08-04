import DefaultLayout from "./components/Layouts/DefaultLayout";
import routers from "./routes";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <DefaultLayout>
            <Routes>
                <Route path="/chat" element={<Navigate to={"/chat/home"} />} />
                {routers.map((R) => (
                    <Route key={R.path} path={R.path} element={R.page} />
                ))}
            </Routes>
        </DefaultLayout>
    );
}

export default App;
