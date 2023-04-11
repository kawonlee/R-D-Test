import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Link href="/user/login">로그인페이지로 이동</Link>
      <button onClick={() => router.push("/user/timeout")}>
        timeout 페이지로 이동
      </button>
    </div>
  );
}
