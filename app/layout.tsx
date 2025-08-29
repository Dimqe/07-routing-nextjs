import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'NoteHub',
  description: 'Notes manager',
};

export default function RootLayout({
  children,
  modal, // 👈 додаємо слот для модалки
}: {
  children: React.ReactNode;
  modal: React.ReactNode; // 👈 описуємо його тип
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal} {/* 👈 тут рендериться твоя модалка */}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
