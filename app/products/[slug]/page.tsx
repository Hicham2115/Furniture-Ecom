import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { products } from "@/data/furniture-products";

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) notFound();

  return <ProductDetailPage product={product} />;
}
