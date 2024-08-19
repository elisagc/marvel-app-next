import { FavoritesCounter } from "@/components";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <Link href={"/"}>
        <Image src="/logo.svg" alt="logo" width={122} height={44} priority />
      </Link>

      <FavoritesCounter />
    </div>
  );
};
