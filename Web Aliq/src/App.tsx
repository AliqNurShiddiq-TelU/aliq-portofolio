// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState } from 'react';
// import { 
//   Database, 
//   Code, 
//   Layout, 
//   Award, 
//   Briefcase, 
//   User, 
//   Mail, 
//   Linkedin, 
//   Download, 
//   ChevronRight, 
//   ExternalLink,
//   Terminal,
//   Cpu,
//   BarChart3,
//   Globe,
//   Menu,
//   X,
//   Github,
//   Instagram,
//   Video,
//   Camera,
//   Star,
//   CheckCircle2
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';

// const Section = ({ id, title, children, className = "" }: { id: string, title: string, children: React.ReactNode, className?: string }) => (
//   <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
//         <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
//         {title}
//       </h2>
//       {children}
//     </motion.div>
//   </section>
// );

// const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
//   <div className={`bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
//     {children}
//   </div>
// );

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedCert, setSelectedCert] = useState<{ title: string, url: string } | null>(null);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Creative', href: '#creative' },
//     { name: 'Achievements', href: '#achievements' },
//     { name: 'Experience', href: '#experience' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
//           <div className="font-bold text-xl tracking-tight flex items-center gap-2">
//             <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
//               <BarChart3 size={18} />
//             </div>
//             <span className="hidden sm:inline">Portfolio.</span>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href} 
//                 className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden p-2 text-zinc-600"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
//             >
//               <div className="px-6 py-4 flex flex-col gap-4">
//                 {navLinks.map((link) => (
//                   <a 
//                     key={link.name} 
//                     href={link.href} 
//                     onClick={() => setIsMenuOpen(false)}
//                     className="text-sm font-medium text-zinc-600"
//                   >
//                     {link.name}
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               Available for Opportunities
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
//               Information Systems <span className="text-emerald-600">Student.</span>
//             </h1>
//             <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
//               D3 Information Systems student at Telkom University with a strong focus on Data Analysis. 
//               Currently serving as a <span className="font-semibold text-zinc-900">Laboratorium Assistant</span>, 
//               <span className="font-semibold text-zinc-900">GenBI Awardee</span>, and <span className="font-semibold text-zinc-900">Senior Resident</span>. 
//               Passionate about turning raw data into actionable insights.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
//                 <Download size={20} />
//                 Download My CV
//               </button>
//               <button className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-xl font-semibold flex items-center gap-2 hover:border-emerald-500 hover:text-emerald-600 transition-all">
//                 <Linkedin size={20} />
//                 Connect on LinkedIn
//               </button>
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="aspect-square rounded-3xl bg-zinc-200 overflow-hidden shadow-2xl relative group">
//               <img 
//                 src="https://picsum.photos/seed/tech-student/800/800" 
//                 alt="Profile" 
//                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
//                 <p className="text-white font-medium">Aspiring Data Analyst & Tech Enthusiast</p>
//               </div>
//             </div>
//             {/* Decorative elements */}
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full -z-10 blur-2xl"></div>
//             <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-2xl"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* My Projects */}
//       <Section id="projects" title="My Projects 🚀">
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {/* Project 1: Photography */}
//           <Card className="flex flex-col p-0 overflow-hidden group">
//             <div className="grid grid-cols-2 gap-1 h-48">
//               <img src="https://picsum.photos/seed/photo1/400/300" alt="Photography 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//               <img src="https://picsum.photos/seed/photo2/400/300" alt="Photography 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//               <img src="https://picsum.photos/seed/photo3/400/300" alt="Photography 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//               <img src="https://picsum.photos/seed/photo4/400/300" alt="Photography 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//             </div>
//             <div className="p-6 flex flex-col flex-grow">
//               <h3 className="text-xl font-bold mb-2">My Photography</h3>
//               <p className="text-zinc-600 text-sm mb-6">A collection of my favorite shots. Click the button below to see the full gallery.</p>
//               <div className="mt-auto">
//                 <button className="px-4 py-2 bg-[#0088cc] text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-[#0077bb] transition-all">
//                   <Globe size={16} /> View Full Gallery
//                 </button>
//               </div>
//             </div>
//           </Card>

