"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
