"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

function ImageUpload({ setValue }: any) {
    const [preview, setPreview] = useState<string | null>(null);

    const { setNodeRef, isOver } = useDroppable({
        id: "image-dropzone",
    });

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            setPreview(result);

            // 👇 set form value (you can replace with uploaded URL later)
            setValue("image_url", result);
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    };

    return (
        <div className="space-y-4">
            <div
                ref={setNodeRef}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition 
          ${isOver ? "border-green-500 bg-green-50" : "border-muted"}`}
            >
                <p className="text-sm text-muted-foreground">
                    Drag & drop image here or click to upload
                </p>

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="fileUpload"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFile(file);
                    }}
                />

                <label
                    htmlFor="fileUpload"
                    className="inline-block mt-3 px-4 py-2 text-sm bg-primary text-white rounded-lg cursor-pointer"
                >
                    Upload Image
                </label>
            </div>

            {preview && (
                <div className="rounded-xl overflow-hidden border">
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-48 object-contain bg-muted"
                    />
                </div>
            )}
        </div>
    );
}

export default ImageUpload;