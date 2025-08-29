"use client";

import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

type NotePreviewProps = {
  id: string;
  title: string;
  content: string;
};

export default function NotePreview({ id, title, content }: NotePreviewProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back(); 
  };

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={handleClose}>
          ✕
        </button>
        <h2 className={css.title}>{title}</h2>
        <p className={css.content}>{content}</p>
      </div>
    </div>
  );
}
