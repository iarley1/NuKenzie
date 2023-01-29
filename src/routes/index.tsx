import { Routes, Route } from "react-router-dom"
import { DashBoardPage } from "../pages/DashBoardPage"
import { LandingPage } from "../pages/LandingPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="dashboard" element={<DashBoardPage />} />
        </Routes>
    )
}