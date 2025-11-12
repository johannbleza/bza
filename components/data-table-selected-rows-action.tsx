"use client";

import { Table } from "@tanstack/react-table";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function DataTableSelectedRowActions<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  const handlePrintSelected = () => {
    const selected = table
      .getSelectedRowModel()
      .flatRows.map((r) => r.original);
    console.log("Selected rows:", selected);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "ml-auto h-8",
            table.getSelectedRowModel().flatRows.length > 0 ? "flex" : "hidden"
          )}
        >
          Selected Rows: {table.getSelectedRowModel().flatRows.length}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handlePrintSelected}>Print</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
