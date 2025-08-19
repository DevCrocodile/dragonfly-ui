import { useState } from "react";

export function useField({ type, required = false }: { type: string, required?: boolean }) {
  const [value, setValue] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setValue(event.target.value)
  }

  return { type, value, onChange, required, setValue }
}