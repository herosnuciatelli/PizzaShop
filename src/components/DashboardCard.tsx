
export function DashboardCard({children}: any) {
  return (
    <div className="border border-zinc-800 px-7 py-8 rounded flex flex-col gap-5">
      {children}
    </div>
  );
}

export function DashboardCardCurrency({ children }: any) {
  const value = Number(children)

  return (
    <span className="text-2xl font-bold">{value.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</span>
  )
}

export function DashboardCardValue({ children }: any) {
  return (
    <span className="text-2xl font-bold">{children}</span>
  )
}

export function DashboardCardTitle({ children }: any) {
  return (
    <div className="flex justify-between w-full">
      {children}
    </div>
  )
}

export function DashboardCardDescription({ children }: any) {
  return (
    <p className="text-sm text-slate-400">
      <span className="text-emerald-500">{children}</span> compared to last month
    </p>
  )
}

