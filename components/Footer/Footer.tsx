import Link from "next/link";
import React from "react";
import Image from "next/image";
import facebook from '@/images/facebook.svg'
import twitter from '@/images/twitter.svg'
import youtube from '@/images/youtube.svg'
import insta from '@/images/instagram.svg'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">@codeit - 2023</p>
      <div className="footer-link">
        <Link href="/privacy">
          <p className="footer-privacy">Privacy Policy</p>
        </Link>
        <Link href="/FAQ">
          <p className="footer-faq">FAQ</p>
        </Link>
      </div>
      <div className="footer-icon">
        <Link href="https://facebook.com/" target="_blank">
          <Image src={facebook} alt="페이스북"/>
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <Image src={twitter} alt="트위터"/>
        </Link>
        <Link href="https://youtube.com/" target="_blank">
          <Image src={youtube} alt="유튜브" />
        </Link>
        <Link href="https://instagram.com/" target="_blank">
          <Image src={insta} alt="인스타그램"/>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;