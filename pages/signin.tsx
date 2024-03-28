import LoginBox from "@/components/LoginBox/LoginBox";
import style from './signin.module.css'

function signin() {
    return (
        <div className={style.body}>
            <LoginBox />
        </div>
    );
}

export default signin;