export function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-10 max-[1000px] w-[90%] m-auto">{children}</div>
    </>
  )
}
