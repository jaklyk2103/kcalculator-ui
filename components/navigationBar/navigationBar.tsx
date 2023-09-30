"use client";

import "./navigationBar.css";
import { useRouter } from "next/navigation";
import { browser } from "process";

export default function NavigationBar() {
  const { push } = useRouter();
  const handleLogOut = () => {
    // cookie should be removed by api?
    push("/login");
  };

  return (
    <div className="flex justify-between gap-3 w-full border-2 border-black">
      <a className="skip-to-content-link" href="#main">
        Skip to content
      </a>
      <div className="flex">
        <button className="navigation-item" onClick={() => push("/")}>
          <span>Home</span>
        </button>
        <button className="navigation-item" onClick={() => push("/nutrition")}>
          <span>Nutrition</span>
        </button>
        <button
          className="navigation-item"
          onClick={() => push("/dishes-ingredients")}
        >
          <span>Dishes & Ingredients</span>
        </button>
      </div>

      <div className="flex">
        <div className="p-2 border-l-2 border-black h-full">Welcome!</div>
        <button className="p-2 border-l-2 border-black" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}
