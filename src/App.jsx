import { useState } from 'react'

const timestamps = [
  { time: '0:00', label: 'Introduction', desc: 'Brief overview of Warhawk Catholic & Fairhaven' },
  { time: '1:20', label: 'Tour of the Space', desc: 'Church & Fairhaven community grounds' },
  { time: '3:10', label: 'The Connection', desc: 'Transition into personal stories' },
  { time: '4:30', label: 'Interviews', desc: 'Residents & student participants' },
  { time: '7:00', label: 'Outro', desc: 'Conclusion and closing thoughts' },
]

const interviewees = [
  { initials: 'R1', name: 'Resident Name', role: 'Fairhaven Resident' },
  { initials: 'R2', name: 'Resident Name', role: 'Fairhaven Resident' },
  { initials: 'S1', name: 'Student Name', role: 'Warhawk Catholic Participant' },
  { initials: 'S2', name: 'Student Name', role: 'Warhawk Catholic Participant' },
]

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/YOUR_VIDEO_ID'

export default function App() {
  const [playing, setPlaying] = useState(false)

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
          The Legacy of<br />St. Jeanne Jugan
        </h1>
        <p className="text-[#8fa3c8] font-light text-base max-w-md mx-auto leading-relaxed">
          Highlighting the connection UW‑Whitewater and Fairhaven community.
        </p>
      </header>

      {/* ── Video Player ─────────────────────────────────────── */}
      <section className="bg-white px-6 py-12">
        <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1 font-medium">
          Watch the Film
        </p>
        <h2 className="font-serif text-[#1a2744] text-2xl mb-6">Full Documentary</h2>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-[#2e4080] bg-[#0d1a33] relative">
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`${YOUTUBE_EMBED_URL}?autoplay=1`}
              title="The Legacy of St. Jeanne Jugan"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play documentary"
              className="absolute inset-0 flex items-center justify-center w-full h-full group"
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <span className="relative z-10 w-16 h-16 rounded-full bg-[#c8a96e]/90 group-hover:bg-[#e8d9b4] transition-colors duration-200 flex items-center justify-center">
                <span
                  className="block ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '14px solid transparent',
                    borderBottom: '14px solid transparent',
                    borderLeft: '22px solid #1a2744',
                  }}
                />
              </span>
            </button>
          )}
        </div>

        <p className="text-center text-stone-400 text-sm mt-3 italic">
          Runtime: approx. 7–8 minutes · Subtitled · Produced by Warhawk Catholic, UWW
        </p>
      </section>

      {/* ── Timestamps + Interviewees ────────────────────────── */}
      <section className="bg-stone-50 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 flex-col items-start max-w-5xl mx-auto">

        <div className="px-6 py-10">
          <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1 font-medium">
            Navigate the Film
          </p>
          <h2 className="font-serif text-[#1a2744] text-2xl mb-6">Timestamps</h2>
          <ul className="divide-y divide-stone-200">
            {timestamps.map((ts) => (
              <li key={ts.time} className="flex items-center gap-3 py-3">
                <a
                  href={`${YOUTUBE_EMBED_URL.replace('/embed/', '/watch?v=')}&t=${ts.time}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group w-full"
                >
                  <span className="bg-[#1a2744] text-[#e8d9b4] text-xs font-mono px-2 py-0.5 rounded shrink-0 tracking-wide">
                    {ts.time}
                  </span>
                  <span className="text-sm text-stone-700 group-hover:text-[#1a2744] transition-colors">
                    {ts.label}
                    <span className="block text-xs text-stone-400 mt-0.5">{ts.desc}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 py-10">
          <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1 font-medium">
            Featured Voices
          </p>
          <h2 className="font-serif text-[#1a2744] text-2xl mb-6">Interviewees</h2>
          <ul className="flex flex-col gap-4">
            {interviewees.map((person, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-[#1a2744] shrink-0">
                  {person.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-800">{person.name}</p>
                  <p className="text-xs text-stone-400">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── About & Details ──────────────────────────────────── */}
      <section className="bg-white border-t border-stone-200 px-6 py-12 flex flex-col items-start max-w-5xl mx-auto">
        <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1 font-medium">
          About the Project
        </p>
        <h2 className="font-serif text-[#1a2744] text-2xl mb-3">Background & Details</h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl mb-10">
          This documentary was produced during the Spring 2026 semester as part of a community
          partnership course at UW-Whitewater. It captures the relationship between Fairhaven and UW Whitewater
          with Warhawk Catholic. Through interviews and on-location footage, the film
          explores what it means to show up for one another across generations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">

          <div className="border border-stone-200 rounded-xl p-5 bg-stone-50">
            <p className="text-[#1a2744] font-medium text-sm mb-2">About Warhawk Catholic</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Warhawk Catholic is the Catholic campus ministry at UW-Whitewater. Through weekly
              gatherings, service projects, and community outreach, it builds a welcoming space
              for students to grow in faith and connection — including ongoing volunteer visits
              with the residents of Fairhaven Senior Living.
            </p>
          </div>

          <div className="border border-stone-200 rounded-xl p-5 bg-stone-50">
            <p className="text-[#1a2744] font-medium text-sm mb-2">Where It Was Filmed</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Filming took place at Fairhaven Senior Living in Whitewater, Wisconsin. Including
              the on-site chapel, common areas (with film permission), and surrounding grounds; as well as locations
              connected to Warhawk Catholic events on the UW-Whitewater campus.
            </p>
          </div>

          <div className="border border-stone-200 rounded-xl p-5 bg-stone-50">
            <p className="text-[#1a2744] font-medium text-sm mb-2">Film Credits</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Produced by UW-Whitewater students in partnership with Fairhaven Senior Living.
              Video production and editing by the Warhawk Catholic project team. Website design
              and development by the web team. Special thanks to the residents and staff of
              Fairhaven, and to Brian for the guidance and participaction throughout.
            </p>
          </div>

          <div className="border border-stone-200 rounded-xl p-5 bg-stone-50">
            <p className="text-[#1a2744] font-medium text-sm mb-2">Project Info</p>
            <ul className="text-stone-600 text-sm leading-relaxed space-y-1.5">
              <li><span className="text-stone-400">Semester&nbsp;&nbsp;</span>Spring 2026</li>
              <li><span className="text-stone-400">University&nbsp;&nbsp;</span>UW-Whitewater</li>
              <li><span className="text-stone-400">Partner&nbsp;&nbsp;</span>Fairhaven Senior Living</li>
              <li><span className="text-stone-400">Format&nbsp;&nbsp;</span>Documentary video + website</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#1a2744] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#8fa3c8] text-sm">
          Fairhaven Warhawk Catholic ·{' '}
          <a href="mailto:contact@uww.edu" className="hover:text-[#e8d9b4] transition-colors">
            contact@uww.edu
          </a>
        </p>
        <span className="border border-[#e8d9b4]/25 bg-[#e8d9b4]/10 text-[#e8d9b4] text-xs px-4 py-1 rounded-full tracking-wide">
          Fairhaven Community Project
        </span>
      </footer>

    </div>
  )
}
