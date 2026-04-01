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

import { blogSchema, type BlogSchema } from "@/lib/schemas/blog";
import { useCreateBlog } from "@/hooks/use-blogs";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";

export default function CreateBlogPage() {
  const router = useRouter();
  const createMutation = useCreateBlog();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm({
    resolver: zodResolver(blogSchema),
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
        router.push("/admin/blogs");
      },
    });
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600">
                Create Blog
            </h1>
            <p className="text-muted-foreground text-sm">
                Write and publish a high-performing SEO blog 🚀
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
            <h2 className="text-lg font-semibold flex items-center gap-2">📝 Blog Details</h2>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <FieldContent>
                  <Input
                    id="title"
                    placeholder="Enter blog title"
                    {...register("title")}
                  />
                  <FieldError errors={[errors.title]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="slug">Slug</FieldLabel>
                <FieldContent>
                  <Input
                    id="slug"
                    placeholder="seo-best-practices-2025"
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
                    placeholder="Short SEO-friendly summary"
                    {...register("short_description")}
                    className="min-h-[100px]"
                  />
                  <FieldError errors={[errors.short_description]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="content">Blog Content (Rich Text)</FieldLabel>
                <FieldContent>
                  <RichTextEditor
                    value={watch("content") || ""}
                    onChange={(val: string) => setValue("content", val, { shouldValidate: true })}
                    placeholder="Write your blog content..."
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
                    placeholder="Meta title for Google (fallback: Title)"
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
          {/* Featured Image */}
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
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-rose-500/5 border border-orange-500/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">💡 SEO Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex gap-2"><span>•</span> <span>Include keywords in the title and slug.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Keep the meta description under 160 characters.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Describe the image accurately for Accessibility.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Use headers (H2, H3) within your blog content.</span></li>
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