//           {/* Project 2: KelasKita UI/UX */}
//           <Card className="flex flex-col p-0 overflow-hidden group">
//             <div className="h-48 relative bg-[#1a1a1a]">
//               <img src="https://picsum.photos/seed/kelaskita/600/400" alt="KelasKita UI/UX" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
//               <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-900/20 backdrop-blur-[1px]">
//                 <button className="px-4 py-2 bg-[#5e35b1] text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-[#512da8] transition-all">
//                   <ExternalLink size={14} /> View Prototype
//                 </button>
//                 <button className="px-4 py-2 bg-[#37474f] text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-[#263238] transition-all">
//                   <Layout size={14} /> View on Figma
//                 </button>
//               </div>
//               <div className="absolute bottom-4 left-4">
//                 <h4 className="text-white text-2xl font-bold opacity-40">KelasKita</h4>
//               </div>
//             </div>
//             <div className="p-6 flex flex-col flex-grow">
//               <h3 className="text-xl font-bold mb-2">Mobile App KelasKita UI/UX Design</h3>
//               <p className="text-zinc-600 text-sm mb-6">A collaborative project for our UI/UX Design course. Our team designed a high-fidelity prototype for a mobile app aimed at boosting user productivity.</p>
//               <div className="mt-auto flex gap-2">
//                 <span className="px-3 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold uppercase rounded-full">Figma</span>
//                 <span className="px-3 py-1 bg-pink-100 text-pink-700 text-[10px] font-bold uppercase rounded-full">UI/UX</span>
//               </div>
//             </div>
//           </Card>

//           {/* Project 3: Portfolio Website */}
//           <Card className="flex flex-col p-0 overflow-hidden group">
//             <div className="h-48 relative bg-zinc-100 flex items-center justify-center p-4">
//               <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-zinc-200">
//                 <img src="https://picsum.photos/seed/portfolio/600/400" alt="Portfolio Website" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//               </div>
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-900/40 backdrop-blur-[2px]">
//                 <button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all">
//                   <Github size={14} /> View on GitHub
//                 </button>
//               </div>
//             </div>
//             <div className="p-6 flex flex-col flex-grow">
//               <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
//               <p className="text-zinc-600 text-sm mb-6">Developed a responsive bootcamp website as a collaborative final project for our Website Programming course.</p>
//               <div className="mt-auto flex flex-wrap gap-2">
//                 <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded">Tailwind CSS</span>
//                 <span className="px-2 py-1 bg-yellow-50 text-yellow-600 text-[10px] font-bold rounded">HTML</span>
//                 <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded">CSS</span>
//                 <span className="px-2 py-1 bg-blue-50 text-blue-400 text-[10px] font-bold rounded">JavaScript</span>
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Creative Works Section */}
//         <div id="creative" className="pt-20">
//           <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
//             <Star className="text-yellow-500" size={24} /> Creative Portfolio
//           </h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Feeds Design */}
//             <Card className="flex flex-col p-0 overflow-hidden group">
//               <div className="h-48 relative bg-zinc-100">
//                 <img src="https://picsum.photos/seed/feeds/600/400" alt="Social Media Feeds" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-900/40 backdrop-blur-[2px]">
//                   <button className="px-4 py-2 bg-pink-600 text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-pink-500 transition-all">
//                     <Instagram size={14} /> View on Instagram
//                   </button>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h4 className="font-bold mb-2">Social Media Feeds Design</h4>
//                 <p className="text-zinc-600 text-xs">Curating aesthetic and high-engagement content for various brands, focusing on visual storytelling and brand identity.</p>
//               </div>
//             </Card>

//             {/* Video Editing */}
//             <Card className="flex flex-col p-0 overflow-hidden group">
//               <div className="h-48 relative bg-zinc-100">
//                 <img src="https://picsum.photos/seed/video-edit/600/400" alt="Video Editing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-900/40 backdrop-blur-[2px]">
//                   <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-red-500 transition-all">
//                     <Video size={14} /> Watch Showreel
//                   </button>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h4 className="font-bold mb-2">Video Editing & Motion</h4>
//                 <p className="text-zinc-600 text-xs">Professional editing for short-form content (Reels/TikTok) and corporate videos using Premiere Pro and After Effects.</p>
//               </div>
//             </Card>

