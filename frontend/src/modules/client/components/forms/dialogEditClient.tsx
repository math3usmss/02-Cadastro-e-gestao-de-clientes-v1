"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateClientSchema,
  type CreateClientSchemaInput,
  type CreateClientSchemaType,
  type UpdateClientSchemaType,
} from "@starter/shared";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";

import { useClientById, useUpdateClient } from "../../hooks";
import { ClientAddressSection, ClientSection } from "..";

interface DialogEditClientProps {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "client" | "addresses";

export default function DialogEditClient({
  id,
  open,
  onOpenChange,
}: DialogEditClientProps) {
  const [step, setStep] = useState<Step>("client");

  const { data: client, isLoading, isError } = useClientById(id);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    reset,
    formState: { errors },
  } = useForm<CreateClientSchemaInput, unknown, CreateClientSchemaType>({
    resolver: zodResolver(CreateClientSchema),
    defaultValues: {
      clientAddresses: [],
    },
  });

  const { mutate, isPending } = useUpdateClient(id);

  useEffect(() => {
    if (!open || !client) return;

    reset({
      name: client.name,
      email: client.email,
      phone: client.phone,
      CPF: client.CPF,
      CNPJ: client.CNPJ,
      clientAddresses: client.clientAddresses ?? [],
    });
  }, [client, open, reset]);

  function handleOpenChange(value: boolean) {
    if (isPending) return;

    onOpenChange(value);

    if (!value) {
      setStep("client");
    }
  }

  async function handleNext() {
    const isValid = await trigger(["name", "email", "phone", "CPF", "CNPJ"]);

    if (isValid) {
      setStep("addresses");
    }
  }

  function onSubmit(data: UpdateClientSchemaType) {
    mutate(data, {
      onSuccess: () => {
        handleOpenChange(false);
      },
    });
  }

  function onInvalid() {
    const hasClientErrors =
      errors.name || errors.email || errors.phone || errors.CPF || errors.CNPJ;

    setStep(hasClientErrors ? "client" : "addresses");
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b px-6 py-5">
          <DialogTitle className="text-xl">Editar cliente</DialogTitle>

          <DialogDescription>
            Atualize os dados pessoais e os endereços do cliente.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex min-h-64 items-center justify-center">
            <Loader2 className="text-primary size-6 animate-spin" />
          </div>
        ) : isError || !client ? (
          <div className="text-destructive px-6 py-10 text-center text-sm">
            Não foi possível carregar os dados do cliente.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 border-b">
              <button
                type="button"
                disabled={isPending}
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
                disabled={isPending}
                onClick={handleNext}
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
              onSubmit={handleSubmit(onSubmit, onInvalid)}
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
                    step === "addresses"
                      ? setStep("client")
                      : handleOpenChange(false)
                  }
                >
                  {step === "addresses" ? "Voltar" : "Cancelar"}
                </Button>

                {step === "client" ? (
                  <Button
                    key="next"
                    type="button"
                    onClick={() => setStep("addresses")}
                  >
                    Próximo
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                ) : (
                  <Button key="submit" type="submit" disabled={isPending}>
                    {isPending ? "Salvando..." : "Cadastrar cliente"}
                  </Button>
                )}
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
