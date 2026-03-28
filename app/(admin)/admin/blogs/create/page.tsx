"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CreateBlogPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold">Add New Blog</h1>

      <Card className="p-6 space-y-4">
        <div>
          <Label>Title</Label>
          <Input placeholder="Enter blog title" />
        </div>

        <div>
          <Label>Slug</Label>
          <Input placeholder="seo-best-practices-2025" />
        </div>

        <div>
          <Label>Short Description</Label>
          <Textarea placeholder="Short SEO-friendly summary" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Featured Image</Label>
            <Input type="file" />
          </div>
          <div>
            <Label>Image Alt Text</Label>
            <Input placeholder="SEO optimized image alt text" />
          </div>
        </div>

        <div>
          <Label>Blog Content</Label>
          <Textarea
            placeholder="Rich text editor will go here"
            className="min-h-[200px]"
          />
        </div>
      </Card>

      {/* SEO Section */}
      <Card className="p-6 space-y-4">
        <h2 className="font-semibold text-lg">SEO Meta Tags</h2>

        <div>
          <Label>Meta Title</Label>
          <Input placeholder="Meta title for Google" />
        </div>

        <div>
          <Label>Meta Description</Label>
          <Textarea placeholder="Meta description (150–160 chars)" />
        </div>

        <div>
          <Label>Meta Keywords</Label>
          <Input placeholder="seo, marketing, google" />
        </div>

        <div>
          <Label>Canonical URL</Label>
          <Input placeholder="https://example.com/blog/slug" />
        </div>
      </Card>

      <Button className="w-full">Publish Blog</Button>
    </div>
  );
}
