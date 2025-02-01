"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { File, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function InstallSoftware() {
  const searchParams = useSearchParams();
  const soft = searchParams.get("soft") || "";
  const [fileSelected, setFileSelected] = useState(false);
  const router = useRouter();

  const handleFileSelect = (event) => {
    if (event.target.files.length > 0) {
      setFileSelected(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-green-100 p-6">
      <div className="sadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Choose Location
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This will be the location of your Minecraft server.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          You have selected <span className="font-semibold text-green-600">{soft}</span> as your server software.
        </p>
        <input
          type="file"
          onChange={handleFileSelect}
          className="hidden"
          id="fileInput"
        />
        <label htmlFor="fileInput" className="cursor-pointer w-full">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-3 h-16 text-lg font-semibold px-6 bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-800 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg w-full"
          >
            <File className="w-6 h-6 text-gray-500" />
            Select File
          </Button>
        </label>
        <Button
          variant="outline"
          className={`flex items-center justify-center gap-3 h-16 text-lg font-semibold px-6 bg-white border-2 text-gray-800 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg mt-4 w-full ${fileSelected ? "hover:bg-blue-50 border-blue-200 hover:border-blue-400 hover:text-blue-600" : "border-gray-300 text-gray-400 cursor-not-allowed"}`}
          disabled={!fileSelected}
          onClick={() => router.push(`/onboarding/setup?soft=${soft}`)}
        >
          <CheckCircle className="w-6 h-6" />
          Next
        </Button>
      </div>
        {/* Back Button */}
        <div className="mt-6">
        <Link href="/onboarding" passHref>
          <Button variant="outline" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border-gray-300 hover:bg-gray-100 rounded-md">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}