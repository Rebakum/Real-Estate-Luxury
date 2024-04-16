
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";



const SocialLogin = () => {
    const { googleLogin, githubLogin, twitterLogin } = useContext(AuthContext);


    //navigation sistem
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'

    // const handleSocialLogin = (socialProvider) => {
    //     if (socialProvider == googleLogin) {
    //         googleLogin()
    //             .then(result => {
    //                 clg
            

    //             })
    //     }

    // }
    return (
        <>
            <div className="divider"> Continue with</div>

            <div className="flex gap-3">
                <button
                    onClick={googleLogin}
                    className="btn btn-secondary">
                    Google
                </button>
                <button
                    onClick={githubLogin}
                    className="btn btn-secondary">
                    Github
                </button>
                <button
                    onClick={twitterLogin}
                    className="btn btn-secondary">
                    Twiter
                </button>
            </div>




        </>
    );
};

export default SocialLogin;
