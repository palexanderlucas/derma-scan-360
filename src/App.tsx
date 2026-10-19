import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BookingInfoDialog } from "@/components/BookingInfoDialog";
import { Suspense } from "react";
import Index from "./pages/Index";
import { locations, locationPath } from "@/lib/locations";
import { lazyWithRetry } from "@/lib/lazyWithRetry";

const Corporate = lazyWithRetry(() => import("./pages/Corporate"));
const Privacy = lazyWithRetry(() => import("./pages/Privacy"));
const Imprint = lazyWithRetry(() => import("./pages/Imprint"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const City = lazyWithRetry(() => import("./pages/City").then((m) => ({ default: m.City })));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <BookingInfoDialog />
        <div className="overflow-x-hidden">
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {locations.map((location) => <Route key={location.slug} path={locationPath(location)} element={<City location={location} />} />)}
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="/impressum" element={<Imprint />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
