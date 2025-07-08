import { Link } from "react-router-dom";

const LogoContainer = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/assets/svg/logo1.png"
        alt="Logo"
        className="h-14 w-auto sm:h-10 max-w-[180px] object-contain"
      />
      <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
        AI Mentor
      </span>
    </Link>
  );
};

export default LogoContainer;
