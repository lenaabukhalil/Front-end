import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchPlaceholder?: string;
  showSearch?: boolean;
}

export function DataTable<T extends object>({
  columns,
  data,
  searchPlaceholder = "Search",
  showSearch = true,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      {showSearch && (
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="text-left py-3 px-4 font-medium text-muted-foreground"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-8 text-center text-muted-foreground"
                >
                  No data available
                </td>
              </tr>
            ) : (
              filteredData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border last:border-0 hover:bg-muted/50"
                >
                  {columns.map((col) => (
                    <td key={String(col.key)} className="py-4 px-4">
                      {col.render
                        ? col.render(item)
                        : String(item[col.key as keyof T] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Items per page:</span>
          <div className="w-12 h-1 bg-muted rounded" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">1-{filteredData.length} of {data.length}</span>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground disabled:opacity-50" disabled>‹</button>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground disabled:opacity-50" disabled>‹</button>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground">›</button>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground">›</button>
        </div>
      </div>
    </div>
  );
}
