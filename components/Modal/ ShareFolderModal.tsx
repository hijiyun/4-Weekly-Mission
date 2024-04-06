import React from "react";
import KakaoShareButton from "../../api/KakaoShareButton";
import Image from "next/image";
import facebook from '@/images/facebook.svg'
import link from '@/images/link.svg'

export default function ShareFolderModal({ folderName, onShare, onCopyLink }) {
    return (
        <>
            <h2 className="modal-title">폴더 공유</h2>
            <h3>{folderName}</h3>
            <div className="modal-shared-icon">
                <KakaoShareButton />
                <button className="facebook-icon" onClick={() => onShare("facebook")}>
                    <Image src={facebook} width={23} alt="Facebook share" />
                </button>
                <button className="link-icon" onClick={onCopyLink}>
                    <Image src={link} alt="Copy link" />
                </button>
            </div>
        </>
    );
}