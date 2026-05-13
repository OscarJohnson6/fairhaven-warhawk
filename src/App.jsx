import { useState } from 'react'

const VIDEO_ID = 'gNe3-HiBNN0'
const YOUTUBE_EMBED_BASE = `https://www.youtube.com/embed/${VIDEO_ID}`
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`

const timestamps = [
  {
    time: '0:00',
    seconds: 0,
    label: 'Introduction',
    desc: 'Opening snapshots of Warhawk Catholic and Fairhaven',
  },
  {
    time: '0:08',
    seconds: 8,
    label: 'Student Connection',
    desc: 'Interview with a participating student',
  },
  {
    time: '3:42',
    seconds: 222,
    label: 'Resident Perspectives',
    desc: 'Interviews with Fairhaven residents',
  },
  {
    time: '6:08',
    seconds: 368,
    label: 'Conclusion',
    desc: 'Closing remarks and contact information',
  },
]

const interviewees = [
  { initials: 'S', name: 'UW-Whitewater Student', role: 'Warhawk Catholic Student' },
  { initials: 'R1', name: 'Fairhaven Resident', role: 'Resident Interviewee' },
  { initials: 'R2', name: 'Fairhaven Resident', role: 'Resident Interviewee' },
  { initials: 'R3', name: 'Fairhaven Resident', role: 'Resident Interviewee' },
]

export default function App() {
  const [playing, setPlaying] = useState(false)
  const [startTime, setStartTime] = useState(0)

  const videoSrc = `${YOUTUBE_EMBED_BASE}?autoplay=${playing ? 1 : 0}&start=${startTime}&rel=0&modestbranding=1`

  const handleSeek = (seconds) => {
    setStartTime(seconds)
    setPlaying(true)
    document.getElementById('video-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Hero */}
      <header className="relative overflow-hidden bg-[#1a2744] px-6 py-14 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 40%, rgba(232,217,180,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#c8a96e]">
            Documentary Film · Spring 2026
          </p>
          <h1 className="mb-4 font-serif text-4xl leading-tight text-[#f5ede0] md:text-5xl">
            Connecting Fairhaven and Warhawk Catholic
          </h1>
          <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-[#8fa3c8]">
            Highlighting the relationship between the UW-Whitewater student community and
            Fairhaven Senior Living.
          </p>
        </div>
      </header>

      {/* Video Player */}
      <main>
        <section id="video-section" className="scroll-mt-6 bg-white px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[#c8a96e]">
                  Watch the Film
                </p>
                <h2 className="font-serif text-2xl text-[#1a2744]">Full Documentary</h2>
              </div>

              <a
                href={YOUTUBE_WATCH_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#1a2744] underline decoration-[#c8a96e] underline-offset-4 transition-colors hover:text-[#c8a96e]"
              >
                Open on YouTube
              </a>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#2e4080] bg-[#0d1a33] shadow-2xl">
              {playing ? (
                <iframe
                  className="h-full w-full"
                  src={videoSrc}
                  title="Connecting Fairhaven and Warhawk Catholic Documentary"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play documentary"
                  className="group absolute inset-0 flex h-full w-full items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#c8a96e]/60 focus:ring-offset-2"
                >
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt="Documentary video thumbnail"
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/35" />
                  <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#c8a96e]/95 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e8d9b4]">
                    <span
                      className="ml-1 block"
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

            <p className="mt-4 text-center text-sm italic text-stone-400">
              Runtime: approx. 6 minutes · Produced by Warhawk Catholic
            </p>
          </div>
        </section>

        {/* Timestamps + Interviewees */}
        <section className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-stone-200 border-y border-stone-200 bg-stone-50 md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="px-6 py-10">
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[#c8a96e]">
              Jump to a Chapter
            </p>
            <h2 className="mb-6 font-serif text-2xl text-[#1a2744]">Timestamps</h2>
            <ul className="space-y-2">
              {timestamps.map((ts) => (
                <li key={ts.time}>
                  <button
                    type="button"
                    onClick={() => handleSeek(ts.seconds)}
                    className="group flex w-full items-center gap-4 rounded-lg p-3 text-left transition-all hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c8a96e]/70"
                  >
                    <span className="shrink-0 rounded bg-[#1a2744] px-2 py-1 font-mono text-xs tracking-wide text-[#e8d9b4]">
                      {ts.time}
                    </span>
                    <span>
                      <span className="text-sm font-medium text-stone-700 group-hover:text-[#1a2744]">
                        {ts.label}
                      </span>
                      <span className="block text-xs text-stone-400">{ts.desc}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6 py-10">
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[#c8a96e]">
              Voices from the Community
            </p>
            <h2 className="mb-6 font-serif text-2xl text-[#1a2744]">Interviewees</h2>
            <ul className="flex flex-col gap-5">
              {interviewees.map((person) => (
                <li key={`${person.initials}-${person.role}`} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1a2744]/10 bg-[#1a2744]/5 text-xs font-bold text-[#1a2744]">
                    {person.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-800">{person.name}</p>
                    <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                      {person.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Documentary Context */}
        <section className="mx-auto max-w-5xl border-y border-stone-200 bg-white px-6 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c8a96e]">
                  The Mission
                </p>
                <h2 className="mb-4 font-serif text-3xl italic text-[#1a2744]">
                  Connecting Generations
                </h2>
                <p className="text-lg leading-relaxed text-stone-600">
                  Produced during the Spring 2026 semester, this film documents the relationship
                  between UW-Whitewater students and residents of Fairhaven Senior Living.
                  Through a community partnership course, students explored what it means to
                  show up for one another across generations. By bringing these two groups
                  together, the project highlights how conversation, service, and simple presence
                  can bridge different stages of life.
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-[#1a2744]">About Warhawk Catholic</h3>
                <p className="leading-relaxed text-stone-600">
                  As the Catholic campus ministry at UW-Whitewater, Warhawk Catholic prioritizes
                  service to the local community. Beyond weekly gatherings and spiritual growth,
                  students participate in volunteer visits with residents of Fairhaven. This film
                  reflects those relationships and the community values behind them.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg border border-stone-100 bg-stone-50 p-8 shadow-sm">
                <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1a2744]">
                  Production Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-tighter text-stone-400">
                      Location
                    </p>
                    <p className="text-sm leading-snug text-stone-700">
                      Filmed on-site at Fairhaven Senior Living in Whitewater, Wisconsin,
                      including the main common area & UWW Catholic building.
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-tighter text-stone-400">
                      Production
                    </p>
                    <p className="text-sm leading-snug text-stone-700">
                      Video production and editing by the Warhawk Catholic student project team
                      with guidance and participation throughout the semester.
                    </p>
                  </div>

                  <div className="border-t border-stone-200 pt-4">
                    <ul className="space-y-2 text-[13px] text-stone-500">
                      <li className="flex justify-between gap-4">
                        <span>Semester</span>
                        <span className="text-right font-medium text-stone-800">Spring 2026</span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>University</span>
                        <span className="text-right font-medium text-stone-800">UW-Whitewater</span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>Partner</span>
                        <span className="text-right font-medium text-stone-800">Fairhaven Senior Living</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-6 bg-[#1a2744] px-6 py-8 sm:flex-row">
        <div>
          <p className="font-serif text-sm text-[#e8d9b4]">Fairhaven × Warhawk Catholic</p>
          <p className="mt-1 text-xs text-[#8fa3c8]">
            <a
              href="tel:2624735555"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              262-473-5555
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[.2em] text-[#8fa3c8]">
            Whitewater, WI
          </span>
          <span className="h-4 w-px bg-[#e8d9b4]/20" />
          <span className="rounded-full border border-[#e8d9b4]/20 bg-[#e8d9b4]/5 px-4 py-1 text-xs font-medium text-[#e8d9b4]">
            CBL 2026 Documentary
          </span>
        </div>
      </footer>
    </div>
  )
}
