import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import {HomePage} from "@/routes/home";
import AuthenticationLayout from "@/layouts/auth-layout";
import SignInPage from "@/routes/signin";
import SignUPPage from "@/routes/signup";
import ProtectedRoutes from "@/layouts/protected-routes";
import MainLayout from "@/layouts/main-layout";
import Generate from "./components/generate";
import {Dashboard} from "@/components/dashboard";
import CreateEditPage from "@/routes/create-edit-page";
import { MockInterviewPage } from "@/routes/mock-interview-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { Feedback } from "./routes/feedback";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes*/}
        <Route element={<PublicLayout />}>
         <Route index element={<HomePage/>}/>
        </Route>
        {/*authentication layout*/}
        <Route element={<AuthenticationLayout />}>
         <Route path="/signin/*" element={<SignInPage/>}/>
         <Route path="/signup/*" element={<SignUPPage/>}/>
        </Route>
        {/*protected routes*/}
        <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}>
        {/* Add your protected routes here */}
        <Route element={<Generate/>} path="/generate">
          <Route index element={<Dashboard/>}/>
          <Route path=":interviewId" element={<CreateEditPage/>}/>
          <Route path="interview/:interviewId" element={<MockLoadPage />} />
          <Route
            path="interview/:interviewId/start"
            element={<MockInterviewPage />}
            />
          <Route path="feedback/:interviewId" element={<Feedback />} />
        </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;