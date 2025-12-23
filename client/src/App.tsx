import { Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Platform from "@/pages/platform";
import Services from "@/pages/services";
import Resources from "@/pages/resources";
import About from "@/pages/about";

function Router() {
  return (
    <Switch location={useHashLocation()[0]}>
      <Route path="/" component={Home}/>
      <Route path="/platform" component={Platform}/>
      <Route path="/services" component={Services}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/about" component={About}/>
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
