"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateClientSchema,
  CreateClientSchemaInput,
  type CreateClientSchemaType,
} from "@starter/shared";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";

import { useCreateClient } from "../../hooks";
import { ClientAddressSection, ClientSection } from ".";

export default function DialogCreateClient() {
  const [step, setStep] = useState<"client" | "addresses">("client");
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CreateClientSchemaInput, unknown, CreateClientSchemaType>({
    resolver: zodResolver(CreateClientSchema),
    defaultValues: {
      clientAddresses: [],
    },
  });

  const { mutate, isPending } = useCreateClient();

  const onSubmit = (data: CreateClientSchemaType) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) setStep("client");
      }}
    >
      <DialogTrigger
        render={
          <Button>
            <Plus className="mr-2 size-4" />
            Cadastrar cliente
          </Button>
        }
      />

      <DialogContent className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b px-6 py-5">
          <DialogTitle className="text-xl">Cadastrar cliente</DialogTitle>
          <DialogDescription>
            Preencha os dados do cliente e seus endereços.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 border-b">
          <button
            type="button"
            onClick={() => setStep("client")}
            className={cn(
              "cursor-pointer border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              step === "client"
                ? "border-primary text-primary"
                : "text-muted-foreground hover:text-foreground border-transparent",
            )}
          >
            1. Dados pessoais
          </button>

          <button
            type="button"
            onClick={() => setStep("addresses")}
            className={cn(
              "cursor-pointer border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              step === "addresses"
                ? "border-primary text-primary"
                : "text-muted-foreground hover:text-foreground border-transparent",
            )}
          >
            2. Endereços
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
            <div hidden={step !== "client"}>
              <ClientSection register={register} errors={errors} />
            </div>

            <div hidden={step !== "addresses"}>
              <ClientAddressSection
                register={register}
                control={control}
                errors={errors}
              />
            </div>
          </div>

          <div className="bg-background flex items-center justify-between gap-3 border-t px-6 py-4">
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              onClick={() =>
                step === "addresses" ? setStep("client") : setOpen(false)
              }
            >
              {step === "addresses" ? "Voltar" : "Cancelar"}
            </Button>

            {step === "client" ? (
              <Button type="button" onClick={() => setStep("addresses")}>
                Próximo
                <ArrowRight className="ml-2 size-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isPending}>
                {isPending ? "Salvando..." : "Cadastrar cliente"}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
