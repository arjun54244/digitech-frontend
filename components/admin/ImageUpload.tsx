"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Upload, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
    setValue: any;
    defaultValue?: string | null;
    fieldName?: string;
}

function ImageUpload({ setValue, defaultValue, fieldName = "file" }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(defaultValue || null);

    const { setNodeRef, isOver } = useDroppable({
        id: "image-dropzone",
    });

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result as string);
            // Save the actual File object for FormData submission
            setValue(fieldName, file, { shouldValidate: true });
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = (e.target as HTMLInputElement).files?.[0] || e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    };

    return (
        <div className="space-y-4">
            <Label className="text-base font-semibold">🖼️ Featured Image</Label>
            <div
                ref={setNodeRef}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className={`group relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 min-h-[200px] flex flex-col items-center justify-center bg-card/30 backdrop-blur-sm
          ${isOver ? "border-orange-500 bg-orange-50/50 dark:bg-orange-950/10" : "border-border/60 hover:border-orange-500/50 hover:bg-muted/50"}`}
            >
                <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer z-20"
                    id="fileUpload"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFile(file);
                    }}
                />

                {preview ? (
                    <div className="absolute inset-0 w-full h-full p-2">
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner bg-muted">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Button type="button" variant="secondary" size="sm" className="pointer-events-none">
                                    <Upload className="w-4 h-4 mr-2" /> Change Image
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:scale-110 duration-300">
                           <Plus className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">Upload Featured Image</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Drag & drop or click to browse
                            </p>
                        </div>
                    </div>
                )}
            </div>
            
            {preview && (
              <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-medium">
                Click or drag another image to replace
              </p>
            )}
        </div>
    );
}

// Minimal Label component if not imported
function Label({ children, className }: { children: React.ReactNode, className?: string }) {
    return <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>{children}</label>
}

export default ImageUpload;