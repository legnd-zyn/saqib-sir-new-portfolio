"use client"; // Error components must be Client Components

export default function Error({ error, reset }) {
  console.log(error?.message || error);
  return (
    <div className="text-center text-gray-800 py-10">
      <p className="text-9xl font-bold">500</p>
      <p className="font-bold text-2xl">
        Something wen&apos;t wrong on our servers!
      </p>
      <button
        onClick={() => reset()}
        className="mt-2 w-max px-6 lg:px-7 text-lg font-bold text-gray-700 py-1 pt-2 border-2 border-gray-400 rounded-md active:scale-95 transition-all animated-btn hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0"
      >
        Retry
      </button>
      <p className="text-sm">If it did not work then please refresh manually</p>
    </div>
  );
}
