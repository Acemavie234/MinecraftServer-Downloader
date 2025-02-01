import { Button } from "@/components/ui/button";
import { FileText, Fish, Zap, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MinecraftServers() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-green-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Select the software to initialize</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Button
          variant="outline"
          className="flex items-center justify-between h-16 text-lg font-semibold px-6 bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 text-gray-800 hover:text-blue-600 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-7 h-7 text-blue-500" />
            <Link href="/onboarding/install?soft=paper">PaperMC</Link>
          </div>
          <ArrowRight className="w-6 h-6 text-blue-400" />
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-between h-16 text-lg font-semibold px-6 bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 text-gray-800 hover:text-purple-600 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <Zap className="w-7 h-7 text-purple-500" />
            <Link href="/onboarding/install?soft=purpur">PurpurMC</Link>
          </div>
          <ArrowRight className="w-6 h-6 text-purple-400" />
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-between h-16 text-lg font-semibold px-6 bg-white hover:bg-yellow-50 border-2 border-yellow-200 hover:border-yellow-400 text-gray-800 hover:text-yellow-600 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <Fish className="w-7 h-7 text-yellow-500" />
            <Link href="/onboarding/install?soft=pufferfish">Pufferfish</Link>
          </div>
          <ArrowRight className="w-6 h-6 text-yellow-400" />
        </Button>
      </div>
      
      {/* Back Button */}
      <div className="mt-6">
        <Link href="/" passHref>
          <Button variant="outline" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border-gray-300 hover:bg-gray-100 rounded-md">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}