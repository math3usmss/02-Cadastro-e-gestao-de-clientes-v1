"use client";

import ConfirmDeleteDialog from "@/components/common/ConfirmDeleteDialog";

import { useDeleteClient } from "../../hooks";

interface ButtonDeleteClientProps {
  id: string;
}

export default function ButtonDeleteClient({ id }: ButtonDeleteClientProps) {
  const { mutateAsync: deleteClient, isPending } = useDeleteClient(id);

  return (
    <ConfirmDeleteDialog
      description="Esta ação não pode ser desfeita. Isso irá deletar permanentemente o cliente."
      onConfirm={() => deleteClient()}
      isPending={isPending}
    />
  );
}
