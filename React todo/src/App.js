import SignIn from "./layout/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./components/add-comp/addcomp";
import { ProtectedRoute } from "./components/Protected-route/ProtectedRoutes";
import NotFound from "./layout/NotFound";
import SignUp from "./layout/SignUp/signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={< SignIn/>} />

            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <Add />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
