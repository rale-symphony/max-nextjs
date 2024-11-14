export default function ArchiveLayout({ archive, latest }: { archive: React.ReactNode, latest: React.ReactNode }) {
  return (
    <div>
      {archive}
      {latest}
    </div>
  )
}