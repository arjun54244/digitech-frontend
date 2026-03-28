"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function EditBlogPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold">Edit Blog</h1>

      <Card className="p-6 space-y-4">
        <Input defaultValue="SEO Best Practices 2025" />
        <Input defaultValue="seo-best-practices-2025" />
        <Textarea defaultValue="Short blog description..." />
        <Textarea className="min-h-[200px]" defaultValue="Full blog content..." />
      </Card>

      <Button>Update Blog</Button>
    </div>
  );
}
