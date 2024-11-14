import Link from "next/link";

export default async function ArchiveFilterPage({ params }: { params: Promise<{ filter: string }> }) {
  const filter = (await params);
  
  return (
    <div>
      <Link href="/archive/2024">Archive 2024</Link>
      <h3>ArchiveFilterPage {JSON.stringify(filter)}</h3>
    </div>
  )
}