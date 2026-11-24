import { PublicNavbar } from '@/components/navigation/PublicNavbar';
import { EdunexusFooter } from '@/components/navigation/EdunexusFooter';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />
      <main className="flex-1">{children}</main>
      <EdunexusFooter />
    </div>
  );
}
