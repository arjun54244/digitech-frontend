"use client"

import { useState, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Upload, ExternalLink, Trash2, FileText, Globe } from "lucide-react"
import { usePortfolios, useProjects, useCreateProject, useUploadPortfolio, useDeletePortfolio, useDeleteProject } from "@/hooks/use-portfolio"
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

const portfolioSchema = z.object({
  name: z.string().min(1, "Name is required"),
  file: z.any().refine((files) => files?.length > 0, "PDF file is required"),
})

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(5, "Description is required"),
  project_url: z.string().url("Valid project URL is required"),
  category: z.string().min(1, "Category is required"),
  tech_stack: z.string().transform((v) => v.split(",").map((s) => s.trim())),
})

export default function AdminPortfolioPage() {
  const [pdfPreview, setPdfPreview] = useState<string | null>(null)
  const { data: portfolios, isLoading: loadingPortfolios } = usePortfolios()
  const { data: projects, isLoading: loadingProjects } = useProjects()

  const uploadMutation = useUploadPortfolio()
  const createProjectMutation = useCreateProject()
  const deletePortfolioMutation = useDeletePortfolio()
  const deleteProjectMutation = useDeleteProject()

  const { register: regPortfolio, handleSubmit: handlePortfolioSubmit, reset: resetPortfolio, formState: { errors: portErrors } } = useForm({
    resolver: zodResolver(portfolioSchema),
  })

  const { register: regProject, handleSubmit: handleProjectSubmit, reset: resetProject, formState: { errors: projErrors } } = useForm({
    resolver: zodResolver(projectSchema),
  })

  const onPortfolioUpload = async (data: any) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("file", data.file[0])
    await uploadMutation.mutateAsync(formData)
    resetPortfolio()
    setPdfPreview(null)
  }

  const onProjectCreate = async (data: any) => {
    await createProjectMutation.mutateAsync({ ...data, image_url: null })
    resetProject()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file)
      setPdfPreview(url)
    }
  }

  // Filter pure portfolios from unified list if needed, but usePortfolios currently fetches unified /api/portfolio
  // Let's refine portfolios to only show those with type='pdf'
  const pdfPortfolios = portfolios?.filter(p => p.type === 'pdf')

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600">
          🎨 Portfolio Management
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Manage your PDF portfolios and showcase your best website projects.
        </p>
      </div>

      <Tabs defaultValue="pdf" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
          <TabsTrigger value="pdf" className="text-base">📄 PDF Portfolios</TabsTrigger>
          <TabsTrigger value="websites" className="text-base">🌐 Best Websites</TabsTrigger>
        </TabsList>

        <TabsContent value="pdf" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Form */}
            <Card className="border border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Upload New PDF</CardTitle>
                <CardDescription>Only PDF files are accepted. Max size 10MB.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePortfolioSubmit(onPortfolioUpload)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="pdf-name">Portfolio Name</Label>
                    <Input id="pdf-name" {...regPortfolio("name")} placeholder="e.g. Creative Portfolio 2024" />
                    {portErrors.name && <p className="text-sm text-destructive">{portErrors.name.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pdf-file">PDF File</Label>
                    <div 
                      className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 text-center hover:border-orange-500/50 transition-colors cursor-pointer relative group"
                    >
                      <input 
                        type="file" 
                        id="pdf-file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept=".pdf"
                        {...regPortfolio("file", { onChange: handleFileChange })}
                      />
                      <Upload className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-orange-500 transition-colors" />
                      <p className="mt-2 text-sm font-medium">Click or drag to upload PDF</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF items only</p>
                    </div>
                    {portErrors.file && <p className="text-sm text-destructive">{portErrors.file.message as string}</p>}
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg shadow-lg" disabled={uploadMutation.isPending}>
                    {uploadMutation.isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Upload className="mr-2 h-5 w-5" />}
                    {uploadMutation.isPending ? "Uploading..." : "Publish Portfolio"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* List + Quick Actions */}
            <Card className="border border-border/50 shadow-xl overflow-hidden flex flex-col">
              <CardHeader className="bg-muted/30 border-b border-border/50">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Existing Portfolios
                </CardTitle>
              </CardHeader>
              <div className="flex-1 bg-muted/10 p-4">
                {loadingPortfolios ? (
                  <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>
                ) : (
                  <div className="space-y-3">
                    {pdfPortfolios?.map((p: any) => (
                      <div key={p.id} className="flex items-center justify-between p-3 bg-card border rounded-xl hover:shadow-md transition-all group">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5 text-orange-500" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="font-bold truncate">{p.title}</p>
                            <p className="text-[10px] text-muted-foreground truncate">{p.link}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                           <Button size="icon" variant="ghost" className="rounded-full" onClick={() => window.open(p.link, "_blank")}>
                             <ExternalLink className="w-4 h-4" />
                           </Button>
                           <AlertDialog>
                              <AlertDialogTrigger className="inline-flex items-center justify-center rounded-full w-9 h-9 text-destructive hover:bg-destructive/10 transition-colors">
                                 <Trash2 className="w-4 h-4" />
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Portfolio?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete "{p.title}"? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction 
                                    className="bg-destructive hover:bg-destructive/90"
                                    onClick={() => deletePortfolioMutation.mutate(p.id.replace('pdf-', ''))}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                           </AlertDialog>
                        </div>
                      </div>
                    ))}
                    {(!pdfPortfolios || pdfPortfolios.length === 0) && (
                      <p className="text-center text-muted-foreground py-8">No portfolios found.</p>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="websites" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <Card className="lg:col-span-4 border border-border/50 shadow-xl h-fit">
              <CardHeader>
                <CardTitle>Add Best Website</CardTitle>
                <CardDescription>Showcase your work with a live iframe preview.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProjectSubmit(onProjectCreate)} className="space-y-5">
                  <div className="space-y-2">
                    <Label>Project Title</Label>
                    <Input {...regProject("title")} placeholder="e.g. E-commerce Platform" />
                    {projErrors.title && <p className="text-sm text-destructive">{projErrors.title.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea {...regProject("description")} placeholder="Short description of the project" className="h-24" />
                    {projErrors.description && <p className="text-sm text-destructive">{projErrors.description.message as string}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Input {...regProject("category")} placeholder="Web App" />
                    </div>
                    <div className="space-y-2">
                      <Label>Tech Stack</Label>
                      <Input {...regProject("tech_stack")} placeholder="Next.js, TS, Tailwind" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Project Link</Label>
                    <Input {...regProject("project_url")} placeholder="https://..." />
                  </div>
                  <Button type="submit" className="w-full" disabled={createProjectMutation.isPending}>
                    {createProjectMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "+ Add Project"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* List */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-semibold px-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-500" /> Existing Websites
              </h3>
              {loadingProjects ? (
                <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects?.map((project) => (
                    <Card key={project.id} className="group overflow-hidden border border-border/50 hover:border-orange-500/30 transition-all hover:shadow-lg">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        <iframe 
                          src={project.project_url} 
                          className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none transition-all duration-700" 
                          title={project.title}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-40 group-hover:opacity-0 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 gap-2">
                             <Button size="icon" variant="secondary" className="rounded-full" onClick={() => window.open(project.project_url, "_blank")}>
                                <ExternalLink className="w-4 h-4" />
                             </Button>
                             <AlertDialog>
                                <AlertDialogTrigger className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-destructive text-white shadow-lg">
                                   <Trash2 className="w-4 h-4" />
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Project?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete "{project.title}"?
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction 
                                      className="bg-destructive hover:bg-destructive/90"
                                      onClick={() => deleteProjectMutation.mutate(project.id)}
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                             </AlertDialog>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold">{project.title}</h4>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-orange-500/10 text-orange-600 rounded-full font-bold">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
