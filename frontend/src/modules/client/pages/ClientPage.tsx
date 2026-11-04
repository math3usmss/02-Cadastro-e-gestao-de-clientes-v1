"use client";

import { useState } from "react";

import { DialogCreateClient, ListClients } from "../components";

export default function ClientPage() {
  const [page, setPage] = useState(1);

  return (
    <section className="flex flex-col gap-6 px-12">
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Gerenciamento de Clientes</h1>

        <DialogCreateClient />
      </div>

      <ListClients page={page} setPage={setPage} />
    </section>
  );
}
