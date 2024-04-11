'use client';
import Image from "next/image";
import styles from "./main.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
    <Link href="/student">
      <button>STUDENT</button>
    </Link>
    <Link href="/dashboard">
      <button>ADMIN</button>
    </Link>
    </main>
  );
}
