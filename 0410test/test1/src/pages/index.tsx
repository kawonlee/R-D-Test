import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Link href="/user/login">로그인페이지로 이동</Link>
      <Link href="/user/logout">로그아웃페이지로 이동</Link>
    </div>
  );
}
