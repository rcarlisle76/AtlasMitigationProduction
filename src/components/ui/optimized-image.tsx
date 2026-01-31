import Image from "next/image"
import { type ComponentProps } from "react"

interface OptimizedImageProps extends Omit<ComponentProps<typeof Image>, "src"> {
  src: string
  alt: string
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}

/**
 * Optimized Image wrapper component that uses Next.js Image optimization
 * Provides sensible defaults for lazy loading, blur placeholders, and responsive sizing
 */
export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  fill = false,
  sizes,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      fill={fill}
      sizes={
        sizes ||
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      }
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
      {...props}
    />
  )
}
