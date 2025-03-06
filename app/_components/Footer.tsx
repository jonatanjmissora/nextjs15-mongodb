import Link from "next/link";
import LinkedinSVG from "../_assets/LinkedinSVG";
import GithubSVG from "../_assets/GithubSVG";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center p-6 sm:p-4 2xl:p-8 px-6 sm:px-10 2xl:px-20 text-sm sm:text-xs 2xl:text-sm">

      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>

      <nav className="flex gap-4">

        <Link href={"/"}>
          <LinkedinSVG className="fill-current hover size-6 sm:size-4 2xl:size-6" />
        </Link>

        <Link href={"/"}>
          <GithubSVG className="fill-current hover size-6 sm:size-4 2xl:size-6" />
        </Link>

      </nav>

    </footer>
  )
}
