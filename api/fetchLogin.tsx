import { instance } from "./instance";

async function fetchlogin(email, password) {
    try {
        const response = await instance.post("sign-in", { email, password });

        if (response.status === 200) {
            return {
                success: true,
                accessToken: response.data.data.accessToken,
                refreshToken: response.data.data.refreshToken,
            };
        } else {
            return {
                success: false,
                message: response.data.message || "로그인 오류가 발생했습니다.",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "로그인 요청 중 네트워크 오류가 발생했습니다.",
        };
    }
}

export default fetchlogin;