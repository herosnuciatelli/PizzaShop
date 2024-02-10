"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowRight, ArrowUpDown, ChevronDown, CircleIcon, MoreHorizontal, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import clsx from "clsx"

const data: Payment[] = [
  {
    id: "aef1981d-68b8-4f1e-832a-3c6e5e9253e9",
    amount: 150.00,
    status: "pending",
    client: "John Doe",
    done: "9h ago"
  },
  {
    id: "c974f75e-27a8-43b5-b4c6-93c147fcf5aa",
    amount: 75.50,
    status: "processing",
    client: "Jane Smith",
    done: '10h ago'
  },
  {
    id: "c974f75e-27a8-43b5-b4c6-93c147fcf5aa",
    amount: 75.50,
    status: "success",
    client: "Jane Smith",
    done: '10h ago'
  },
  {
    id: "c974f75e-27a8-43b5-b4c6-93c147fcf5aa",
    amount: 75.50,
    status: "failed",
    client: "Jane Smith",
    done: '10h ago'
  },
  {
    id: "c974f75e-27a8-43b5-b4c6-93c147fcf5aa",
    amount: 75.50,
    status: "success",
    client: "Jane Smith",
    done: '10h ago'
  },
  {
    id: "c974f75e-27a8-43b5-b4c6-93c147fcf5aa",
    amount: 75.50,
    status: "success",
    client: "Jane Smith",
    done: '10h ago'
  },
  {
    id: "c974f75e-27a8-43b5-b4c6-93c147fcf5aa",
    amount: 75.50,
    status: "success",
    client: "Jane Smith",
    done: '10h ago'
  }
];

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  client: string
  done: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "Order ID",
    header: "Order ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.id}</div>
    )
  },
  {
    accessorKey: "Done Ago",
    header: "Done Ago",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.done}</div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize flex gap-2 items-center">
        <CircleIcon className={clsx("w-2 stroke-0",
        {
          'fill-yellow-600': row.getValue("status") == 'pending',
          'fill-green-600': row.getValue("status") == 'success',
          'fill-red-600': row.getValue("status") == 'failed',
          'fill-blue-600': row.getValue("status") == 'processing',
        })} />
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "client",
    header: () => <div>Client</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("client")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="flex gap-1 justify-center">
          <Button className="bg-transparent text-xs flex gap-1 border border-zinc-800 rounded hover:bg-zinc-800 text-zinc-300">
            <ArrowRight className="w-4"/>
            Aprove
          </Button>
          <Button className="bg-transparent text-xs flex gap-1 hover:bg-transparent text-white" variant="link">
            <XIcon className="w-4"/>
            Cancel
          </Button>
        </div>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter clients..."
          value={(table.getColumn("client")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("client")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-zinc-800"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="ml-auto bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 text-zinc-300">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-zinc-950 border border-zinc-800 text-zinc-300">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-zinc-800">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}  className="border-zinc-800 hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-zinc-800 hover:bg-transparent"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}