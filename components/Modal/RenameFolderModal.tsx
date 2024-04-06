import React from "react";

export default function RenameFolderModal({ onClose }) {
  return (
    <>
      <h2 className="modal-title">폴더 이름 변경</h2>
      <input className="modal-input" autoFocus />
      <button className="modal-button">변경하기</button>
    </>
  );
}
