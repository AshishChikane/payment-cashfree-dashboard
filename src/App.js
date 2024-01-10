import { Navigate, Route, Routes } from "react-router-dom";
import Payment from "./Pages/Payment";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Payment />
          </>
        }
      />
    </Routes>
  );
}

export default App;
