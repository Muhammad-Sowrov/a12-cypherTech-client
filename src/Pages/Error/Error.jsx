const Error = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-5xl font-bold text-red-600">404</div>
        <div className="text-2xl font-semibold text-gray-800">
          Page Not Found
        </div>
        <div className="text-lg text-gray-600 mb-5">
          The page you are looking for does not exist.
        </div>
        <a
          href="/"
          className="btn btn-ghost outline w-40 text-black hover:bg-green-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;
