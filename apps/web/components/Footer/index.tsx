"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = ["dark", "light"];
const targetThemes = ["light", "dark"];

export default function Footer() {
  const themeIcon = [<SunIcon />, <MoonIcon />];
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="fixed bottom-8 left-8 text-gray-500 dark:text-gray-300">
        <button
          aria-label="change theme"
          onClick={() => {
            if (theme) {
              setTheme(targetThemes[themes.indexOf(theme)]!);
            }
          }}
          className="effect-pressing w-full !p-3 shadow-sm border border-gray-300 dark:border-gray-700 hover:shadow-inner dark:hover:bg-gray-700 rounded-md cursor-pointer focus:outline-none justify-center items-center text-xl tracking-wider bg-white dark:bg-gray-800 flex"
        >
          <span>{theme ? themeIcon[themes.indexOf(theme)] : themeIcon[0]}</span>
        </button>
      </div>
    </>
  );
}
