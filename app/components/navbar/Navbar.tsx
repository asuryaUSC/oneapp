// Navbar.tsx
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search"; 
import Button from "./Button";
import ProfileIcon from "./ProfileIcon";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b border-gray-200">
          <Container>
            <div className="flex flex-row items-center justify-between">
              <Logo />
              <Search />
              <div className="flex space-x-4"> {/* Adjust spacing between buttons */}
                <Button>Lease Your Property</Button>
                <Button className="ml-2">Apply to Properties</Button>
              </div>
              <ProfileIcon />
            </div>
          </Container>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
