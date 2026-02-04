"use client";

import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";

import { useEffect, useState } from "react";



export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);



  useEffect(() => setMounted(true), []);

  if (!mounted) return null;



  return (

    <button

      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

      className="group flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer"

    >

      <div className="transition-transform duration-500 group-hover:rotate-[45deg]">

        {theme === "dark" ? (

          <Sun size={22} className="text-white" />

        ) : (

          <Moon size={22} className="text-black" />

        )}

      </div>

    </button>

  );

}