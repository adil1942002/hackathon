import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbGet, fbLogin } from "../FBConfig/FBMethods";
import ARInput from "../Components/ARInput";
import ARButton from "../Components/ARButton";




export default function Login() {
    const [model, setModel] = useState<any>({});
    const navigate = useNavigate()

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    let LoginUser = () => {
        // console.log(model);
        fbLogin(model)
            .then((res: any) => {
                console.log(res);
                navigate("/protected")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return <>
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", width: "100vw" }}>
            <div >
                <div className="py-5">
                    <h1>Login</h1>
                </div>

                <div className="py-4">
                    <ARInput

                        value={model.email}
                        onChange={(e: any) => fillModel("email", e.target.value)}
                        label="Email"
                    />
                </div>
                <div className="py-4">
                    <ARInput
                        value={model.password}
                        onChange={(e: any) => fillModel("password", e.target.value)}
                        label="Password"
                    />
                </div>
                <div className="py-4">
                    <ARButton onClick={LoginUser} label="Sign In" />
                </div>
                <div className="">
                    <p>Not Signed In Yet? <button onClick={() => navigate('/')} className="btn text-white mb-1">Sign Up</button> </p>
                </div>
            </div>
        </div>
    </>

}