import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbSignup } from "../FBConfig/FBMethods";
import ARInput from "../Components/ARInput";
import ARButton from "../Components/ARButton";



export default function Signup() {
    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    const navigate = useNavigate();

    let signUpUser = () => {
        fbSignup(model)
            .then((res: any) => {
                navigate("/login");
                console.log(res);
            }).catch((err: any) => {
                console.log(err);
            });
    };

    return (
        <>
            <div style={{ width: "100vw", height: "100vh", padding: "5%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div >
                    <div className="py-5">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="py-3 " style={{ width: "300px" }}>
                        <ARInput
                            value={model.userName}
                            onChange={(e: any) => fillModel("userName", e.target.value)}
                            label="User Name"
                        />
                    </div>
                    <div className="py-3" style={{ width: "300px" }}>
                        <ARInput
                            value={model.email}
                            onChange={(e: any) => fillModel("email", e.target.value)}
                            label="Email"
                        />
                    </div>
                    <div className="py-3" style={{ width: "300px" }}>
                        <ARInput
                            value={model.password}
                            onChange={(e: any) => fillModel("password", e.target.value)}
                            label="Password"
                        />
                    </div>
                    <div className="py-3" style={{ width: "300px" }}>
                        <select style={{ width: "300px", padding: "5%" }} value={model.roll} onChange={(e: any) => fillModel("roll", e.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="py-3">
                        if you signup already so please  <button onClick={() => navigate("/login")}>login</button>
                    </div>
                    <div className="py-3">
                        <ARButton onClick={signUpUser} label="Sign Up" />
                    </div>
                </div>
            </div>
        </>
    );
}