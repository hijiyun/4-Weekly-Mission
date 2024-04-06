import React from "react";
import Modal from "../Modal/Modal";
import useModal from "../../hooks/useModal";
import Image from "next/image";
import share from '@/images/share.svg'
import pen from '@/images/pen.svg'
import deleteBtn from '@/images/delete.svg'

function ActionContainer({ folderName }) {
  const [modalState, setModalState, onHandleCancel] = useModal();

  return (
    <div className="action-container-box">
      <p>{folderName}</p>
      {folderName !== "전체" && (
        <div className="action-container-icon">
          <a
            onClick={(e) => {
              setModalState({
                visibility: true,
                target: e.target.innerText,
              });
            }}
          >
            <Image src={share} alt="공유" />
            <div className="action-shared">공유</div>
          </a>
          <a
            onClick={(e) => {
              setModalState({
                visibility: true,
                target: e.target.innerText,
              });
            }}
          >
            <Image src={pen} alt="이름 변경" />
            <div className="action-name">이름 변경</div>
          </a>
          <a
            onClick={(e) => {
              setModalState({
                visibility: true,
                target: e.target.innerText,
              });
            }}
          >
            <Image src={deleteBtn} alt="삭제"/>
            <div className="action-delete">삭제</div>
          </a>
        </div>
      )}

      <Modal
        values={modalState}
        onClose={onHandleCancel}
        folderName={folderName}
      />
    </div>
  );
}

export default ActionContainer;