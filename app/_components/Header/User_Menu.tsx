"use client"

import UserSVG from "@/app/_assets/UserSVG";
import Image from "next/image";
import { useRef } from "react";
import Theme_Toggler from "./Theme_Toggler";
import UploadSVG from "@/app/_assets/UploadSVG";

export default function User_Menu({ user }: { user: { username: string, image: string } }) {

  const detailRef = useRef<HTMLDetailsElement>(null)

  return (
    <details className="relative">
      <summary className="list-none hover"><UserSVG className="size-6" /></summary>

      <div className="card flex flex-col justify-end items-end gap-12 absolute top-12 -right-6 w-[15rem]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <img src={"avatar.jpg"} className="size-20 rounded-full" alt={"avatar image"} />
            <button className="absolute -right-4 bottom-0 bg-slate-800 rounded-full p-1">
              <UploadSVG className="size-5" />
            </button>
          </div>
          <p>Hola, {user.username}</p>
        </div>
        <p className="hover">Cerrar sesión</p>
        <Theme_Toggler />
      </div>

    </details >
  )
}
