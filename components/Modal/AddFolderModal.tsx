import React from "react";

export default function AddFolderModal({ onClose }) {
    return (
        <>
            <h2 className="modal-title">폴더 추가</h2>
            <input className="modal-input" autoFocus />
            <button className="modal-button">추가하기</button>
        </>
    );
}