import HomeIcon from "./HomeIcon";
import ModeToggle from "./ModeToggle";
import { AuthButtonServer } from "./AuthButtonServer";
export default function Navbar() {
  return (
    <nav className="flex justify-between md:mb-10 mb-6 ">
      <HomeIcon />
      <div className="flex justify-center items-center md:space-x-4 space-x-2">
        <ModeToggle />
        <AuthButtonServer />
      </div>
    </nav>
  );
}
