import { HeaderComponent } from "@/components/home/header";
import { NavbarComponent } from "@/components/home/navbar/navbar";

export default function Home() {
  return (
   <main className="w-full h-full flex flex-col">
      <NavbarComponent/>
      <HeaderComponent/>
   </main>
  );
}