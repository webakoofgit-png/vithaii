import type { CSSProperties } from "react";

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  crop?: { x: number; y: number; width: number; height: number };
};

/** Screenshots remain untouched; CSS displays only the supplied photographic region.
 * Replace an asset with { src, width, height } when original photography is available.
 */
export function ReferenceImage({ asset, alt, className = "", eager = false }: {
  asset: ImageAsset;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const crop = asset.crop;
  const style: CSSProperties = crop ? {
    aspectRatio: `${crop.width} / ${crop.height}`,
  } : { aspectRatio: `${asset.width} / ${asset.height}` };
  const imageStyle: CSSProperties | undefined = crop ? {
    width: `${asset.width / crop.width * 100}%`,
    maxWidth: "none",
    height: "auto",
    left: `${-crop.x / crop.width * 100}%`,
    top: `${-crop.y / crop.height * 100}%`,
  } : undefined;

  return <div className={`reference-image ${className}`} style={style}>
    <img src={asset.src} alt={alt} width={asset.width} height={asset.height}
      loading={eager ? "eager" : "lazy"} decoding="async" style={imageStyle} />
  </div>;
}
