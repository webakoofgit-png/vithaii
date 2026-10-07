import type { ImageAsset } from "./ReferenceImage";

export const images = {
  logo: { src: "/images/drive/Vittahii%20Logo%201.png", width: 6468, height: 3650 },
  archive: { src: "/images/drive/Family%20archive.png", width: 1904, height: 2576 },
  archiveDetail: { src: "/images/drive/Historical%20dairy.png", width: 712, height: 992 },
  ghee: { src: "/images/drive/87b1328f-b3a3-44ca-b8e4-acd2be57636c.png", width: 1368, height: 1150 },
  quality: { src: "/images/drive/32e9960f-cba2-4762-94d5-6198d82f4222.png", width: 1536, height: 1024 },
  founder: { src: "/images/founder/reference.png", width: 717, height: 425, crop: { x: 40, y: 57, width: 234, height: 309 } },
  range: { src: "/images/drive/b508943b-9608-4bd4-a87a-d8a5fe111fea.png", width: 1672, height: 941 },
} satisfies Record<string, ImageAsset>;
