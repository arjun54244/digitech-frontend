import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import type { Blog } from "@/lib/types/blog"

export function useBlogs() {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs")
      if (!res.ok) throw new Error("Failed to fetch blogs")
      return res.json()
    },
  })
}

export function useBlog(id: string | null) {
  return useQuery<Blog>({
    queryKey: ["blogs", id],
    queryFn: async () => {
      if (!id) throw new Error("No ID provided")
      const res = await fetch(`/api/blogs/${id}`)
      if (!res.ok) throw new Error("Failed to fetch blog")
      return res.json()
    },
    enabled: !!id,
  })
}

export function useCreateBlog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to create blog")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      toast.success("Blog created successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useUpdateBlog(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to update blog")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      queryClient.invalidateQueries({ queryKey: ["blogs", id] })
      toast.success("Blog updated successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useDeleteBlog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Failed to delete blog")
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      toast.success("Blog deleted successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}
