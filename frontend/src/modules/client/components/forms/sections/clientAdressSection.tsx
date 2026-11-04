"use client";

import type { CreateClientSchemaInput } from "@starter/shared";
import { MapPin, Plus, Trash2 } from "lucide-react";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";

import FieldForm from "@/components/common/formLabelInput";
import { Button } from "@/components/ui";

interface ClientAddressSectionProps {
  register: UseFormRegister<CreateClientSchemaInput>;
  control: Control<CreateClientSchemaInput>;
  errors: FieldErrors<CreateClientSchemaInput>;
}

export default function ClientAddressSection({
  register,
  control,
  errors,
}: ClientAddressSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "clientAddresses",
  });

  function addAddress() {
    append({
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold">Endereços</h3>
          <p className="text-muted-foreground text-sm">
            Adicione os endereços vinculados ao cliente.
          </p>
        </div>

        {fields.length > 0 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addAddress}
          >
            <Plus className="mr-2 size-4" />
            Adicionar
          </Button>
        )}
      </div>

      {fields.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed px-6 py-10 text-center">
          <div className="bg-muted rounded-full p-3">
            <MapPin className="text-muted-foreground size-6" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium">Nenhum endereço cadastrado</p>
            <p className="text-muted-foreground text-xs">
              Adicione um endereço para este cliente.
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addAddress}
          >
            <Plus className="mr-2 size-4" />
            Adicionar endereço
          </Button>
        </div>
      )}

      <div className="space-y-4">
        {fields.map((field, index) => {
          const addressErrors = errors.clientAddresses?.[index];

          return (
            <div
              key={field.id}
              className="space-y-4 rounded-xl border p-4 sm:p-5"
            >
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="text-muted-foreground size-4" />
                  <h4 className="text-sm font-semibold">
                    Endereço {index + 1}
                  </h4>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={() => remove(index)}
                  aria-label={`Remover endereço ${index + 1}`}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <FieldForm
                    label="Rua"
                    register={register(`clientAddresses.${index}.street`)}
                    error={addressErrors?.street?.message}
                  />
                </div>

                <FieldForm
                  label="CEP"
                  register={register(`clientAddresses.${index}.zipCode`)}
                  error={addressErrors?.zipCode?.message}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <FieldForm
                    label="Cidade"
                    register={register(`clientAddresses.${index}.city`)}
                    error={addressErrors?.city?.message}
                  />
                </div>

                <FieldForm
                  label="Estado"
                  register={register(`clientAddresses.${index}.state`)}
                  error={addressErrors?.state?.message}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
