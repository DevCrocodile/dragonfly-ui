import { useState } from "react";

export function useField({ type, id, initialValue, required = false }: { type: string, id: string, initialValue?: string, required?: boolean }) {
  const [value, setValue] = useState<string>(initialValue ?? '')

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setValue(event.target.value)
  }

  return { type, value, onChange, required, setValue, id }
}