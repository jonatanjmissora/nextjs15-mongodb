"use client"

import UserSVG from "@/app/_assets/UserSVG";
import Image from "next/image";
import { useRef } from "react";
import Theme_Toggler from "./Theme_Toggler";

export default function User_Menu({ user }: { user: { username: string, image: string } }) {

  const detailRef = useRef<HTMLDetailsElement>(null)

  return (
    <details className="relative">
      <summary className="list-none hover"><UserSVG className="size-6" /></summary>

      <div className="card flex flex-col justify-end items-end gap-12 absolute top-12 -right-6 w-[15rem]">
        <div className="flex flex-col items-center justify-center">
          <img src={"avatar.jpg"} className="size-20 rounded-full" alt={"avatar image"} />
          <p>Hola, {user.username}</p>
        </div>
        <p className="hover">Cerrar sesión</p>
        <Theme_Toggler />
      </div>

    </details >
  )
}
