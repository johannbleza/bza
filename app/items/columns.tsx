"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { Item } from "@/lib/types/item";
import Image from "next/image";

export const columns: ColumnDef<Item>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="mr-4"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="mr-4"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "img_link",
    header: "Item",
    cell: ({ row }) => {
      const src = (row.getValue("img_link") as string) || "";
      const alt = (row.getValue("name") as string) || "Item image";

      return src ? (
        <Image
          src={src}
          alt={alt}
          width={48}
          height={48}
          className="rounded-md object-cover size-8"
        />
      ) : (
        <div className="size-8 rounded-md bg-gray-100" />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Name"} />
    ),
  },
  {
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Source"} />
    ),
  },
  {
    accessorKey: "retail_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Retail Price"} />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("retail_price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "sale_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Sale Price"} />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("sale_price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Stock"} />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      console.log(row);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
