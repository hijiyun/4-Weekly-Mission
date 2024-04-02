import { useEffect } from "react";
import Image from "next/image";
import kakao from '@/images/chat.svg'

const KakaoShareButton = () => {
    const realUrl =
        "localhost:3000";

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
        <button className="grey-btn chat-icon" onClick={shareKakao}>
            <Image src={kakao} alt="카카오톡 공유하기" />
        </button>
    );
};

export default KakaoShareButton;