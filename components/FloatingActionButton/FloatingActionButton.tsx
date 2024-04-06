// import "@/components/FloatingActionButton/FloatingActionButton.css";
import add from "@/images/folderAdd.svg";
import Image from "next/image";

function FloatingActionButton() {
  return (
    <button className="floating-action-button">
      <p className="floating-action-button-text">폴더추가</p>
      <Image src={add} alt="폴더 추가" />
    </button>
  );
}

export default FloatingActionButton;