//             {/* Talent/Modeling */}
//             <Card className="flex flex-col p-0 overflow-hidden group">
//               <div className="h-48 relative bg-zinc-100">
//                 <img src="https://picsum.photos/seed/talent/600/400" alt="Talent/Modeling" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-900/40 backdrop-blur-[2px]">
//                   <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-emerald-500 transition-all">
//                     <Camera size={14} /> View Portfolio
//                   </button>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h4 className="font-bold mb-2">Talent & Video Modeling</h4>
//                 <p className="text-zinc-600 text-xs">Experienced as a talent and model for commercial videos and brand campaigns, bringing energy and professionalism to the screen.</p>
//               </div>
//             </Card>
//           </div>
//         </div>

//         <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mt-16">
//           <div className="relative z-10">
//             <h3 className="text-2xl font-bold mb-6">Featured Project: BI Pitch Deck</h3>
//             <p className="text-zinc-400 mb-8 max-w-2xl">
//               Developed a comprehensive business pitch deck for Bank Indonesia, focusing on digital payment integration and economic growth strategies. 
//               Utilized data-driven insights to support business projections.
//             </p>
//             <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-400 transition-all">
//               View Case Study <ExternalLink size={18} />
//             </button>
//           </div>
//           <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-3xl -z-0"></div>
//         </div>
//       </Section>

//       {/* Achievements & Certifications */}
//       <Section id="achievements" title="Achievements & Certifications" className="bg-zinc-50">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Major Achievements</h3>
//             <div className="space-y-6">
//               <div className="flex gap-6 items-start">
//                 <div className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
//                   <Award className="text-emerald-600" size={28} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold mb-1">Anggota Kelompok Terbaik LKMM-TM 2026</h4>
//                   <p className="text-zinc-500 text-sm mb-3">Latihan Keterampilan Manajemen Mahasiswa Tingkat Menengah</p>
//                   <p className="text-zinc-600 text-sm leading-relaxed mb-4">
//                     Recognized for exceptional leadership, strategic planning, and collaborative problem-solving during the intensive management training program.
//                   </p>
//                   <button 
//                     onClick={() => setSelectedCert({ 
//                       title: "Sertifikat LKMM-TM 2026", 
//                       url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                     })}
//                     className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:underline"
//                   >
//                     <ExternalLink size={14} /> View Certificate
//                   </button>
//                 </div>
//               </div>
//               <div className="flex gap-6 items-start">
//                 <div className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
//                   <Award className="text-blue-600" size={28} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold mb-1">Semifinalist Business Pitch Deck Challenge</h4>
//                   <p className="text-zinc-500 text-sm mb-3">Bank Indonesia</p>
//                   <p className="text-zinc-600 text-sm leading-relaxed mb-4">
//                     Selected among the top participants for a data-backed business proposal presented to Bank Indonesia representatives.
//                   </p>
//                   <button 
//                     onClick={() => setSelectedCert({ 
//                       title: "Sertifikat Semifinalist BI", 
//                       url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                     })}
//                     className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline"
//                   >
//                     <ExternalLink size={14} /> View Certificate
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-8">
//             <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Bootcamps & Certifications</h3>
//             <div className="grid gap-4">
//               <Card className="p-4 flex items-center justify-between group hover:border-emerald-500 transition-colors">
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
//                     <CheckCircle2 size={20} />
//                   </div>
//                   <div>
//                     <h5 className="font-bold text-sm">Data Analyst Bootcamp</h5>
//                     <p className="text-zinc-500 text-[10px]">DQLab • 2025</p>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "Sertifikat Bootcamp DQLab", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="p-2 text-zinc-400 hover:text-emerald-600 transition-colors"
//                 >
//                   <ExternalLink size={18} />
//                 </button>
//               </Card>

