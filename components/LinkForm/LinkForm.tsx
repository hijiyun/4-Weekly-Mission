import Modal from "../Modal/Modal";
import React from "react";
import useModal from "../../hooks/useModal";
import Image from "next/image";
import link from '@/images/link.svg'

function LinkForm() {
  const [modalState, setModalState, onHandleCancel] = useModal();

  return (
    <div className="link-form-box">
      <form className="link-form">
        <Image src={link} alt="link" />
        <input type="text" placeholder="링크를 추가해 보세요." />
        <button
          className="link-form-add"
          onClick={(e) => {
            e.preventDefault();
            setModalState({
              visibility: true,
              target: e.target.innerText,
            });
          }}
        >
          추가하기
        </button>
      </form>
      <Modal values={modalState} onClose={onHandleCancel} />
    </div>
  );
}

export default LinkForm;