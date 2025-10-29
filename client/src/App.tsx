import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/Landing";
import Timeline from "@/pages/Timeline";
import ProjectKickoff from "@/pages/ProjectKickoff";
import ConceptDesign from "@/pages/ConceptDesign";
import VisualBuild from "@/pages/VisualBuild";
import ProjectTemplates from "@/pages/ProjectTemplates";
import LaunchDay from "@/pages/LaunchDay";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Auth from "@/pages/Auth";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/project-kickoff" component={ProjectKickoff} />
      <Route path="/concept-design" component={ConceptDesign} />
      <Route path="/visual-build" component={VisualBuild} />
      <Route path="/project-templates" component={ProjectTemplates} />
      <Route path="/launch-day" component={LaunchDay} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/auth" component={Auth} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;