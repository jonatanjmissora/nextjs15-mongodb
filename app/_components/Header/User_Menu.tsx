"use client"

import UserSVG from "@/app/_assets/UserSVG";
import Image from "next/image";
import { useRef } from "react";
import Theme_Toggler from "./Theme_Toggler";

export default function User_Menu({user}:{user: {username: string, image: string}}) {

    const detailRef = useRef<HTMLDetailsElement>(null)

  return (
    <details className="border border-yellow-500 relative">
        <summary className="list-none border"><UserSVG className="size-6" /></summary>

        <div className="flex flex-col justify-end items-end gap-6 border absolute top-[2rem] right-0 w-[10rem]">
            <p>Hola, {user.username}</p>
            <p>Cerrar sesión</p>
            <div className="flex items-center justify-end gap-4">Tema <Theme_Toggler /></div>
        </div>
        
    </details>
  )
}
