"use client";

import { Filter } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type DocumentTypeFilter = "ALL" | "CPF" | "CNPJ";

interface FilterClientProps {
  value: DocumentTypeFilter;
  onChange: (value: DocumentTypeFilter) => void;
}

export default function FilterClient({ value, onChange }: FilterClientProps) {
  return (
    <Select
      value={value}
      onValueChange={(value) => onChange(value as DocumentTypeFilter)}
    >
      <SelectTrigger className="h-11 w-full min-w-44 rounded-lg p-5 sm:w-48">
        <div className="flex items-center gap-2">
          <Filter className="text-muted-foreground size-4" />
          <SelectValue placeholder="Filtrar clientes" />
        </div>
      </SelectTrigger>

      <SelectContent alignItemWithTrigger={false}>
        <SelectItem value="ALL">Todos os clientes</SelectItem>

        <SelectItem value="CPF">Com CPF</SelectItem>

        <SelectItem value="CNPJ">Com CNPJ</SelectItem>
      </SelectContent>
    </Select>
  );
}
