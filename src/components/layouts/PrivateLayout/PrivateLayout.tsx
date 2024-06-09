export function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-24 sm:px-6  lg:px-8">
        {children}
      </div>
    </>
  )
}
