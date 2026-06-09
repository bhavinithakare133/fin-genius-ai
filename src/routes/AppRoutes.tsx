import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Expenses from "../pages/Expenses/Expenses";
import Goals from "../pages/Goals/Goals";
import Budget from "../pages/Budget/Budget";
import Reports from "../pages/Reports/Reports";
import AIAdvisor from "../pages/AIAdvisor/AIAdvisor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/advisor" element={<AIAdvisor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;