import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4 text-gray-400">OOPs! Page Not Found.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition hover:shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};
