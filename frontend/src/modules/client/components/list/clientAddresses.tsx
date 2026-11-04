"use client";

import type { FindByIdClientSchemaReturnType } from "@starter/shared";
import { Building2, MapPin, Navigation } from "lucide-react";
import { useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";

interface ClientAddressesProps {
  client: FindByIdClientSchemaReturnType;
}

export default function ClientAddresses({ client }: ClientAddressesProps) {
  const [open, setOpen] = useState(false);

  const addresses = client.clientAddresses ?? [];
  const addressCount = addresses.length;

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={addressCount === 0}
        onClick={() => setOpen(true)}
        className="h-auto gap-2 rounded-lg px-3 py-2"
      >
        <MapPin className="size-4" />

        <span>
          {addressCount === 0
            ? "Sem endereços"
            : `${addressCount} ${
                addressCount === 1 ? "endereço" : "endereços"
              }`}
        </span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-xl flex-col gap-0 overflow-hidden p-0">
          <DialogHeader className="border-b px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
                <Building2 className="size-5" />
              </div>

              <div className="min-w-0 space-y-1">
                <DialogTitle className="truncate text-lg">
                  Endereços do cliente
                </DialogTitle>

                <DialogDescription className="truncate">
                  {client.name}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Endereços cadastrados</h3>

              <span className="bg-muted text-muted-foreground rounded-md px-2.5 py-1 text-xs font-medium">
                {addressCount} no total
              </span>
            </div>

            {addresses.map((address, index) => (
              <div
                key={address.id ?? index}
                className="hover:border-primary/40 rounded-xl border p-4 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <MapPin className="text-muted-foreground size-4" />
                  </div>

                  <div className="min-w-0 flex-1 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold">
                        Endereço {index + 1}
                      </h4>

                      <p className="text-muted-foreground mt-1 text-sm">
                        {address.street}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-muted-foreground text-xs">
                          Cidade / Estado
                        </p>
                        <p className="text-sm font-medium">
                          {address.city} - {address.state}
                        </p>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-xs">CEP</p>
                        <p className="text-sm font-medium">{address.zipCode}</p>
                      </div>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        [
                          address.street,
                          address.city,
                          address.state,
                          address.zipCode,
                        ].join(", "),
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary inline-flex items-center gap-1.5 text-xs font-medium hover:underline"
                    >
                      <Navigation className="size-3.5" />
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background flex justify-end border-t px-6 py-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
