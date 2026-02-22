"use client"

import dynamic from "next/dynamic"
import { useState, Component, type ReactNode } from "react"
import { Maximize2, X, Move, RefreshCw, AlertTriangle } from "lucide-react"

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center bg-muted">
        <div className="text-center text-muted-foreground">
          <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-4 border-atlas-primary border-t-transparent" />
          <p className="text-sm">Loading 360° viewer...</p>
        </div>
      </div>
    ),
  }
)

// Error boundary to catch react-photo-sphere-viewer render errors
class PanoramaErrorBoundary extends Component<
  { children: ReactNode; onRetry: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; onRetry: () => void }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full items-center justify-center bg-muted">
          <div className="text-center text-muted-foreground px-4">
            <AlertTriangle className="mx-auto mb-3 h-10 w-10 text-amber-500" />
            <p className="text-sm font-medium">Unable to load the 360° panorama</p>
            <p className="mt-1 text-xs">The image may still be loading. Please try again.</p>
            <button
              onClick={() => {
                this.setState({ hasError: false })
                this.props.onRetry()
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-atlas-primary px-4 py-2 text-sm font-medium text-white hover:bg-atlas-primary/90 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Retry
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

interface PanoramaViewerProps {
  src: string
  caption?: string
  className?: string
}

export function PanoramaViewer({ src, caption, className = "" }: PanoramaViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [viewerKey, setViewerKey] = useState(0)

  const handleRetry = () => {
    setViewerKey((k) => k + 1)
  }

  const viewer = (
    <PanoramaErrorBoundary key={viewerKey} onRetry={handleRetry}>
      <ReactPhotoSphereViewer
        src={src}
        height="100%"
        width="100%"
        containerClass="panorama-container"
        navbar={["zoom", "fullscreen"]}
        defaultZoomLvl={50}
        touchmoveTwoFingers={false}
        mousewheelCtrlKey={false}
      />
    </PanoramaErrorBoundary>
  )

  return (
    <>
      <div className={`group relative overflow-hidden rounded-lg ${className}`}>
        {/* Inline viewer */}
        <div className="aspect-video">{viewer}</div>

        {/* Drag hint overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 transition-opacity duration-500 group-hover:opacity-0 [.panorama-loaded_&]:opacity-0">
          <div className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
            <Move className="h-4 w-4" />
            Click & drag to explore
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
            <p className="text-sm font-medium text-white">{caption}</p>
          </div>
        )}

        {/* Fullscreen toggle */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute right-3 top-3 rounded-lg bg-black/60 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
          aria-label="View fullscreen"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black">
          <div className="flex items-center justify-between p-4">
            {caption && (
              <h3 className="text-lg font-semibold text-white">{caption}</h3>
            )}
            <button
              onClick={() => setIsFullscreen(false)}
              className="ml-auto rounded-lg p-2 text-white hover:bg-white/10"
              aria-label="Close fullscreen"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1">
            <PanoramaErrorBoundary key={`fs-${viewerKey}`} onRetry={handleRetry}>
              <ReactPhotoSphereViewer
                src={src}
                height="100%"
                width="100%"
                containerClass="panorama-container-fullscreen"
                navbar={["zoom", "fullscreen"]}
                defaultZoomLvl={50}
                touchmoveTwoFingers={false}
                mousewheelCtrlKey={false}
              />
            </PanoramaErrorBoundary>
          </div>
        </div>
      )}
    </>
  )
}
