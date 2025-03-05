import Link from "next/link";
import Nav from "./Nav";

export default async function Header() {

  const user = {username: "Jonatan", image:"/public/avatar.jpn"}

  return (
    <header className="flex justify-between items-center flex-wrap p-6 sm:p-4 2xl:p-8 px-6 sm:px-10 2xl:px-20 text-xl">

      <Link href={"/"} className="link">Logo</Link>

      <Nav user={user}/>

    </header>
  )
}