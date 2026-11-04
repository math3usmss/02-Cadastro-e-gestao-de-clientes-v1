"use client";

import { useState } from "react";

import { DialogCreateClient, ListClients, StatsClient } from "../components";

export default function ClientPage() {
  const [page, setPage] = useState(1);

  return (
    <section className="flex flex-col gap-6 px-12">
      <div className="flex items-center justify-between py-6">
        <h1 className="text-2xl font-bold">Gerenciamento de Clientes</h1>

        <DialogCreateClient />
      </div>
      <StatsClient page={page} />
      <ListClients page={page} setPage={setPage} />
    </section>
  );
}
