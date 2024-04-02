import React from "react";
import FolderProfile from "../FolderProfile";
import Image from "next/image";
import Link from "next/link";
import logo from '@/images/logo.svg'


function FolderHeader() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link href="/">
          <Image src={logo} alt="로고" />
        </Link>
      </div>
      <div className="header-content">
        <FolderProfile />
      </div>
    </header>
  );
}

export default FolderHeader;