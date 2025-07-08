import { Toaster } from "@/components/ui/sonner"

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      richColors
      className="bg-neutral-100 shadow-lg"
      theme="light"
    />
  )
}

export default ToastProvider;