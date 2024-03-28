import { useEffect } from "react";

const KakaoShareButton = () => {
    const realUrl =
        "https://65a51c5548eafc32d5a3a2c9--clinquant-licorice-99c7b0.netlify.app/";

    const loadKakaoSDK = (callback) => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.onload = () => callback();
        document.head.appendChild(script);
    };

    useEffect(() => {
        if (!window.Kakao) {
            loadKakaoSDK(() => {
                if (window.Kakao && !window.Kakao.isInitialized()) {
                    window.Kakao.init("65b040f9d212732f1cd80cc266c5e200");
                }
            });
        } else if (!window.Kakao.isInitialized()) {
            window.Kakao.init("65b040f9d212732f1cd80cc266c5e200");
        }
    }, []);
    const shareKakao = () => {
        if (window.Kakao) {
            window.Kakao.Share.sendDefault({
                objectType: "feed",
                content: {
                    title: "Linkbrary",
                    description: "링크를 추가해 보세요.",
                    imageUrl: "",
                    link: {
                        mobileWebUrl: realUrl,
                    },
                },
                buttons: [
                    {
                        title: "",
                        link: {
                            mobileWebUrl: realUrl,
                        },
                    },
                ],
            });
        }
    };

    return (
        <button className="grey-btn" onClick={shareKakao}>
            <img src="/images/Chat.png" />
        </button>
    );
};

export default KakaoShareButton;