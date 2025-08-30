"use client";

import { useRouter, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

interface NotePreviewProps {
  id?: string; // може прийти як проп, але необов'язковий
}

export default function NotePreview({ id }: NotePreviewProps) {
  const router = useRouter();
  const params = useParams();

  // якщо id не передали пропсом → беремо з URL
  const noteId = id ?? (params?.id as string);

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: "always",
  });

  const handleClose = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <Modal onClose={handleClose}>
        <p className={css.loading}>Loading...</p>
      </Modal>
    );
  }

  if (isError || !note) {
    return (
      <Modal onClose={handleClose}>
        <p className={css.error}>Error: note not found.</p>
      </Modal>
    );
  }

  return (
    <Modal onClose={handleClose}>
      <div className={css.modalContent}>
        <h2 className={css.title}>{note.title}</h2>
        <p className={css.content}>{note.content}</p>
        <p className={css.tag}>Tag: {note.tag}</p>
        <p className={css.date}>
          Created: {new Date(note.createdAt).toLocaleString()}
        </p>
      </div>
    </Modal>
  );
}
