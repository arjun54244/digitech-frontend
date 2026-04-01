"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Upload, Trash2, Quote, User, Plus } from "lucide-react"
import { useTestimonials, useCreateTestimonial, useDeleteTestimonial } from "@/hooks/use-testimonials"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
  file: z.any().optional(),
})

export default function AdminTestimonialsPage() {
  const [preview, setPreview] = useState<string | null>(null)
  const { data: testimonials, isLoading: loadingTestimonials } = useTestimonials()
  const createMutation = useCreateTestimonial()
  const deleteMutation = useDeleteTestimonial()

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(testimonialSchema),
  })

  const onUpload = async (data: any) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("message", data.message)
    if (data.file?.[0]) {
      formData.append("file", data.file[0])
    }
    await createMutation.mutateAsync(formData)
    reset()
    setPreview(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreview(url)
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600">
          💬 Testimonials Management
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Add and manage client reviews and testimonials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creation Form */}
        <Card className="lg:col-span-4 border border-border/50 shadow-xl h-fit sticky top-8 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Add Testimonial</CardTitle>
            <CardDescription>Enter client details and their feedback.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onUpload)} className="space-y-5">
              <div className="space-y-2">
                <Label>Client Name</Label>
                <Input {...register("name")} placeholder="e.g. John Doe" />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message as string}</p>}
              </div>

              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea {...register("message")} placeholder="Client's testimonial message..." className="min-h-[120px]" />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message as string}</p>}
              </div>

              <div className="space-y-2">
                <Label>Avatar Image (Optional)</Label>
                <div 
                  className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-6 text-center hover:border-orange-500/50 transition-colors cursor-pointer relative group flex flex-col items-center justify-center overflow-hidden"
                >
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    accept="image/*"
                    {...register("file", { onChange: handleFileChange })}
                  />
                  {preview ? (
                     <div className="relative w-20 h-20">
                        <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-full border-2 border-orange-500/50" />
                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Plus className="w-6 h-6 text-white" />
                        </div>
                     </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-2 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <User className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-medium">Upload photo</p>
                    </>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-lg shadow-lg" disabled={createMutation.isPending}>
                {createMutation.isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Quote className="mr-2 h-4 w-4" />}
                {createMutation.isPending ? "Adding..." : "Publish Review"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Testimonials List */}
        <div className="lg:col-span-8 space-y-6">
           <h3 className="text-xl font-semibold px-2 flex items-center gap-2">
             <Quote className="w-5 h-5 text-orange-500" /> Client Success Stories
           </h3>
           
           {loadingTestimonials ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="h-48 bg-muted animate-pulse rounded-2xl" />
                ))}
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence>
                  {testimonials?.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={item.id}
                      className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:border-orange-500/30 transition-all flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                          <AvatarImage src={item.avatar_url} alt={item.name} />
                          <AvatarFallback className="bg-orange-500/10 text-orange-600 font-bold">
                            {getInitials(item.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 dark:text-white truncate">{item.name}</h4>
                          <p className="text-[10px] uppercase tracking-widest text-orange-500 font-black">Verified Client</p>
                        </div>
                        
                        <AlertDialog>
                          <AlertDialogTrigger className="inline-flex items-center justify-center rounded-full w-9 h-9 text-destructive hover:bg-destructive/10 transition-colors opacity-0 group-hover:opacity-100">
                              <Trash2 className="w-4 h-4" />
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Remove Review?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this testimonial from {item.name}?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction 
                                className="bg-destructive hover:bg-destructive/90"
                                onClick={() => deleteMutation.mutate(item.id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                      
                      <p className="text-sm text-slate-600 dark:text-zinc-400 italic leading-relaxed line-clamp-4 relative">
                        <Quote className="w-4 h-4 text-orange-500/20 absolute -top-2 -left-2 rotate-180" />
                        "{item.message}"
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {(!testimonials || testimonials.length === 0) && (
                  <div className="col-span-2 p-20 text-center border-2 border-dashed rounded-[3rem] text-muted-foreground flex flex-col items-center">
                    <Quote className="w-16 h-16 opacity-10 mb-4" />
                    <p className="text-lg font-medium opacity-60">No testimonials yet</p>
                    <p className="text-sm opacity-40">Add your first client success story to display it on the site</p>
                  </div>
                )}
             </div>
           )}
        </div>
      </div>
    </div>
  )
}
