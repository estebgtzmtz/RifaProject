import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../Rifas/Pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
