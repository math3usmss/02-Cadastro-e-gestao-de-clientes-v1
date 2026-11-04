"use client";

import { useState } from "react";

import {
  DialogCreateClient,
  ListClients,
  SearchClient,
  StatsClient,
} from "../components";
import { FilterClient } from "../components/list";
import { DocumentTypeFilter } from "../components/list/filterClient";

export default function ClientPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [documentType, setDocumentType] = useState<DocumentTypeFilter>("ALL");

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <section className="flex flex-col gap-6 px-12">
      <div className="flex items-center justify-between py-6">
        <h1 className="text-2xl font-bold">Gerenciamento de Clientes</h1>

        <DialogCreateClient />
      </div>
      <StatsClient page={page} />
      <div className="flex items-center gap-4">
        <SearchClient value={search} onChange={handleSearch} />
        <FilterClient value={documentType} onChange={setDocumentType} />
      </div>
      <ListClients
        page={page}
        setPage={setPage}
        search={search}
        documentType={documentType}
      />
    </section>
  );
}
