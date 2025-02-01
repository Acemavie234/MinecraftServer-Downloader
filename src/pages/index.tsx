"use client"

import { motion } from "framer-motion"
import { Server, ArrowRight } from "lucide-react"
import Link from "next/Link"

export default function WelcomePage() {

 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-green-100 text-gray-800 p-4">
      <motion.div
        className="text-green-600 mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Server size={64} />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-center text-green-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Minecraft Server Quickstart
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-12 text-center max-w-2xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Set up your local Minecraft server instance in minutes. Perfect for developers and enthusiasts!
      </motion.p>
      <motion.button
        className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg flex items-center transition-all duration-300 hover:bg-green-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Link href="/onboarding">Start Server Setup</Link>
        <motion.span
          className="ml-2"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.span>
      </motion.button>
    </div>
  )
}

