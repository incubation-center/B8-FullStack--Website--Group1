import UnauthorizeComponent from "@/components/unauthorized/UnauthorizeComponent";
import Navbar from "../components/navbar/Navbar";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <UnauthorizeComponent />
    </main>
  );
}
