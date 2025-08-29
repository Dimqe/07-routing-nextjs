import NotePreview from "@/components/NotePreview/NotePreview";
import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function NoteModalPage({ params }: { params: { id: string } }) {
  const note = await fetchNoteById(params.id).catch(() => null);
  if (!note) return notFound();

  return (
    <Modal onClose={() => history.back()}>
      <NotePreview note={note} />
    </Modal>
  );
}
