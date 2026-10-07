import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReferenceImage } from "./ReferenceImage";
import { images } from "./assets";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-label"><span aria-hidden="true" />{children}</p>
  );
}

export function ArrowLink({
  children,
  href,
  tone = "maroon",
  className = "",
}: {
  children: ReactNode;
  href: string;
  tone?: "gold" | "maroon" | "light";
  className?: string;
}) {
  return (
    <Button asChild variant="ghost" className={`arrow-link arrow-link-${tone} ${className}`}>
      <a href={href}>
        {children}<ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand-mark${light ? " brand-mark-light" : ""}`} aria-label="Vittahii home">
      <ReferenceImage asset={images.logo} alt="Vittahii" eager className="brand-logo" />
    </a>
  );
}
