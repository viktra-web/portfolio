import type { ProductImage } from "@/lib/product";

/** Static capture with its WebP version, already sized (no next/image: nothing to resize). */
export default function Picture({
  image,
  eager = false,
  className,
}: {
  image: ProductImage;
  eager?: boolean;
  className?: string;
}) {
  return (
    <picture className={className}>
      {image.webp ? <source srcSet={image.webp} type="image/webp" /> : null}
      {/* eslint-disable-next-line @next/next/no-img-element -- static capture, sized */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}
