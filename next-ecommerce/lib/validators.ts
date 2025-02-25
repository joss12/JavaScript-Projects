import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
.string()
.refine((value) =>
  /^\d+(\.\d{2})?/.test(formatNumberWithDecimal(Number(value))),
'Price must have exactly two decimal places'
)

//Schema for inserting product
export const insertProductSchema = z.object({
  name: z.string().min(4, "Name must be at least 3 characters"),
  slug: z.string().min(4, "Slug must be at least 3 characters"),
  category: z.string().min(4, "Slug must be at least 3 characters"),
  brand: z.string().min(4, "brand must be at least 3 characters"),
  description: z.string().min(4, "description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have least on image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
