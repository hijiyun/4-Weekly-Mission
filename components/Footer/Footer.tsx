import React from "react";
import "@/components/Footer/Footer";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">@codeit - 2023</p>
      <div className="footer-link">
        <a href="/privacy">
          <p className="footer-privacy">Privacy Policy</p>
        </a>
        <a href="/FAQ">
          <p className="footer-faq">FAQ</p>
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://facebook.com/" target="_blank">
          <img src="/images/facebook.png" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src="/images/twitter.png" />
        </a>
        <a href="https://youtube.com/" target="_blank">
          <img src="/images/youtube.png" />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <img src="/images/instagram.png" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;