//               <Card className="p-4 flex items-center justify-between group hover:border-blue-500 transition-colors">
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
//                     <CheckCircle2 size={20} />
//                   </div>
//                   <div>
//                     <h5 className="font-bold text-sm">UI/UX Design Certification</h5>
//                     <p className="text-zinc-500 text-[10px]">KelasKita • 2025</p>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "Sertifikat UI/UX KelasKita", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="p-2 text-zinc-400 hover:text-blue-600 transition-colors"
//                 >
//                   <ExternalLink size={18} />
//                 </button>
//               </Card>

//               <div className="bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center mt-4">
//                 <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
//                   <Globe className="text-emerald-600" size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">GenBI Awardee</h3>
//                 <p className="text-zinc-600 text-xs mb-4">
//                   Generasi Baru Indonesia (GenBI) community of scholarship recipients from Bank Indonesia.
//                 </p>
//                 <div className="flex gap-2">
//                   <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">Scholarship</span>
//                   <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">Leadership</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* Experience */}
//       <Section id="experience" title="Professional Experience">
//         <div className="space-y-12">
//           {/* Work Experience */}
//           <div>
//             <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs">
//               <Briefcase size={16} /> Work Experience
//             </h3>
//             <div className="space-y-8">
//               <div className="relative pl-8 border-l-2 border-zinc-100">
//                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm"></div>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
//                   <h4 className="text-xl font-bold">Laboratorium Assistant</h4>
//                   <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Present</span>
//                 </div>
//                 <p className="text-zinc-500 text-sm mb-4">Telkom University</p>
//                 <ul className="text-zinc-600 text-sm space-y-2 list-disc pl-4 mb-4">
//                   <li>Facilitated practical learning sessions for students in Information Systems courses, ensuring clear understanding of technical concepts.</li>
//                   <li>Managed and maintained laboratory equipment and software environments to support academic excellence.</li>
//                   <li>Assisted faculty members in developing curriculum-aligned laboratory modules and assessment materials.</li>
//                   <li>Provided technical troubleshooting and mentorship to students during lab hours.</li>
//                 </ul>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "Laboratorium Assistant Documentation", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:underline"
//                 >
//                   <ExternalLink size={14} /> View Documentation
//                 </button>
//               </div>

