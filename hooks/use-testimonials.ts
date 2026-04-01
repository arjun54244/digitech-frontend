import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function useTestimonials() {
  return useQuery<any[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await fetch("/api/testimonials")
      if (!res.ok) throw new Error("Failed to fetch testimonials")
      return res.json()
    },
  })
}

export function useCreateTestimonial() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to create testimonial")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] })
      toast.success("Testimonial added successfully!")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}

export function useDeleteTestimonial() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Failed to delete testimonial")
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] })
      toast.success("Testimonial deleted correctly")
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })
}
