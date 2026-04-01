import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function usePortfolios() {
  return useQuery<any[]>({
    queryKey: ["portfolios"],
    queryFn: async () => {
      const res = await fetch("/api/portfolio")
      if (!res.ok) throw new Error("Failed to fetch portfolios")
      return res.json()
    },
  })
}

export function useProjects() {
  return useQuery<any[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects")
      if (!res.ok) throw new Error("Failed to fetch projects")
      return res.json()
    },
  })
}

export function useCreateProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to create project")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] })
      queryClient.invalidateQueries({ queryKey: ["portfolio"] }) // Invalidate unified fetch too
      toast.success("Project created successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useUploadPortfolio() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/portfolio/upload", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to upload portfolio")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portfolios"] })
      queryClient.invalidateQueries({ queryKey: ["portfolio"] }) // Invalidate unified fetch too
      toast.success("Portfolio uploaded successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useDeletePortfolio() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string | number) => {
      const res = await fetch(`/api/portfolio/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Failed to delete portfolio")
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portfolios"] })
      queryClient.invalidateQueries({ queryKey: ["portfolio"] })
      toast.success("Portfolio deleted successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useDeleteProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string | number) => {
      const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Failed to delete project")
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] })
      queryClient.invalidateQueries({ queryKey: ["portfolio"] })
      toast.success("Project deleted successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}
