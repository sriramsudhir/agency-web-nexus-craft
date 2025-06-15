
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Users, TrendingUp, Calendar, Mail, Phone, MapPin, Eye, X } from "lucide-react";

// Mock data - replace with real data from Supabase
const mockLeads = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    mobile: "+91 9876543210",
    state: "Tamil Nadu",
    requirement: "E-commerce Website",
    timestamp: "2024-01-15T10:30:00Z",
    status: "new"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    mobile: "+91 8765432109",
    state: "Karnataka",
    requirement: "Mobile App Development",
    timestamp: "2024-01-14T15:45:00Z",
    status: "contacted"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@example.com",
    mobile: "+91 7654321098",
    state: "Gujarat",
    requirement: "Digital Marketing",
    timestamp: "2024-01-13T09:15:00Z",
    status: "converted"
  }
];

export default function LeadsPreview() {
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  const filteredLeads = mockLeads.filter(lead => {
    if (filter === "all") return true;
    return lead.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500";
      case "contacted": return "bg-yellow-500";
      case "converted": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          className="glass-effect p-6 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Total Leads</p>
              <p className="text-2xl font-bold text-white">{mockLeads.length}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-effect p-6 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Conversions</p>
              <p className="text-2xl font-bold text-white">
                {mockLeads.filter(l => l.status === 'converted').length}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-effect p-6 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Calendar className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-white/60 text-sm">This Week</p>
              <p className="text-2xl font-bold text-white">
                {mockLeads.filter(l => new Date(l.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        {[
          { key: "all", label: "All Leads" },
          { key: "new", label: "New" },
          { key: "contacted", label: "Contacted" },
          { key: "converted", label: "Converted" }
        ].map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => setFilter(filterOption.key)}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
              filter === filterOption.key
                ? 'bg-[#9b87f5] text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>

      {/* Leads Table */}
      <div className="glass-effect rounded-xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">Recent Leads</h3>
          <p className="text-white/60 text-sm">
            Connect to Supabase to see real-time data
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-white/70 font-medium">Name</th>
                <th className="text-left p-4 text-white/70 font-medium">Contact</th>
                <th className="text-left p-4 text-white/70 font-medium">Requirement</th>
                <th className="text-left p-4 text-white/70 font-medium">Status</th>
                <th className="text-left p-4 text-white/70 font-medium">Date</th>
                <th className="text-left p-4 text-white/70 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead, index) => (
                <motion.tr
                  key={lead.id}
                  className="border-t border-white/10 hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="p-4">
                    <div>
                      <p className="text-white font-medium">{lead.name}</p>
                      <p className="text-white/60 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {lead.state}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-white/80 text-sm flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {lead.email}
                      </p>
                      <p className="text-white/80 text-sm flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {lead.mobile}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-white/80">{lead.requirement}</span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(lead.status)}`}>
                      <div className="w-1.5 h-1.5 bg-current rounded-full" />
                      {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-white/80 text-sm">{formatDate(lead.timestamp)}</span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedLead(null)}
        >
          <motion.div
            className="bg-[#0a0613] border border-[#9b87f5]/30 rounded-2xl p-6 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Lead Details</h3>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-white/60 text-sm">Name</label>
                <p className="text-white font-medium">{selectedLead.name}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm">Email</label>
                <p className="text-white font-medium">{selectedLead.email}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm">Mobile</label>
                <p className="text-white font-medium">{selectedLead.mobile}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm">State</label>
                <p className="text-white font-medium">{selectedLead.state}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm">Requirement</label>
                <p className="text-white font-medium">{selectedLead.requirement}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm">Date</label>
                <p className="text-white font-medium">{formatDate(selectedLead.timestamp)}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
