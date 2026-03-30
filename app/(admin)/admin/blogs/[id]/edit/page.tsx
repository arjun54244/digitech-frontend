"use client";

import { useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowLeft } from "lucide-react";
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
import { useBlog, useUpdateBlog } from "@/hooks/use-blogs";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { data: blog, isLoading } = useBlog(id);
  const updateMutation = useUpdateBlog(id);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      short_description: "",
      content: "",
      image_url: "",
      image_alt: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: [],
    },
  });

  // Pre-fill form when data is loaded
  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title || "",
        slug: blog.slug || "",
        short_description: blog.short_description || "",
        content: blog.content || "",
        image_url: blog.image_url || "",
        image_alt: blog.image_alt || "",
        meta_title: blog.meta_title || "",
        meta_description: blog.meta_description || "",
        meta_keywords: blog.meta_keywords || [],
      });
      setPreview(blog.image_url || null);
    }
  }, [blog, reset]);

  const imageUrl = watch("image_url");

  // Handle preview for image URL changes
  useEffect(() => {
    if (imageUrl) {
      setPreview(imageUrl);
    } else {
      setPreview(null);
    }
  }, [imageUrl]);

  async function onSubmit(values: BlogSchema) {
    updateMutation.mutate(values, {
      onSuccess: () => {
        router.push("/admin/blogs");
      },
    });
  }

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Edit Blog</h1>
            <p className="text-muted-foreground text-sm">
              Update "{blog?.title}" and optimize for SEO 🚀
            </p>
          </div>
        </div>

        {/* Desktop Update Button */}
        <Button
          onClick={handleSubmit((values) => onSubmit(values))}
          disabled={updateMutation.isPending}
          className="hidden md:flex shadow-lg"
        >
          {updateMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Update Blog 🚀
        </Button>
      </div>

      <form onSubmit={handleSubmit((values) => onSubmit(values))} className="grid lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <Card className="p-6 space-y-5 rounded-2xl shadow-md border border-border/50">
            <h2 className="text-lg font-semibold">📝 Blog Details</h2>

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
          <Card className="p-6 space-y-5 rounded-2xl shadow-md border border-border/50">
            <h2 className="text-lg font-semibold">🚀 SEO Settings</h2>

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
                    defaultValue={blog?.meta_keywords?.join(", ")}
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
          <ImageUpload setValue={setValue} />

          {/* Quick Info */}
          <Card className="p-6 rounded-2xl bg-muted/20 border border-border/50">
            <h3 className="font-semibold mb-2">📊 Content Stats</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Created: {blog && new Date(blog.created_at).toLocaleDateString()}</li>
              <li>• Last Updated: {blog && new Date(blog.updated_at).toLocaleDateString()}</li>
              <li>• ID: {id}</li>
            </ul>
          </Card>

          {/* Mobile Update Button */}
          <Button
            type="submit"
            disabled={updateMutation.isPending}
            className="w-full md:hidden"
          >
            {updateMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update Blog 🚀
          </Button>
        </div>
      </form>
    </div>
  );
}

