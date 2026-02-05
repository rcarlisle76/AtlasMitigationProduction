"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage?: string
  afterImage?: string
  beforeLabel?: string
  afterLabel?: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before restoration",
  afterAlt = "After restoration",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className={cn("relative aspect-video w-full overflow-hidden", className)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        {afterImage ? (
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
            <div className="text-center">
              <div className="text-6xl font-bold text-green-600">After</div>
              <div className="mt-2 text-sm text-green-700">Restored Property</div>
            </div>
          </div>
        )}
      </div>

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0">
          {beforeImage ? (
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-600">Before</div>
                <div className="mt-2 text-sm text-red-700">Damaged Property</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
            <div className="flex gap-1">
              <div className="h-4 w-0.5 bg-gray-400" />
              <div className="h-4 w-0.5 bg-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute top-4 left-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute top-4 right-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
        {afterLabel}
      </div>

      {/* Drag Instruction (shown briefly on load) */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-sm">
        Drag slider to compare
      </div>
    </div>
  )
}
