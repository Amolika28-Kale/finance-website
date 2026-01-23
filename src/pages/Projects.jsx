import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Image as ImageIcon } from "lucide-react";
import { projectsData } from "../data/projectsData";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 },
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    const matchesFilter =
      filter === "All" || p.division === filter;

    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const formatUnits = (units) => {
    if (!units) return null;
    return Object.entries(units)
      .map(([key, value]) => `${value} ${key}`)
      .join(", ");
  };

  return (
    <main className="px-4 sm:px-6 py-28 max-w-7xl mx-auto">

      {/* ================= HEADER ================= */}
      <motion.div {...fadeUp} className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-black mb-4">
          Our <span className="text-brandGold">Projects</span>
        </h1>
        <p className="text-brandBlue/70 max-w-3xl mx-auto">
          Residential, commercial, plotting & township developments
          delivered across Maharashtra since 1995.
        </p>
      </motion.div>

      {/* ================= FILTERS ================= */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-between">

        {/* Search */}
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

        {/* Filters */}
        <div className="flex gap-3">
          {["All", "Plotting", "Construction", "Other"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full border font-semibold transition ${
                filter === f
                  ? "bg-brandGold text-white"
                  : "hover:bg-brandGold/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              {...fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* COVER IMAGE */}
              <img
                src={
                  project.media?.images?.[0] ||
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                }
                alt={project.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">
                  {project.name}
                </h3>

                <p className="text-sm text-brandBlue/70 mb-3">
                  {project.division}
                </p>

                <p className="text-sm mb-1">
                  <strong>Status:</strong> {project.status}
                </p>

                {project.areaSqFt && (
                  <p className="text-sm mb-1">
                    <strong>Area:</strong>{" "}
                    {project.areaSqFt.toLocaleString()} sq.ft
                  </p>
                )}

                {project.units && (
                  <p className="text-sm mb-1">
                    <strong>Units:</strong>{" "}
                    {formatUnits(project.units)}
                  </p>
                )}

                {/* ACTIONS */}
                <div className="flex gap-3 mt-6 flex-wrap">
                  {project.media?.images?.length > 0 && (
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-brandBlue text-white"
                    >
                      <ImageIcon size={16} /> Gallery
                    </button>
                  )}

                  {project.media?.brochure && (
                    <a
                      href={project.media.brochure}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border"
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

      {/* ================= GALLERY MODAL ================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-6">
                {activeProject.name}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeProject.media.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="rounded-xl object-cover h-48 w-full"
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="mt-8 px-6 py-2 rounded-full bg-brandGold text-white font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
