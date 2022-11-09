import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Auth />} />
      <Route path="/" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
}

export default App;
