import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesFilterPage({ params }: { params: { slug?: string[] } }) {
  const tag = params.slug?.[0] ?? 'All';

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', { q: '', page: 1, tag: tag === 'All' ? undefined : tag }],
    queryFn: () =>
      fetchNotes({
        search: '',
        page: 1,
        tag: tag === 'All' ? undefined : tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
