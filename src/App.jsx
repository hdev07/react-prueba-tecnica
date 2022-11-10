import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />}>
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Route>
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
    
  );
}

export default App;
