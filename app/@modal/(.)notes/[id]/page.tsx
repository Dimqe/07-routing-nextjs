import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "@/components/NotePreview/NotePreview";
import { notFound } from "next/navigation";

interface NotePageProps {
  params: { id: string };
}

export default async function NoteModalPage({ params }: NotePageProps) {
  const note = await fetchNoteById(params.id);
  if (!note) return notFound();

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}

