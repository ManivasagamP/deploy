// hooks/use-toast.ts
import { useState } from "react"

type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  return {
    toasts,
    addToast: (toast: Toast) => setToasts((prev) => [...prev, toast]),
    removeToast: (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id)),
  }
}