//               <div className="relative pl-8 border-l-2 border-zinc-100">
//                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-300 rounded-full border-4 border-white shadow-sm"></div>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
//                   <h4 className="text-xl font-bold">Videographer Intern (PKL)</h4>
//                   <span className="text-sm font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">Previous</span>
//                 </div>
//                 <p className="text-zinc-500 text-sm mb-4">ITN News</p>
//                 <ul className="text-zinc-600 text-sm space-y-2 list-disc pl-4 mb-4">
//                   <li>Captured high-quality video footage for news segments and digital content using professional-grade equipment.</li>
//                   <li>Collaborated with the editorial team to visualize stories and ensure visual consistency across platforms.</li>
//                   <li>Performed post-production editing, including color grading and audio synchronization.</li>
//                 </ul>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "Videographer Intern Documentation", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="text-xs font-bold text-zinc-600 flex items-center gap-1 hover:underline"
//                 >
//                   <ExternalLink size={14} /> View Documentation
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Organizational Experience */}
//           <div>
//             <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs">
//               <User size={16} /> Organizational Experience
//             </h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               <Card>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h4 className="font-bold">Liaison Officer (LO)</h4>
//                     <p className="text-zinc-500 text-xs">Osjur Telkom University</p>
//                   </div>
//                   <span className="text-[10px] font-bold text-zinc-400 uppercase">2025</span>
//                 </div>
//                 <p className="text-zinc-600 text-sm mb-4">
//                   Coordinated communication between event organizers and participants, ensuring smooth logistics and information flow during the orientation period.
//                 </p>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "Liaison Officer Documentation", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 hover:underline mt-auto"
//                 >
//                   <ExternalLink size={12} /> View Documentation
//                 </button>
//               </Card>
//               <Card>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h4 className="font-bold">Sekretaris OSIS</h4>
//                     <p className="text-zinc-500 text-xs">High School Student Council</p>
//                   </div>
//                   <span className="text-[10px] font-bold text-zinc-400 uppercase">Previous</span>
//                 </div>
//                 <p className="text-zinc-600 text-sm mb-4">
//                   Managed administrative documentation, meeting minutes, and internal communications for the student body, fostering an organized organizational environment.
//                 </p>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "Sekretaris OSIS Documentation", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 hover:underline mt-auto"
//                 >
//                   <ExternalLink size={12} /> View Documentation
//                 </button>
//               </Card>
//               <Card>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h4 className="font-bold">Senior Resident</h4>
//                     <p className="text-zinc-500 text-xs">Telkom University Dormitory</p>
//                   </div>
//                   <span className="text-[10px] font-bold text-zinc-400 uppercase">Present</span>
//                 </div>
//                 <p className="text-zinc-600 text-sm mb-4">
//                   Mentored first-year students, managed dormitory activities, and ensured a safe and supportive living environment for residents.
//                 </p>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "Senior Resident Documentation", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 hover:underline mt-auto"
//                 >
//                   <ExternalLink size={12} /> View Documentation
//                 </button>
//               </Card>
//               <Card>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h4 className="font-bold">GenBI (Generasi Baru Indonesia)</h4>
//                     <p className="text-zinc-500 text-xs">Divisi Riset dan Pendidikan</p>
//                   </div>
//                   <span className="text-[10px] font-bold text-zinc-400 uppercase">Present</span>
//                 </div>
//                 <p className="text-zinc-600 text-sm mb-4">
//                   Actively contributing to the Research and Education division, focusing on academic development, community research initiatives, and educational workshops for scholarship recipients.
//                 </p>
//                 <button 
//                   onClick={() => setSelectedCert({ 
//                     title: "GenBI Documentation", 
//                     url: "https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview" 
//                   })}
//                   className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 hover:underline mt-auto"
//                 >
//                   <ExternalLink size={12} /> View Documentation
//                 </button>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* Footer */}
//       <footer className="bg-white border-t border-zinc-100 py-12 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
//           <div>
//             <div className="font-bold text-xl tracking-tight flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
//                 <BarChart3 size={18} />
//               </div>
//               Portfolio.
//             </div>
//             <p className="text-zinc-500 text-sm">© 2026 Telkom University Student. All rights reserved.</p>
//           </div>
//           <div className="flex gap-6">
//             <a href="#" className="p-2 bg-zinc-50 rounded-lg text-zinc-600 hover:text-emerald-600 transition-colors">
//               <Linkedin size={20} />
//             </a>
//             <a href="#" className="p-2 bg-zinc-50 rounded-lg text-zinc-600 hover:text-emerald-600 transition-colors">
//               <Mail size={20} />
//             </a>
//             <a href="#" className="p-2 bg-zinc-50 rounded-lg text-zinc-600 hover:text-emerald-600 transition-colors">
//               <Globe size={20} />
//             </a>
//           </div>
//         </div>
//       </footer>

//       {/* Certificate Modal (Google Drive Embed) */}
//       <AnimatePresence>
//         {selectedCert && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm"
//             onClick={() => setSelectedCert(null)}
//           >
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-3xl w-full max-w-4xl h-[80vh] overflow-hidden flex flex-col shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
//                 <h3 className="font-bold text-xl flex items-center gap-2">
//                   <Award className="text-emerald-600" />
//                   {selectedCert.title}
//                 </h3>
//                 <button 
//                   onClick={() => setSelectedCert(null)}
//                   className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
//                 >
//                   <X />
//                 </button>
//               </div>
//               <div className="flex-grow bg-zinc-50 relative">
//                 {/* 
//                   Note: To embed Google Drive PDF, use the URL format:
//                   https://drive.google.com/file/d/FILE_ID/preview
//                 */}
//                 <iframe 
//                   src={selectedCert.url}
//                   className="w-full h-full border-none"
//                   allow="autoplay"
//                 ></iframe>
//                 <div className="absolute inset-0 flex items-center justify-center -z-10 text-zinc-400 text-sm">
//                   Loading Certificate from Google Drive...
//                 </div>
//               </div>
//               <div className="p-4 bg-zinc-50 text-center text-[10px] text-zinc-400 uppercase tracking-widest">
//                 Make sure the Google Drive file is set to "Anyone with the link"
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
