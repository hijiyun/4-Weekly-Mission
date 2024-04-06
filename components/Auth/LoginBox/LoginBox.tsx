import React from "react";
import styles from "./LoginBox.module.css";
import LoginForm from "../LoginForm/LoginForm";
import Link from "next/link";
import Image from "next/image";
import logo2 from "@/images/logo2.svg";
import google from "@/images/google.svg";
import kakao from "@/images/kakao.svg";

function LoginBox() {
  return (
    <div>
      <div className={styles.headerbox}>
        <Link href="/">
          <Image src={logo2} alt="Logo" />
        </Link>
        <div className={styles.headertext}>
          회원이 아니신가요?{" "}
          <Link href="/signup">
            <span className={styles.signupLink}>회원 가입하기</span>
          </Link>
        </div>
      </div>
      <LoginForm />

      <div className={styles.sosialwapper}>
        <div className={styles.sosialbox}>
          <div className={styles.sosialtext}>소셜 로그인</div>
          <div className={styles.sosialiconbox}>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={google} alt="Google" />
            </a>
            <a
              href="https://www.kakaocorp.com/page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={kakao} alt="kakao" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
