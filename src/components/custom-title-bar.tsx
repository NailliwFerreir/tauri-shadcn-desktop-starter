import { Button } from "./ui/button";
import { XIcon, Minimize2 } from "lucide-react";
import { appWindow } from "@tauri-apps/api/window";

export function CustomTitleBar() {
  const close = () => {
    appWindow.close();
  };

  const minimize = () => {
    appWindow.minimize();
  };

  return (
    <div className="w-screen bg-background px-1 pb-1 rounded-t-sm fixed flex justify-start items-center gap-2  border-b  border-foreground/5 ">
      <Button
        variant={"ghost"}
        size={"icon"}
        className="group rounded-full w-6 h-6 p-0 hover:bg-red-700 hover:bg-opacity-15"
        onClick={close}
      >
        <XIcon className="w-3 h-3 text-muted-foreground group-hover:text-red-700" />
      </Button>

      <Button
        variant={"ghost"}
        size={"icon"}
        className="group rounded-full w-6 h-6 p-0 hover:bg-blue-700 hover:bg-opacity-15"
        onClick={minimize}
      >
        <Minimize2 className="w-3 h-3 text-muted-foreground group-hover:text-blue-700" />
      </Button>
      <div
        className="flex-grow h-6 bg-background"
        data-tauri-drag-region="true"
      />
    </div>
  );
}
