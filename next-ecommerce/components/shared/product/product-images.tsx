"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300]
        object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-yellow-600",
              current === index && "border-yellow-500"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
