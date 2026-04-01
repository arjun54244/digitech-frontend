"use client";

import { useState, useEffect, use } from "react";
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
import { useService, useUpdateService } from "@/hooks/use-services";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";

export default function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { data: service, isLoading } = useService(id);
  const updateMutation = useUpdateService(id);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
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

  // Pre-fill form when data is loaded
  useEffect(() => {
    if (service) {
      reset({
        title: service.title || "",
        slug: service.slug || "",
        short_description: service.short_description || "",
        content: service.content || "",
        image_alt: service.image_alt || "",
        meta_title: service.meta_title || "",
        meta_description: service.meta_description || "",
        meta_keywords: service.meta_keywords || [],
      });
    }
  }, [service, reset]);

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
    
    // Track existing image URL
    if (service?.image_url) {
        formData.append("existing_image_url", service.image_url);
    }

    updateMutation.mutate(formData, {
      onSuccess: () => {
        router.push("/admin/services");
      },
    });
  }

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    );
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
                Edit Service
            </h1>
            <p className="text-muted-foreground text-sm">
                Update "{service?.title}" and optimize for SEO 🚀
            </p>
          </div>
        </div>

        {/* Desktop Update Button */}
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={updateMutation.isPending || isSubmitting}
          className="hidden md:flex shadow-lg shadow-orange-500/20"
        >
          {updateMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          <Save className="mr-2 h-4 w-4" />
          Update Service 🚀
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
                    placeholder="Enter service title"
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
                <FieldLabel htmlFor="meta_description">Meta Description (150–160 chars)</FieldLabel>
                <FieldContent>
                  <Textarea
                    id="meta_description"
                    placeholder="150–160 characters recommended"
                    {...register("meta_description")}
                    className="min-h-[100px]"
                  />
                  <FieldError errors={[errors.meta_description]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="meta_keywords">Meta Keywords (Comma separated)</FieldLabel>
                <FieldContent>
                  <Input
                    id="meta_keywords"
                    placeholder="seo, marketing, google"
                    defaultValue={service?.meta_keywords?.join(", ")}
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
             <ImageUpload setValue={setValue} defaultValue={service?.image_url} />
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

          {/* Service Info */}
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-rose-500/5 border border-indigo-500/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">📊 Service Data</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex gap-2"><span>•</span> <span>Created: {service && new Date(service.created_at).toLocaleDateString()}</span></li>
              <li className="flex gap-2"><span>•</span> <span>Display Order: {service?.sort_order}</span></li>
              <li className="flex gap-2"><span>•</span> <span>ID: {id}</span></li>
            </ul>
          </Card>

          {/* Mobile Update Button */}
          <Button
            type="submit"
            disabled={updateMutation.isPending || isSubmitting}
            className="w-full md:hidden shadow-lg shadow-orange-500/20"
          >
            {updateMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update Service 🚀
          </Button>
        </div>
      </form>
    </div>
  );
}
