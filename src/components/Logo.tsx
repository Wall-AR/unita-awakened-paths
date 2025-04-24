
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 hover-glow">
      <div className="relative w-8 h-8">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-primary animate-pulse-glow"
        >
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="20" r="8" />
          <circle cx="50" cy="80" r="8" />
          <circle cx="20" cy="50" r="8" />
          <circle cx="80" cy="50" r="8" />
          <circle cx="29" cy="29" r="5" />
          <circle cx="71" cy="29" r="5" />
          <circle cx="29" cy="71" r="5" />
          <circle cx="71" cy="71" r="5" />
        </svg>
      </div>
      <span className="font-heading text-xl tracking-wider">UNITAS</span>
    </Link>
  );
};

export default Logo;
