import { Component, type ErrorInfo, type ReactNode } from "react";
import { HeaderHero } from "@/components/vittahii/HeaderHero";
import { Legacy } from "@/components/vittahii/Legacy";
import { Timeline } from "@/components/vittahii/Timeline";
import { Ghee } from "@/components/vittahii/Ghee";
import { Why } from "@/components/vittahii/Why";
import { Process } from "@/components/vittahii/Process";
import { Quality } from "@/components/vittahii/Quality";
import { BrandStory } from "@/components/vittahii/BrandStory";
import { Founder } from "@/components/vittahii/Founder";
import { ProductRange } from "@/components/vittahii/ProductRange";
import { Contact } from "@/components/vittahii/Contact";
import { Footer } from "@/components/vittahii/Footer";
import { reportLovableError } from "@/lib/lovable-error-reporting";

type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    reportLovableError(error, { boundary: "react_error_boundary" });
  }

  override render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <div>
            <h1>This page didn&apos;t load</h1>
            <p>Something went wrong. Please try refreshing the page.</p>
            <button type="button" onClick={() => window.location.reload()}>
              Try again
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export function App() {
  return (
    <ErrorBoundary>
      <main className="vittahii-page">
        <HeaderHero />
        <Legacy />
        <Timeline />
        <Ghee />
        <Why />
        <Process />
        <Quality />
        <BrandStory />
        <Founder />
        <ProductRange />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
