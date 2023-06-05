import Navbar from "../components/navbar/Navbar";
import UnauthorizeComponent from "./unauthorized";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <UnauthorizeComponent />
    </main>
  );
}
