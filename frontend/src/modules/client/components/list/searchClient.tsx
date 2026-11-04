"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui";

interface SearchClientProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchClient({ value, onChange }: SearchClientProps) {
  const [search, setSearch] = useState(value);

  useEffect(() => {
    if (search === value) return;

    const timeout = setTimeout(() => {
      onChange(search.trim());
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, value, onChange]);

  function handleClear() {
    setSearch("");
    onChange("");
  }

  return (
    <div className="relative w-full">
      <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />

      <Input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar clientes..."
        aria-label="Buscar clientes"
        className="h-11 w-full rounded-lg pr-10 pl-10"
      />

      {search && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Limpar pesquisa"
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
