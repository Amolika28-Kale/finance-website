import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Image as ImageIcon,
  X
} from "lucide-react";
import { projectsData } from "../data/projectsData";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.4 },
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    const matchesFilter = filter === "All" || p.division === filter;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const plottingProjects = filteredProjects.filter(
    (p) => p.division === "Plotting"
  );

  const constructionProjects = filteredProjects.filter(
    (p) => p.division !== "Plotting"
  );

  const formatUnits = (units) => {
    if (!units) return "-";
    return Object.entries(units)
      .map(([k, v]) => `${v} ${k}`)
      .join(", ");
  };

  return (
    <main className="px-4 sm:px-6 py-24 max-w-7xl mx-auto">

      {/* ================= HEADER ================= */}
      <motion.div {...fadeUp} className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-black mb-4">
          Our <span className="text-brandGold">Projects</span>
        </h1>
        <p className="text-brandBlue/70 max-w-3xl mx-auto text-sm sm:text-base">
          Landmark plotting & construction projects delivered across Maharashtra
          with trust since 1995.
        </p>
      </motion.div>

      {/* ================= FILTER BAR ================= */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur rounded-2xl p-4 mb-14 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-4 top-3.5 text-brandBlue/40" size={18} />
          <input
            type="text"
            placeholder="Search project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border focus:outline-none"
          />
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          {["All", "Plotting", "Construction", "Other"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                filter === f
                  ? "bg-brandGold text-white"
                  : "border hover:bg-brandGold/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ================= PLOTTING TABLE ================= */}
      {plottingProjects.length > 0 && (
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-6 text-brandBlue">
            Plotting Division
          </h2>

          <div className="overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[520px] text-left">
              <thead className="bg-brandBlue text-white">
                <tr>
                  <th className="px-6 py-4">S.No</th>
                  <th className="px-6 py-4">Project Name</th>
                  <th className="px-6 py-4">Area (sq.ft)</th>
                </tr>
              </thead>
              <tbody>
                {plottingProjects.map((p, i) => (
                  <tr key={p.id} className="border-b hover:bg-brandGold/5">
                    <td className="px-6 py-4 font-semibold">{i + 1}</td>
                    <td className="px-6 py-4">{p.name}</td>
                    <td className="px-6 py-4">
                      {p.areaSqFt?.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ================= CONSTRUCTION CARDS ================= */}
      {constructionProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-10 text-brandBlue">
            Construction Division
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {constructionProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  {...fadeUp}
                  whileHover={{ y: -6 }}
                  className="group bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={
                        project.media?.images?.[0] ||
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                      }
                      alt={project.name}
                      className="h-full w-full object-cover transition group-hover:scale-110"
                    />

                    {/* STATUS BADGE */}
                    <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.status}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {project.name}
                    </h3>

                    <p className="text-sm mb-4 text-brandBlue/70">
                      <strong>Units:</strong> {formatUnits(project.units)}
                    </p>

                    {/* ACTIONS */}
                    <div className="flex gap-3 flex-wrap">
                      {project.media?.images?.length > 0 && (
                        <button
                          onClick={() => setActiveProject(project)}
                          className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-brandBlue text-white hover:opacity-90"
                        >
                          <ImageIcon size={16} /> Gallery
                        </button>
                      )}

                      {project.media?.brochure && (
                        <a
                          href={project.media.brochure}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border hover:bg-brandGold/10"
                        >
                          <FileText size={16} /> Brochure
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* ================= GALLERY MODAL ================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{activeProject.name}</h3>
                <button onClick={() => setActiveProject(null)}>
                  <X />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeProject.media.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="rounded-2xl h-56 w-full object-cover"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
