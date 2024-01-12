"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider
      duration={2000}
      swipeDirection={'up'}
    >
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="relative" >
            <div className="w-full text-center">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastClose className="absolute top-0 right-0" />
            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
