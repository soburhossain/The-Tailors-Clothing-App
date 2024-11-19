import { useNavigate } from "react-router-dom";
export default function NavButton({ children, to }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
      className="hover:text-yellow-500 transition-all duration-300"
    >
      {children}
    </button>
  );
}
