import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import type { Service } from "@/lib/types/service"

export function useServices() {
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("/api/services")
      if (!res.ok) throw new Error("Failed to fetch services")
      return res.json()
    },
  })
}

export function useService(id: string | null) {
  return useQuery<Service>({
    queryKey: ["services", id],
    queryFn: async () => {
      if (!id) throw new Error("No ID provided")
      const res = await fetch(`/api/services/${id}`)
      if (!res.ok) throw new Error("Failed to fetch service")
      return res.json()
    },
    enabled: !!id,
  })
}

export function useCreateService() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch("/api/services", {
        method: "POST",
        body: data,
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to create service")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] })
      toast.success("Service created successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useUpdateService(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch(`/api/services/${id}`, {
        method: "PUT",
        body: data,
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to update service")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] })
      queryClient.invalidateQueries({ queryKey: ["services", id] })
      toast.success("Service updated successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useDeleteService() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/services/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Failed to delete service")
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] })
      toast.success("Service deleted successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}
