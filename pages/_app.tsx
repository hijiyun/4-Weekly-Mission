import type { AppProps } from 'next/app'
import '@/components/FolderHeader/FolderHeader.css'
import "@/components/LinkForm/LinkForm.css";
import "@/components/FloatingActionButton/FloatingActionButton.css";
import '@/components/ActionContainer/ActionContainer.css'
import "@/components/SearchBar/SearchBar.css";
import "@/components/FolderList/FolderList.css";
import "@/components/FolderContent/FolderContent.css";
import "@/components/LinkCard/LinkCard.css";
import "@/components/Footer/Footer.css";
import '@/components/Modal/Modal.css'
import "@/components/Nav/Nav.css";
import "@/components/Cardlist/Cardlist.css";
import "@/components/Input/Input.css";
import "@/components/KebabMenu/KebabMenu.css";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}