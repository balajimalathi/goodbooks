"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        "duration-700 ease-in-out",
        isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
      )}
      onLoad={() => setLoading(false)}
    />
  );
}
