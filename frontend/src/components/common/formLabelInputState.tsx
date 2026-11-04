import type { ChangeEvent, ComponentProps } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { Input, Label } from "@/components/ui";

interface FieldFormStateProps extends Omit<
  ComponentProps<typeof Input>,
  "name" | "type" | "onChange"
> {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function FieldFormState({
  label,
  register,
  error,
  id,
  ...props
}: FieldFormStateProps) {
  const inputId = id ?? register.name;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
      .replace(/[^a-zA-Z]/g, "")
      .slice(0, 2)
      .toUpperCase();

    event.target.value = value;

    register.onChange(event);
  }

  return (
    <div className="space-y-1">
      <Label htmlFor={inputId} className="text-lg font-semibold">
        {label}
      </Label>

      <Input
        id={inputId}
        type="text"
        maxLength={2}
        placeholder="UF"
        autoCapitalize="characters"
        {...register}
        {...props}
        onChange={handleChange}
        aria-invalid={!!error}
        className="w-full py-4 uppercase"
      />

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}
