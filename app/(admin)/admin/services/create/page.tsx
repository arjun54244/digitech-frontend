"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldError,
  FieldContent,
} from "@/components/ui/field";

import { serviceSchema, type ServiceSchema } from "@/lib/schemas/service";
import { useCreateService } from "@/hooks/use-services";
import ImageUpload from "@/components/admin/ImageUpload";
import RichTextEditor from "@/components/admin/RichTextEditor";

export default function CreateServicePage() {
  const router = useRouter();
  const createMutation = useCreateService();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      slug: "",
      short_description: "",
      content: "",
      image_alt: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: [],
    },
  });

  const title = watch("title");

  // Auto-generate slug from title
  useEffect(() => {
    if (title && !dirtyFields.slug) {
      const slug = title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
      setValue("slug", slug, { shouldValidate: true });
    }
  }, [title, setValue, dirtyFields.slug]);

  async function onSubmit(values: any) {
    const formData = new FormData();
    
    // Append all fields to FormData
    Object.keys(values).forEach(key => {
        if (key === "meta_keywords") {
            formData.append(key, values[key].join(','));
        } else if (key !== "file") {
            formData.append(key, values[key] || "");
        }
    });

    // Append the file if it exists
    if (values.file) {
        formData.append("file", values.file);
    }

    createMutation.mutate(formData, {
      onSuccess: () => {
        router.push("/admin/services");
      },
    });
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/services">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600">
                Create Service
            </h1>
            <p className="text-muted-foreground text-sm">
                Add a new service offering to your business 🚀
            </p>
          </div>
        </div>

        {/* Desktop Publish Button */}
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={createMutation.isPending || isSubmitting}
          className="hidden md:flex shadow-lg shadow-orange-500/20"
        >
          {createMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          <Save className="mr-2 h-4 w-4" />
          Publish 🚀
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <Card className="p-6 space-y-5 rounded-2xl shadow-md border border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-lg font-semibold flex items-center gap-2">📝 Service Details</h2>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Service Title</FieldLabel>
                <FieldContent>
                  <Input
                    id="title"
                    placeholder="e.g. Web Development"
                    {...register("title")}
                  />
                  <FieldError errors={[errors.title]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="slug">Slug / ID</FieldLabel>
                <FieldContent>
                  <Input
                    id="slug"
                    placeholder="e.g. web-development"
                    {...register("slug")}
                  />
                  <FieldError errors={[errors.slug]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="short_description">Short Description</FieldLabel>
                <FieldContent>
                  <Textarea
                    id="short_description"
                    placeholder="Brief overview of the service"
                    {...register("short_description")}
                    className="min-h-[100px]"
                  />
                  <FieldError errors={[errors.short_description]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="content">Full Content / Process Details (Rich Text)</FieldLabel>
                <FieldContent>
                  <RichTextEditor
                    value={watch("content") || ""}
                    onChange={(val: string) => setValue("content", val, { shouldValidate: true })}
                    placeholder="Describe your service and process..."
                  />
                  <FieldError errors={[errors.content]} />
                </FieldContent>
              </Field>
            </FieldGroup>
          </Card>

          {/* SEO Section */}
          <Card className="p-6 space-y-5 rounded-2xl shadow-md border border-border/50 bg-card/50 backdrop-blur-sm">
            <h2 className="text-lg font-semibold flex items-center gap-2">🚀 SEO Settings</h2>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="meta_title">Meta Title</FieldLabel>
                <FieldContent>
                  <Input
                    id="meta_title"
                    placeholder="Meta title for Google"
                    {...register("meta_title")}
                  />
                  <FieldError errors={[errors.meta_title]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="meta_description">Meta Description</FieldLabel>
                <FieldContent>
                  <Textarea
                    id="meta_description"
                    placeholder="SEO friendly description"
                    {...register("meta_description")}
                    className="min-h-[100px]"
                  />
                  <FieldError errors={[errors.meta_description]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="meta_keywords">Meta Keywords</FieldLabel>
                <FieldContent>
                  <Input
                    id="meta_keywords"
                    placeholder="web, development, nextjs"
                    defaultValue={watch("meta_keywords")?.join(', ')}
                    onChange={(e) => {
                      const tags = e.target.value.split(",").map(s => s.trim()).filter(Boolean);
                      setValue("meta_keywords", tags, { shouldValidate: true });
                    }}
                  />
                  <FieldError errors={[errors.meta_keywords]} />
                </FieldContent>
              </Field>
            </FieldGroup>
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Service Image */}
          <Card className="p-1 rounded-2xl shadow-md border border-border/50 overflow-hidden">
             <ImageUpload setValue={setValue} />
          </Card>

          <Field>
            <FieldLabel htmlFor="image_alt">Image Alt Text</FieldLabel>
            <FieldContent>
              <Input
                id="image_alt"
                placeholder="Accessible description"
                {...register("image_alt")}
              />
              <FieldError errors={[errors.image_alt]} />
            </FieldContent>
          </Field>

          {/* Quick Tips */}
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">💡 Service Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex gap-2"><span>•</span> <span>Focus on the benefit to the client.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Highlight your unique process step-by-step.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Mention your specific tech stack or tools.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Include clear Call to Actions in the content.</span></li>
            </ul>
          </Card>

          {/* Mobile Publish Button */}
          <Button
            type="submit"
            disabled={createMutation.isPending || isSubmitting}
            className="w-full md:hidden shadow-lg shadow-orange-500/20"
          >
            {createMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Publish 🚀
          </Button>
        </div>
      </form>
    </div>
  );
}
