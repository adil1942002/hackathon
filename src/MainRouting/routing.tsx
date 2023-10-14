import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../screens/Home"
import DashboardPage from "../screens/dashboard"
import Login from "../screens/login"
import Signup from "../screens/signUp"
import Protected from "../screens/protceted"
export default function Routing(){
    return<>
<BrowserRouter>
<Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/" element={< Signup />}/>
                <Route path="/login" element={< Login />}/>
                <Route path="/protected/*" element={< Protected Screen={DashboardPage}/>}/>
                {/* <Route path="/dashboard/*" element={< DashboardPage />}/> */}
                {/* <Route path="/edit/:id" element={<AddForm/>}/> */}
</Routes>
</BrowserRouter>
    </> 
}
