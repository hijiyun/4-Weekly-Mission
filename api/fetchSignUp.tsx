import { instance } from "./instance";

async function fetchsignup(email, password) {
    try {
        const response = await instance.post("sign-up", { email, password });

        if (response.status === 200) {
            return {
                success: true,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
            };
        } else {
            return {
                success: false,
                message: response.data.message || "회원가입 오류가 발생했습니다.",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "회원가입 요청 중 네트워크 오류가 발생했습니다.",
        };
    }
}

export default fetchsignup;