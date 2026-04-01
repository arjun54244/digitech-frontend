import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function useGallery() {
  return useQuery<any[]>({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await fetch("/api/gallery")
      if (!res.ok) throw new Error("Failed to fetch gallery items")
      return res.json()
    },
  })
}

export function useUploadGallery() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to upload image")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] })
      toast.success("Image uploaded to gallery!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useDeleteGallery() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Failed to delete image")
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] })
      toast.success("Image removed from gallery")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}
