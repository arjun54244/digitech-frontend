import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function BlogListPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link href="/dashboard/blogs/create">
          <Button>Add Blog</Button>
        </Link>
      </div>

      <Card className="p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>Title</th>
              <th>Status</th>
              <th>Created</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>SEO Best Practices 2025</td>
              <td>
                <span className="text-green-600 font-medium">Published</span>
              </td>
              <td>12 Jan 2026</td>
              <td className="text-right space-x-2">
                <Link href="/dashboard/blogs/1">
                  <Button size="sm" variant="outline">View</Button>
                </Link>
                <Link href="/dashboard/blogs/1/edit">
                  <Button size="sm">Edit</Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
