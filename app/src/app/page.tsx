import Link from "next/link";
import Header from "@/components/Header";
export default function page() {
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl m-8">Hello world</h1>
      <Link href="/meals">click me!!</Link>
    </>
  );
}
