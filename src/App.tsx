import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import useScrollToTop from "@/hooks/use-scroll-to-top";
import Index from "./pages/Index";
import Listings from "./pages/Listings";
import Agents from "./pages/Agents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/agents" element={<Agents />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setIsContentReady(true), 100);
  };

  // Simulate initial load time (in real app, this could check for data fetching, etc.)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        // Auto-complete loading after 2 seconds maximum
        handleLoadingComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

        <div
          className={`transition-all duration-500 ease-out ${
            isContentReady
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
