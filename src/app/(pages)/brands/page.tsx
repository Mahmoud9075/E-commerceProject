import React from "react";

interface PageProps {
  params: { brandId: string };
}

export default function Page({ params }: PageProps) {
  const { brandId } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Brand Details</h1>
      <p className="text-gray-600 text-lg">Brand ID: {brandId}</p>
    </div>
  );
}
