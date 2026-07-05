import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#211B24] mb-4">
          Page Not Found
        </h1>
        <p className="font-['Inter'] text-lg text-[#6B6259] mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-[#C1502E] text-white font-['Inter'] font-semibold px-6 py-3 rounded hover:bg-[#8F3A22] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/explore"
            className="inline-block border-2 border-[#C1502E] text-[#C1502E] font-['Inter'] font-semibold px-6 py-3 rounded hover:bg-[#C1502E] hover:text-white transition-colors"
          >
            Explore Arizona
          </Link>
        </div>
      </div>
    </div>
  );
}
