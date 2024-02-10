import { DataTableDemo } from "./Table";

export async function generateMetadata() {
  return {
    title: 'Orders',
  }
}

export default function Orders() {
  return (
    <main className="px-10">
      <div className="py-10">
        <h2 className="font-bold text-4xl">Orders</h2>
      </div>
      <div>
        <DataTableDemo />
      </div>
    </main>
  )
}