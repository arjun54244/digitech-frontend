"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Upload, Trash2, Image as ImageIcon, Plus } from "lucide-react"
import { useGallery, useUploadGallery, useDeleteGallery } from "@/hooks/use-gallery"
import { motion, AnimatePresence } from "framer-motion"
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

const gallerySchema = z.object({
  title: z.string().optional(),
  file: z.any().refine((files) => files?.length > 0, "Image is required"),
})

export default function AdminGalleryPage() {
  const [preview, setPreview] = useState<string | null>(null)
  const { data: galleryItems, isLoading: loadingGallery } = useGallery()
  const uploadMutation = useUploadGallery()
  const deleteMutation = useDeleteGallery()

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(gallerySchema),
  })

  const onUpload = async (data: any) => {
    const formData = new FormData()
    formData.append("title", data.title || "")
    formData.append("file", data.file[0])
    await uploadMutation.mutateAsync(formData)
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

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600">
            🖼️ Gallery Management
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Upload and manage images for your site gallery.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upload Form */}
        <Card className="lg:col-span-4 border border-border/50 shadow-xl h-fit sticky top-8 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Add New Image</CardTitle>
            <CardDescription>Upload a high-quality image to the gallery.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onUpload)} className="space-y-6">
              <div className="space-y-2">
                <Label>Image Title (Optional)</Label>
                <Input {...register("title")} placeholder="e.g. Modern Office Space" />
              </div>

              <div className="space-y-2">
                <Label>Image File</Label>
                <div 
                  className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 text-center hover:border-orange-500/50 transition-colors cursor-pointer relative group aspect-square flex flex-col items-center justify-center overflow-hidden"
                >
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    accept="image/*"
                    {...register("file", { onChange: handleFileChange })}
                  />
                  {preview ? (
                    <img src={preview} alt="Preview" className="absolute inset-0 w-full h-full object-cover p-2 rounded-2xl" />
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <Plus className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-medium">Click to upload photo</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG or WebP</p>
                    </>
                  )}
                </div>
                {errors.file && <p className="text-sm text-destructive">{errors.file.message as string}</p>}
              </div>

              <Button type="submit" className="w-full h-12 text-lg shadow-lg" disabled={uploadMutation.isPending}>
                {uploadMutation.isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Upload className="mr-2 h-5 w-5" />}
                {uploadMutation.isPending ? "Uploading..." : "Save to Gallery"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Gallery List */}
        <div className="lg:col-span-8 space-y-6">
           <h3 className="text-xl font-semibold px-2 flex items-center gap-2">
             <ImageIcon className="w-5 h-5 text-orange-500" /> Site Gallery
           </h3>
           
           {loadingGallery ? (
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="aspect-square bg-muted animate-pulse rounded-2xl" />
                ))}
             </div>
           ) : (
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <AnimatePresence>
                  {galleryItems?.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id}
                      className="group relative aspect-square rounded-2xl overflow-hidden border border-border/50 hover:border-orange-500/40 transition-all hover:shadow-xl"
                    >
                      <img src={item.image_url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center p-4">
                         <p className="text-white font-bold text-center mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-tight">
                           {item.title || "Untitled"}
                         </p>
                         
                         <AlertDialog>
                            <AlertDialogTrigger className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-destructive text-white shadow-lg scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                               <Trash2 className="w-5 h-5" />
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Remove from Gallery?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this image?
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
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {(!galleryItems || galleryItems.length === 0) && (
                  <div className="col-span-3 p-20 text-center border-2 border-dashed rounded-[2rem] text-muted-foreground flex flex-col items-center">
                    <ImageIcon className="w-16 h-16 opacity-10 mb-4" />
                    <p className="text-lg font-medium opacity-60">Gallery is empty</p>
                    <p className="text-sm opacity-40">Start by uploading your first showcase image</p>
                  </div>
                )}
             </div>
           )}
        </div>
      </div>
    </div>
  )
}
