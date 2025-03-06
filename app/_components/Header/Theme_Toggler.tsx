"use client"

import MoonSVG from '@/app/_assets/MoonSVG'
import SunSVG from '@/app/_assets/SunSVG'
import { useTheme } from 'next-themes'

const Theme_Toggler = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={handleClick}>
      {
        theme === "light"

          ? <div
            className='flex items-center justify-center gap-4 group'>
            <span className='group-hover:text-[var(--hover-primary)] duration-300'>Tema</span>
            <SunSVG className="size-6 group-hover:rotate-180 group-hover:text-[var(--hover-primary)] duration-300" />
          </div>

          : <div
            className='flex items-center justify-center gap-4 group'>
            <span className='group-hover:text-[var(--hover-primary)] duration-300'>Tema</span>
            <MoonSVG className="size-6 group-hover:rotate-235 group-hover:text-[var(--hover-primary)] duration-300" />
          </div>
      }
    </button>
  )
}

export default Theme_Toggler