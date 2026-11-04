"use client";

import ListPagination from "@/components/common/listPagination";
import EmptyState from "@/components/common/states/emptyState";
import ErrorState from "@/components/common/states/errorState";
import LoadingState from "@/components/common/states/loadingState";

import { useClients } from "../../hooks";
import { ListItemClient } from ".";
import { DocumentTypeFilter } from "./filterClient";

interface ListClientsProps {
  page: number;
  setPage: (page: number) => void;
  search: string;
  documentType: DocumentTypeFilter;
}

export default function ListClients({
  page,
  setPage,
  search,
  documentType,
}: ListClientsProps) {
  const {
    data: { clients, limit, totalPages } = {},
    isLoading,
    isError,
  } = useClients(page, search, documentType);

  if (isLoading) {
    return (
      <LoadingState items={5}>
        <div className="bg-muted h-16 animate-pulse rounded-md" />
      </LoadingState>
    );
  }

  if (isError) {
    return <ErrorState title="Erro ao carregar clientes." />;
  }

  if (!clients?.length) {
    return <EmptyState title="Nenhum cliente encontrado." />;
  }

  return (
    <div className="w-full">
      <ul className="flex flex-col gap-3">
        {clients.map((client) => (
          <ListItemClient key={client.id} client={client} />
        ))}
      </ul>

      {totalPages && totalPages > 1 && (
        <div className="mt-3 flex justify-end">
          <ListPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
}
