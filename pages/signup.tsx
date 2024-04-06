import style from "./signup.module.css";
import SignupBox from "@/components/Auth/SignupBox/SignupBox";

function signup() {
    return (
        <div className={style.body}>
            <SignupBox />
        </div>
    );
}

export default signup;