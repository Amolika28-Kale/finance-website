import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  Search, 
  FileText, 
  Image as ImageIcon, 
  X, 
  MapPin, 
  Maximize2, 
  ChevronRight, 
  ArrowRight 
} from "lucide-react";
import { projectsData } from "../data/projectsData";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    const matchesFilter = filter === "All" || p.division === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const plottingProjects = filteredProjects.filter((p) => p.division === "Plotting");
  const constructionProjects = filteredProjects.filter((p) => p.division !== "Plotting");

  const formatUnits = (units) => {
    if (!units) return "-";
    return Object.entries(units).map(([k, v]) => `${v} ${k}`).join(", ");
  };

  return (
    <main className="min-h-screen bg-[#FBFBFE] pb-24">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-28 pb-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandGold/10 text-brandGold text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Maximize2 size={12} /> Landmark Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Our <span className="text-brandGold">Architectural</span> Legacy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed"
          >
            Delivering trust and excellence across Maharashtra since 1995. Explore our curated selection of plotting and construction milestones.
          </motion.p>
        </div>
      </section>

      {/* ================= SMART FILTER BAR ================= */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 mb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brandGold transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search projects by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandGold/20 focus:bg-white transition-all text-sm"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {["All", "Plotting", "Construction", "Other"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all uppercase tracking-widest ${
                  filter === f
                    ? "bg-brandBlue text-white shadow-lg shadow-brandBlue/20"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-brandGold hover:text-brandGold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ================= PLOTTING SECTION ================= */}
        {plottingProjects.length > 0 && (
          <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brandGold" /> Plotting Division
              </h2>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{plottingProjects.length} Projects</span>
            </div>

            {/* Desktop Table / Mobile Cards Toggle */}
            <div className="hidden md:block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">S.No</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">Project Name</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-500 text-right">Area (sq.ft)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {plottingProjects.map((p, i) => (
                    <tr key={p.id} className="group hover:bg-brandGold/[0.02] transition-colors cursor-default">
                      <td className="px-8 py-5 font-mono text-slate-400 text-sm">{(i + 1).toString().padStart(2, '0')}</td>
                      <td className="px-8 py-5 font-bold text-slate-800 group-hover:text-brandGold transition-colors">{p.name}</td>
                      <td className="px-8 py-5 text-right font-semibold text-brandBlue">{p.areaSqFt?.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile-Only List Style */}
            <div className="grid gap-4 md:hidden">
              {plottingProjects.map((p, i) => (
                <div key={p.id} className="bg-white p-6 rounded-[1.5rem] border border-slate-200 flex justify-between items-center shadow-sm">
                  <div>
                    <p className="text-[10px] font-bold text-brandGold uppercase mb-1">Project {i+1}</p>
                    <h3 className="font-bold text-slate-900">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-brandBlue">{p.areaSqFt?.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Sq.Ft Area</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= CONSTRUCTION CARDS ================= */}
        {constructionProjects.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brandGold" /> Construction Division
              </h2>
            </div>

            <LayoutGroup>
              <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode='popLayout'>
                  {constructionProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >
                      {/* IMAGE CONTAINER */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.media?.images?.[0] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"}
                          alt={project.name}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Status Float */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-brandBlue shadow-lg">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brandGold transition-colors">
                            {project.name}
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-6">
                          <MapPin size={14} className="text-brandGold" />
                          Maharashtra, India
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-4 mb-8">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Configuration</p>
                          <p className="text-sm font-bold text-slate-700 truncate">{formatUnits(project.units)}</p>
                        </div>

                        <div className="flex gap-3">
                          
                          {project.media?.brochure && (
                            <a
                              href={project.media.brochure}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-all"
                            >
                              <FileText size={14} /> Brochure
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          </section>
        )}
      </div>

      {/* ================= MODERN MODAL ================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{activeProject.name}</h3>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Project Visuals</p>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 overflow-y-auto no-scrollbar">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                  {activeProject.media.images.map((img, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-3xl overflow-hidden group shadow-md"
                    >
                      <img src={img} alt="" className="w-full h-auto object-cover" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">© FIP Consultancy Projects Division</p>
                <Link to="/contact" className="flex items-center gap-2 text-brandGold font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Inquire about this project <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}