import { useState } from 'react'

const timestamps = [
  { time: '0:00', seconds: 0, label: 'Introduction', desc: 'Brief snapshots of Warhawk Catholic & Fairhaven' },
  { time: '0:20', seconds: 20, label: 'Resident Perspectives', desc: 'Interviews with the Fairhaven residents' },
  { time: '2:15', seconds: 135, label: 'Student Connection', desc: 'Interviewing a participanting student' },
  { time: '5:00', seconds: 300, label: 'Conclusion', desc: 'Outro' },
]

// TODO: Group members name
const interviewees = [
  { initials: 'R1', name: '[Resident 1]', role: 'Fairhaven Resident' },
  { initials: 'R2', name: '[Resident 2]', role: 'Fairhaven Resident' },
  { initials: 'R3', name: '[Resident 3]', role: 'Fairhaven Resident' },
  { initials: 'S1', name: '[Student Name]', role: 'Warhawk Catholic Student' },
]

// TODO: Replace VIDEO_ID with your actual YouTube video
const YOUTUBE_EMBED_BASE = `https://www.youtube.com/embed/VIDEO_ID` 

export default function App() {
  const [playing, setPlaying] = useState(false)
  const [startTime, setStartTime] = useState(0)

  const handleSeek = (seconds) => {
    setStartTime(seconds)
    setPlaying(true)
    // Dynamically scroll to the video player instead of a hardcoded pixel value
    document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-800">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="bg-[#1a2744] px-6 pt-16 pb-12 text-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 40%, rgba(232,217,180,0.08) 0%, transparent 60%)',
          }}
        />
        <p className="text-[#c8a96e] text-xs tracking-[0.2em] uppercase mb-4">
          Documentary Film · 2026
        </p>
        <h1 className="font-serif text-[#f5ede0] text-4xl md:text-5xl leading-tight mb-4">
          Connection Fairhaven and UW Catholic 
        </h1>
        <p className="text-[#8fa3c8] font-light text-base max-w-md mx-auto leading-relaxed">
          Highlighting the connection between the UW‑Whitewater student community and Fairhaven Senior Living.
        </p>
      </header>

      {/* ── Video Player ───────────────────────────────────────── */}
      <section id="video-section" className="bg-white px-6 py-12 scroll-mt-6">
        <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1 font-medium">
          Watch the Film
        </p>
        <h2 className="font-serif text-[#1a2744] text-2xl mb-6">Full Documentary</h2>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-[#2e4080] bg-[#0d1a33] relative shadow-2xl">
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`${YOUTUBE_EMBED_BASE}?autoplay=1&start=${startTime}`}
              title="Bridges Across Generations Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play documentary"
              className="absolute inset-0 flex items-center justify-center w-full h-full group"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <span className="relative z-10 w-20 h-20 rounded-full bg-[#c8a96e]/90 group-hover:bg-[#e8d9b4] group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
                <span
                  className="block ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '16px solid transparent',
                    borderBottom: '16px solid transparent',
                    borderLeft: '26px solid #1a2744',
                  }}
                />
              </span>
            </button>
          )}
        </div>

        <p className="text-center text-stone-400 text-sm mt-4 italic">
          Runtime: approx. 7–8 minutes · Subtitled · Produced by Warhawk Catholic
        </p>
      </section>

      {/* ── Timestamps + Interviewees ────────────────────────── */}
      <section className="bg-stone-50 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 max-w-5xl mx-auto border-y border-stone-200">
        
        <div className="px-6 py-10">
          <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1 font-medium">
            Jump to Chapter
          </p>
          <h2 className="font-serif text-[#1a2744] text-2xl mb-6">Timestamps</h2>
          <ul className="space-y-2">
            {timestamps.map((ts) => (
              <li key={ts.time}>
                <button
                  onClick={() => handleSeek(ts.seconds)}
                  className="flex items-center gap-4 p-3 w-full text-left rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                >
                  <span className="bg-[#1a2744] text-[#e8d9b4] text-xs font-mono px-2 py-1 rounded shrink-0 tracking-wide">
                    {ts.time}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-stone-700 group-hover:text-[#1a2744]">
                      {ts.label}
                    </span>
                    <span className="block text-xs text-stone-400">{ts.desc}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 py-10">
          <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1 font-medium">
            Voices of the Community
          </p>
          <h2 className="font-serif text-[#1a2744] text-2xl mb-6">Interviewees</h2>
          <ul className="flex flex-col gap-5">
            {interviewees.map((person, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1a2744]/5 flex items-center justify-center text-xs font-bold text-[#1a2744] border border-[#1a2744]/10 shrink-0">
                  {person.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">{person.name}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Documentary Context ──────────────────────────────────── */}
      <section className="bg-white border-y border-stone-200 px-6 py-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3 font-semibold">The Mission</p>
              <h2 className="font-serif text-[#1a2744] text-3xl mb-4 italic">Connecting Generations</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Produced during the Spring 2026 semester, this film documents the relationship 
                between UW-Whitewater students and the residents of Fairhaven Senior Living. 
                Through a community partnership course, we explored what it means to show up for 
                one another across generations. By bringing these two groups together, we 
                witnessed how simple presence can bridge the gap between different stages of life.
              </p>
            </div>

            <div>
              <h3 className="text-[#1a2744] font-serif text-xl mb-3">About Warhawk Catholic</h3>
              <p className="text-stone-600 leading-relaxed">
                As the Catholic campus ministry at UW-Whitewater, we prioritize service to our 
                local community. Beyond weekly gatherings and spiritual growth, our students 
                engage in ongoing volunteer visits with the residents of Fairhaven. This film 
                is a reflection of those sustained relationships and the faith that drives them.
              </p>
            </div>
          </div>

          {/* Right Column: Details  */}
          <div className="lg:col-span-5">
            <div className="bg-stone-50 p-8 rounded-lg border border-stone-100 shadow-sm">
              <h3 className="text-[#1a2744] font-bold text-xs uppercase tracking-[0.2em] mb-6">Production Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-stone-400 text-xs uppercase tracking-tighter mb-1 font-medium">Location</p>
                  <p className="text-stone-700 text-sm leading-snug">
                    Filmed on-site at Fairhaven Senior Living in Whitewater, Wisconsin. 
                    Including the on-site chapel, common areas, and surrounding grounds.
                  </p>
                </div>

                <div>
                  <p className="text-stone-400 text-xs uppercase tracking-tighter mb-1 font-medium">Production</p>
                  <p className="text-stone-700 text-sm leading-snug">
                    Video production and editing by the Warhawk Catholic student project team. 
                    Special thanks to Brian for the guidance and participation throughout the semester.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <ul className="text-[13px] text-stone-500 space-y-2">
                    <li className="flex justify-between">
                      <span>Semester</span>
                      <span className="text-stone-800 font-medium">Spring 2026</span>
                    </li>
                    <li className="flex justify-between">
                      <span>University</span>
                      <span className="text-stone-800 font-medium">UW-Whitewater</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Partner</span>
                      <span className="text-stone-800 font-medium">Fairhaven Senior Living</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#1a2744] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#e8d9b4] text-sm font-serif">Fairhaven × Warhawk Catholic</p>
          <p className="text-[#8fa3c8] text-xs mt-1">
            {/* TODO: Add a specific contact email if desired */}
            <a href="mailto:contact@uww.edu" className="hover:text-white transition-colors underline underline-offset-4">
              contact@uww.edu 
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#8fa3c8] text-[10px] uppercase tracking-[.2em]">Whitewater, WI</span>
          <span className="h-4 w-px bg-[#e8d9b4]/20" />
          <span className="text-[#e8d9b4] text-xs font-medium px-4 py-1 rounded-full border border-[#e8d9b4]/20 bg-[#e8d9b4]/5">
            CBL 2026 Documentary
          </span>
        </div>
      </footer>
    </div>
  )
}