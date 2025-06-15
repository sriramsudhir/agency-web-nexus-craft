
import { motion } from "framer-motion";
import { ArrowLeft, Database } from "lucide-react";
import { Link } from "react-router-dom";
import LeadsPreview from "@/components/ui/leads-preview";

const AdminLeads = () => {
  return (
    <div className="min-h-screen bg-[#0a0613] text-white">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
        }}
      />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/"
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-light">
                Leads <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-white/60">Manage your customer inquiries and leads</p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 glass-effect p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#9b87f5]" />
              <h2 className="text-xl font-semibold">Backend Integration Required</h2>
            </div>
            <p className="text-white/70 mb-4">
              To view real leads data, you need to connect your project to Supabase. 
              The current data shown below is mock data for demonstration purposes.
            </p>
            <p className="text-white/60 text-sm">
              Click the green Supabase button in the top right to set up your backend and start collecting real leads.
            </p>
          </motion.div>

          <LeadsPreview />
        </div>
      </div>
    </div>
  );
};

export default AdminLeads;
