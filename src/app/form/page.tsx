import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    const testvar: string = "Jochem is goed in code";
    return (

    <div className="h-96 w-96 bg-amber-300">
      <Button>
        {testvar}
      </Button>
    </div>
  );
}