import type { FindByIdClientSchemaReturnType } from "@starter/shared";
import { Building2, Mail, Phone, UserRound } from "lucide-react";
import { useState } from "react";

import MenuList from "@/components/common/menuList";
import { Badge } from "@/components/ui/badge";

import { ButtonDeleteClient, ClientAddresses, DialogEditClient } from "..";

interface ListItemClientProps {
  client: FindByIdClientSchemaReturnType;
}

export default function ListItemClient({ client }: ListItemClientProps) {
  const [isEdit, setIsEdit] = useState(false);
  const isCompany = Boolean(client.CNPJ);
  const document = client.CNPJ || client.CPF;

  return (
    <li className="group bg-card hover:border-primary/40 rounded-xl border p-5 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
            {isCompany ? (
              <Building2 className="size-5" />
            ) : (
              <UserRound className="size-5" />
            )}
          </div>

          <div className="min-w-0 space-y-1">
            <h3 className="truncate font-semibold">{client.name}</h3>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                {isCompany ? "Pessoa jurídica" : "Pessoa física"}
              </Badge>

              {document && (
                <span className="text-muted-foreground text-xs">
                  {document}
                </span>
              )}
            </div>
          </div>
        </div>

        <MenuList
          deleteComponent={<ButtonDeleteClient id={client.id} />}
          editComponent={
            <DialogEditClient
              id={client.id}
              open={isEdit}
              onOpenChange={setIsEdit}
            />
          }
          onEdit={() => setIsEdit(true)}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 border-t pt-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-muted-foreground flex min-w-0 items-center gap-2">
          <Mail className="size-4 shrink-0" />
          <span className="truncate">{client.email || "Sem e-mail"}</span>
        </div>

        <div className="text-muted-foreground flex items-center gap-2">
          <Phone className="size-4 shrink-0" />
          <span>{client.phone || "Sem telefone"}</span>
        </div>

        <ClientAddresses client={client} />
      </div>
    </li>
  );
}
