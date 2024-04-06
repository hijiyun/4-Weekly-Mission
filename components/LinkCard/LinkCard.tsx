import React, { useState } from "react";
// import "@/components/LinkCard/LinkCard";
import KebabMenu from "../KebabMenu/KebabMenu";
import { Link } from "../../interfaces/model";
import Image from "next/image";
import noImage from '@/images/noCardImg.png'
import star from '@/images/star.svg'
import kebab from '@/images/kebab.svg'
import link from '@/images/link.svg';


interface LinkCardProps {
  link: Link;
  setModalState: React.Dispatch<React.SetStateAction<Boolean>>;
  calculateTimePassed: (date: string) => string;
  formatDate: (date: string) => string;
}

function LinkCard({
  link,
  setModalState,
  calculateTimePassed,
  formatDate,
}: LinkCardProps) {
  const [kebabVisible, setKebabVisible] = useState(false);

  const toggleKebab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setKebabVisible(!kebabVisible);
  };
  const handleLinkClick = () => {
    window.open(link.url, "_blank");
  };

  function fixImageUrl(imageUrl: string | undefined) {
    const domainToCheck = 't1.kakaocdn.net';
    const protocol = 'https://'; // 또는 'http://' 변경 가능
  
    if (imageUrl && imageUrl.includes(domainToCheck)) {
      // 이미지 URL에 지정된 도메인이 포함되어 있으면 프로토콜을 추가하여 반환
      return `${protocol}${imageUrl}`;
    }
  
    // 포함되어 있지 않으면 그대로 반환
    return imageUrl;
  }

  const imageUrl = fixImageUrl(link?.image_source)

  return (
    <div className="link-card" onClick={handleLinkClick}>
      <div className="card-image-container">
        <Image
          src={imageUrl} // link?.image_source || noImage -> 이 부분 계속 알 수 없는 에러 발생. 추후에 해결 
          width={100}
          height={100}
          alt={link.title}
          className="card-image"
        />
        <button className="favorite-icon">
          <Image src={star} alt="즐겨찾기" />
        </button>
      </div>
      <div className="card-text-container">
        <div className="card-content">
          <span className="time-passed">
            {calculateTimePassed(link.created_at)}
          </span>
          <p className="link-description">{link.description}</p>
          <span className="date-number">{formatDate(link.created_at)}</span>
        </div>
        <button className="kebab-menu-icon" onClick={toggleKebab}>
          <Image src={kebab} alt="메뉴" />
        </button>
        {kebabVisible && (
          <KebabMenu setModalState={setModalState} link={link} />
        )}
      </div>
    </div>
  );
}

export default LinkCard;