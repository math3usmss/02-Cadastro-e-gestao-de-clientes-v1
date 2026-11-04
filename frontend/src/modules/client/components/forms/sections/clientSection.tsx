import { CreateClientSchemaInput } from "@starter/shared";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import FieldForm from "@/components/common/formLabelInput";
import FieldFormCNPJ from "@/components/common/formLabelInputCNPJ";
import FieldFormCPF from "@/components/common/formLabelInputCPF";
import FieldFormTel from "@/components/common/formLabelInputTel";

interface ClientSectionProps {
  register: UseFormRegister<CreateClientSchemaInput>;
  errors: FieldErrors<CreateClientSchemaInput>;
}

export default function ClientSection({
  register,
  errors,
}: ClientSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="font-semibold">Informações pessoais</h3>
        <p className="text-muted-foreground text-sm">
          Dados de identificação e contato do cliente.
        </p>
      </div>

      <div className="space-y-4">
        <FieldForm
          label="Nome completo"
          register={register("name")}
          error={errors.name?.message}
        />

        <FieldForm
          label="Email"
          register={register("email")}
          error={errors.email?.message}
        />

        <FieldFormTel
          label="Telefone"
          register={register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <div className="space-y-4 border-t pt-5">
        <div>
          <h4 className="text-sm font-medium">Documentos</h4>
          <p className="text-muted-foreground text-xs">
            Informe CPF ou CNPJ, conforme o tipo de cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FieldFormCPF
            label="CPF"
            register={register("CPF")}
            error={errors.CPF?.message}
          />

          <FieldFormCNPJ
            label="CNPJ"
            register={register("CNPJ")}
            error={errors.CNPJ?.message}
          />
        </div>
      </div>
    </div>
  );
}
