"use client";

import { useState } from "react";
import css from "./TagsMenu.module.css";

const tags = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={css.menuContainer}>
      <button
        type="button"
        className={css.menuButton}
        onClick={toggleMenu}
      >
        Notes ▾
      </button>

      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li className={css.menuItem} key={tag}>
              <a
                href={tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`}
                className={css.menuLink}
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  ); 
}
