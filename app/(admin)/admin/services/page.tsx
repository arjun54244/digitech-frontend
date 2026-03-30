"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useServices, useDeleteService } from "@/hooks/use-services";
import { useState } from "react";
import { format } from "date-fns";
import { Loader2, Pencil, Trash2, Eye } from "lucide-react";
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
} from "@/components/ui/alert-dialog";

export default function ServicesListPage() {
  const { data: services, isLoading } = useServices();
  const deleteMutation = useDeleteService();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services?.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">🛠 Services</h1>
          <p className="text-sm text-muted-foreground">
            Manage your service offerings
          </p>
        </div>

        <Link href="/admin/services/create">
          <Button className="shadow-md">
            + Add Service
          </Button>
        </Link>
      </div>

      {/* Search + Filter */}
      <Card className="p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between rounded-2xl border border-border/50 shadow-sm">
        <Input
          placeholder="Search services..."
          className="md:max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Card>

      {/* Table */}
      <Card className="overflow-hidden rounded-2xl border border-border/50 shadow-md">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex items-center justify-center p-12">
              <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
            </div>
          ) : filteredServices && filteredServices.length > 0 ? (
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left text-muted-foreground">
                  <th className="p-4">Title</th>
                  <th>ID/Slug</th>
                  <th>Created</th>
                  <th className="text-right pr-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service.id} className="border-t hover:bg-muted/40 transition">
                    <td className="p-4 font-medium">
                      {service.title}
                    </td>
                    <td className="text-xs font-mono text-muted-foreground">
                      {service.slug}
                    </td>
                    <td className="text-muted-foreground">
                      {format(new Date(service.created_at), "dd MMM yyyy")}
                    </td>
                    <td className="text-right pr-4 space-x-2">
                      <Link href={`/services/${service.slug}`} target="_blank">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4 mr-1" /> View
                        </Button>
                      </Link>

                      <Link href={`/admin/services/${service.id}/edit`}>
                        <Button size="sm">
                          <Pencil className="w-4 h-4 mr-1" /> Edit
                        </Button>
                      </Link>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the
                              service "{service.title}".
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteMutation.mutate(service.id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-10 text-center">
              <h3 className="text-lg font-semibold">No services found</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Start by adding your first service
              </p>
              <Link href="/admin/services/create">
                <Button>Add Service</Button>
              </Link>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
