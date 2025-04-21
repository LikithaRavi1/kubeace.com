import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Custom404 from "@/pages/custom-404";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Solutions from "@/pages/Solutions";
import SolutionDetail from "@/pages/SolutionDetail";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import CaseStudy from "@/pages/CaseStudy";
import WhitePapers from "@/pages/WhitePapers";
import WhitePaperDetail from "@/pages/WhitePaperDetail";
import ScrollToTop from '@/components/utils/ScrollToTop';

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/solutions/:slug" component={SolutionDetail} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/case-studies/:slug" component={CaseStudy} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/white-papers" component={WhitePapers} />
          <Route path="/white-papers/:id" component={WhitePaperDetail} />
          <Route path="/contact" component={Contact} />
          <Route component={Custom404} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
