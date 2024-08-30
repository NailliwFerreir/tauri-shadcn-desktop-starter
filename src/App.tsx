import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChartGradient } from "./components/ui/chart-gradient";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";
import { CustomTitleBar } from "./components/custom-title-bar";

function App() {
  const [name, setName] = useState("");
  const { toast } = useToast();

  function greet() {
    if (!name) {
      return toast({
        title: "Error",
        description: "Please enter your name",
      });
    }

    return toast({
      title: `Hello, ${name}!`,
      description: "You've been greeted from Rust!",
      duration: 2000,
    });
  }

  return (
    <div className="min-h-screen w-full overflow-hidden select-none p-1 rounded-sm bg-background">
      <CustomTitleBar />
      <div className="h-full w-full p-4 pt-10">
        <header className="w-full space-y-2 flex justify-between items-center">
          <h1>Welcome to Tauri React!</h1>
          <ModeToggle />
        </header>
        <main className="space-y-2">
          <Input
            className="mt-2"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={greet}>Greet</Button>
        </main>
        <div className="lg:w-1/3 md:w-2/3 w-full mt-3">
          <ChartGradient />
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
