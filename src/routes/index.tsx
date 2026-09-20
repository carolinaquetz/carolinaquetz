import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const CHECKOUT_URL = "PASTE_HOTMART_CHECKOUT_LINK_HERE";
const VIDEO_EMBED_URL = "";
const MOCKUP_IMAGE_SECTION_4 = "";
const MOCKUP_IMAGE_SECTION_7 = "";
const TEACHER_PHOTO = "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Understand Real Brazilian Portuguese at the Airport" },
      {
        name: "description",
        content: "Practice recognizing the Brazilian Portuguese you'll hear in real airport conversations.",
      },
      { property: "og:title", content: "Understand Real Brazilian Portuguese at the Airport" },
      {
        property: "og:description",
        content: "Practice recognizing the Brazilian Portuguese you'll hear in real airport conversations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-9 fill-current">
      <path d="M8 5.5v13l10-6.5L8 5.5Z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-9 fill-none stroke-current" strokeWidth="1.5">
      <path d="M4 4.75A2.75 2.75 0 0 1 6.75 2H11a1 1 0 0 1 1 1v18a3 3 0 0 0-3-3H4V4.75Z" />
      <path d="M20 4.75A2.75 2.75 0 0 0 17.25 2H13a1 1 0 0 0-1 1v18a3 3 0 0 1 3-3h5V4.75Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 size-5 shrink-0 fill-none stroke-current" strokeWidth="2.5">
      <path d="m5 12.5 4.25 4.25L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 shrink-0 fill-none stroke-current" strokeWidth="2">
      <path d="M12 21s7-3.5 7-9.5V5l-7-2-7 2v6.5C5 17.5 12 21 12 21Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`size-5 shrink-0 fill-none stroke-current transition-transform duration-250 ${open ? "rotate-180" : ""}`}
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VideoSlot({ url }: { url: string }) {
  const getEmbedUrl = (value: string) => {
    if (!value.includes("youtube.com") && !value.includes("youtu.be")) return value;
    const separator = value.includes("?") ? "&" : "?";
    return `${value}${separator}rel=0&modestbranding=1&autoplay=0`;
  };

  return (
    <div className="mx-auto aspect-video w-full max-w-[800px] overflow-hidden rounded-xl">
      {url ? (
        <iframe
          src={getEmbedUrl(url)}
          title="Sales video"
          className="size-full border-0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-3 border border-dashed border-dark-placeholder text-dark-body">
          <PlayIcon />
          <span className="text-center text-sm md:text-base">Sales video goes here (16:9)</span>
        </div>
      )}
    </div>
  );
}

function EbookMockupSlot({ src }: { src: string }) {
  return (
    <div className="mx-auto aspect-3/4 w-4/5 max-w-[360px]">
      {src ? (
        <img src={src} alt="Ebook mockup" className="size-full rounded-xl object-contain drop-shadow-soft" loading="lazy" />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-light-muted text-light-muted">
          <BookIcon />
          <span className="text-center text-sm md:text-base">Ebook mockup goes here</span>
        </div>
      )}
    </div>
  );
}

function TeacherPhotoSlot({ src }: { src: string }) {
  return (
    <div className="size-40 shrink-0 overflow-hidden rounded-full">
      {src ? (
        <img src={src} alt="Carolina, Brazilian Portuguese teacher" className="size-full object-cover" loading="lazy" />
      ) : (
        <div className="flex size-full items-center justify-center border border-dashed border-light-muted text-sm text-light-muted">
          Teacher photo
        </div>
      )}
    </div>
  );
}

function Cta({ children }: { children: ReactNode }) {
  return (
    <a href={CHECKOUT_URL} className="cta-button">
      {children}
    </a>
  );
}

function Checklist({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className={`space-y-4 ${dark ? "text-dark-body" : "text-light-body"}`}>
      {items.map((item) => (
        <li key={item} className={`flex gap-3 ${dark ? "text-dark-accent" : "text-light-highlight"}`}>
          <CheckIcon />
          <span className={dark ? "text-dark-body" : "text-light-body"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const faqItems = [
  {
    question: "I already speak some Portuguese. Will this still help me?",
    answer: [
      "Yes. Many learners can already form sentences and communicate basic ideas, but still struggle to understand Brazilians when they speak naturally.",
      "This ebook focuses specifically on listening practice and becoming more familiar with spoken Brazilian Portuguese.",
    ],
  },
  {
    question: "Is this for complete beginners?",
    answer: [
      "This material is best for learners who already know some basic Portuguese and want more listening and pronunciation practice before traveling to Brazil.",
      "The phrases, dialogues, and explanations will be much easier to follow if you already have some familiarity with the language.",
    ],
  },
  {
    question: "Will this help with pronunciation too?",
    answer: [
      "Yes. While the main goal of the ebook is to help you understand spoken Portuguese more easily, you can also use the audio recordings for pronunciation practice by listening and repeating the phrases out loud, which is the principle of shadowing.",
    ],
  },
  {
    question: "Do I need to memorize everything before my trip?",
    answer: [
      "No. The goal isn't to memorize every phrase.",
      "The goal is to become more familiar with the sounds, words, and patterns you're likely to hear, so airport conversations feel easier to follow.",
    ],
  },
  {
    question: "Is this focused on grammar?",
    answer: ["No. This ebook focuses on listening practice rather than teaching Portuguese grammar."],
  },
  {
    question: "Why are there two audio versions in the THEY SAY sections?",
    answer: [
      "The slow version helps you hear the words and pronunciation more clearly.",
      "The natural-speed version helps you get used to the way Brazilian Portuguese sounds in everyday conversation, including contractions, abbreviations, and pronunciation patterns.",
      "Both versions are included in the same audio file.",
    ],
  },
  {
    question: "Is this Brazilian Portuguese?",
    answer: ["Yes. All audio recordings and dialogues use Brazilian Portuguese."],
  },
  {
    question: "Are the audio recordings made with AI?",
    answer: [
      "No. The audio recordings were not generated with AI.",
      "The voices you'll hear in the material are real voices: mine, my boyfriend's, and my father's.",
      "I wanted the material to give you exposure to real voices and different ways of hearing Brazilian Portuguese.",
    ],
  },
  {
    question: "How do the audio recordings work?",
    answer: [
      "Every phrase and dialogue contains a clickable audio link inside the PDF.",
      "Simply click the text to open the audio in a new tab while you study.",
    ],
  },
  {
    question: "How are the audio files delivered?",
    answer: [
      "The ebook already includes clickable audio links for all phrases and dialogues.",
      "You will also receive a separate folder containing all the audio files, organized by topic and section.",
    ],
  },
  {
    question: "Can I use the ebook on my phone?",
    answer: [
      "For the best experience, I recommend using a computer or tablet for the practice.",
      "At certain points, you'll need to listen to the audio while reading the Portuguese sentence at the same time. Using two screens makes this much easier.",
    ],
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-8 max-w-[800px] border-t border-dark-divider">
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        const answerId = `faq-answer-${index}`;
        return (
          <div key={item.question} className="border-b border-dark-divider">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={answerId}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex min-h-14 w-full items-center justify-between gap-5 py-4 text-left font-semibold text-dark-heading outline-none transition-colors focus-visible:ring-2 focus-visible:ring-dark-accent focus-visible:ring-inset"
            >
              <span>{item.question}</span>
              <span className="text-dark-accent">
                <ArrowIcon open={open} />
              </span>
            </button>
            <div id={answerId} className={`faq-answer ${open ? "faq-answer-open" : ""}`} aria-hidden={!open}>
              <div>
                <div className="space-y-4 pb-4 pr-8 text-dark-body">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Index() {
  return (
    <>
      <section className="section-dark">
        <div className="content-shell text-center">
          <div className="mx-auto max-w-[720px]">
            <h1>Understand Brazilians More Easily at the Airport</h1>
            <p className="mt-5 text-subtitle font-semibold text-dark-body">You study Portuguese for months, but still don't follow Brazilians</p>
            <p className="mt-4 text-dark-body">Discover what happens to Portuguese when Brazilians speak, and what you can start listening for before your trip.</p>
          </div>
          <div className="mt-8">
            {/* Paste the sales video embed link into VIDEO_EMBED_URL at the top of this file. */}
            <VideoSlot url={VIDEO_EMBED_URL} />
          </div>
          <div className="mt-8"><Cta>I want to understand Brazilians</Cta></div>
        </div>
      </section>

      <section className="section-light">
        <div className="content-shell max-w-[760px]">
          <h2>This is for you if:</h2>
          <div className="mt-8">
            <Checklist items={[
              "You already know some Portuguese, but still struggle when Brazilians speak naturally.",
              "You sometimes freeze because you recognize the words on the page, but can't catch them when someone says them to you.",
              "You're preparing for a trip to Brazil and want to practice before you arrive.",
              "You want to practice recognizing the Portuguese you already know when Brazilians speak naturally.",
            ]} />
          </div>
          <div className="mt-8 rounded-xl bg-light-muted-surface p-6 text-light-muted">
            <h3 className="text-lg font-semibold text-light-heading md:text-xl">This is probably not for you if:</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>You've never studied Portuguese before.</li>
              <li>You're looking for a complete beginner Portuguese course.</li>
              <li>You want to learn Portuguese from scratch.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="content-shell max-w-[760px] text-center">
          <h2>You may not need more Portuguese.</h2>
          <p className="mt-5 text-subtitle font-semibold text-dark-body">You may need more practice recognizing the Portuguese you already know when Brazilians speak naturally.</p>
          <div className="mx-auto mt-8 max-w-[560px] rounded-xl bg-dark-card p-6 md:p-8">
            <p className="text-sm font-semibold text-dark-body">You already know this:</p>
            <p className="mt-2 text-2xl font-black text-dark-heading md:text-3xl">Você pode me ajudar?</p>
            <p className="my-4 text-3xl text-dark-body" aria-hidden="true">↓</p>
            <p className="text-sm font-semibold text-dark-body">But you may hear:</p>
            <p className="mt-2 text-2xl font-black text-dark-accent md:text-3xl">Cê pode me ajudá?</p>
          </div>
          <div className="mx-auto mt-8 max-w-[720px] space-y-4 text-dark-body">
            <p>The words sound different, but the meaning is the same.</p>
            <p>You're not hearing new Portuguese. You're hearing the Portuguese you already know, the way Brazilians naturally speak.</p>
            <p className="font-semibold text-dark-accent">And that's something you can get used to before your trip.</p>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="content-shell">
          <div className="mx-auto max-w-[720px] text-center">
            <h2>Practice the Portuguese You'll Hear in Brazil</h2>
            <p className="mt-4 text-light-body">This ebook gives you listening practice built around the phrases you'll need at the airport.</p>
          </div>
          <div className="mt-8">
            {/* Paste the section 4 ebook image link into MOCKUP_IMAGE_SECTION_4 at the top of this file, or import an uploaded file there. */}
            <EbookMockupSlot src={MOCKUP_IMAGE_SECTION_4} />
          </div>
          <div className="mx-auto mt-8 grid max-w-[1000px] gap-5 md:grid-cols-2 md:items-start">
            <article className="card-light">
              <p className="label-light">YOU SAY</p>
              <div className="mt-4 space-y-4"><p>Useful phrases you may actually need to use at the airport.</p><p>Each phrase comes with audio so you can listen, repeat, and practice saying it out loud.</p></div>
            </article>
            <article className="card-light">
              <p className="label-light">THEY SAY</p>
              <div className="mt-4 space-y-4">
                <p>Responses you may hear from Brazilians in those same situations.</p>
                <p>Each THEY SAY section comes with one audio file containing two versions:</p>
                <div><p className="font-semibold">Slow audio</p><p className="mt-1">To help you clearly hear the words and pronunciation.</p></div>
                <div><p className="font-semibold">Natural-speed audio</p><p className="mt-1">To help you get used to how the same Portuguese can sound in a real conversation.</p></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="content-shell max-w-[800px]">
          <h2>What's Inside the Ebook</h2>
          <p className="mt-4 text-dark-body">Inside the ebook, you'll find:</p>
          <div className="mt-8">
            <Checklist dark items={[
              "YOU SAY sections with useful phrases for common airport situations",
              "THEY SAY sections with responses you may hear from Brazilians",
              "Portuguese + English translations for every phrase and dialogue",
              "Audio recordings throughout the ebook",
              "Slow + natural-speed audio in the same file for every THEY SAY section",
              "Essential airport vocabulary",
              "Realistic airport dialogues",
              "Examples of common Brazilian contractions and abbreviations",
              "Explanations of common pronunciation patterns, using examples from the ebook's sentences",
            ]} />
          </div>
          <p className="mt-8 font-semibold text-dark-body">Everything is organized around the airport situations you're most likely to encounter when traveling to Brazil.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="content-shell max-w-[900px]">
          <h2 className="text-center">What Other Learners Say</h2>
          <div className="mt-8 space-y-5">
            <article className="card-light">
              <div className="flex items-center gap-4"><div className="avatar">K</div><p className="label-light">A student after practicing with my audio recordings</p></div>
              <div className="mt-5 space-y-4">
                <p>Before I started practicing with your audio recordings, I felt very insecure about my pronunciation. I didn't think my Portuguese was good enough to have a conversation with a native speaker, and I was afraid of making mistakes.</p>
                <p>Now I feel much more confident. Your audio recordings have helped me improve my listening comprehension a lot, and I continue practicing my pronunciation with the shadowing exercises. They are very helpful because they allow me to notice which words and sounds are more difficult for me, so I can focus on practicing those areas and continue improving.</p>
                <p>I would definitely recommend the shadowing exercises. I think they are a great way to build confidence, improve pronunciation and diction, and become more familiar with the sounds of Brazilian Portuguese. They also help you learn new vocabulary and sentence structures because, by repeating the audio recordings, you naturally memorize words, expressions, and grammar.</p>
                <p className="font-semibold">Karen, Mexico</p>
              </div>
            </article>
            <article className="card-light">
              <div className="flex items-center gap-4"><div className="avatar">L</div><p className="label-light">A student after practicing with my lessons</p></div>
              <div className="mt-5 space-y-4">
                <p className="font-semibold text-light-highlight">Q: Before we started, how did you feel listening to Brazilians speak naturally?</p>
                <p>A: Before we started, I could not understand Brazilians speaking naturally at all.</p>
                <p className="font-semibold text-light-highlight">Q: What was it like listening to the same audio multiple times in the lessons? Do you notice yourself understanding things that used to sound too fast or unclear?</p>
                <p>A: I really enjoyed listening to the audio multiple times. It's nice to hear the speed at which they're speaking and trying to understand all the words. I would definitely say that I can understand more things that used to sound too fast and unclear. There are a few small words that I don't catch, but it will get better with practice.</p>
                <p className="font-semibold text-light-highlight">Q: How did you feel about your pronunciation before we started, and what changed after practicing sounds like R, LH, and NH?</p>
                <p>A: My pronunciation was horrible and I think it's gotten better. Practicing those sounds have made pronouncing words easier.</p>
                <p className="font-semibold">Lauren, United States</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="content-shell grid max-w-[1000px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            {/* Paste the section 7 ebook image link into MOCKUP_IMAGE_SECTION_7 at the top of this file, or import an uploaded file there. */}
            <EbookMockupSlot src={MOCKUP_IMAGE_SECTION_7} />
          </div>
          <div className="text-center md:text-left">
            <h2>Understand Real Brazilian Portuguese at the Airport</h2>
            <p className="mt-4 text-dark-body">Complete ebook (PDF with clickable audio links) + a folder with all the audio files.</p>
            <p className="mt-6 font-semibold text-dark-body">One-time payment of <span className="text-4xl font-black text-dark-accent">$19</span>.</p>
            <div className="mt-8"><Cta>Get instant access</Cta></div>
            <div className="mx-auto mt-4 max-w-md text-center text-sm text-dark-body">
              <p className="flex items-center justify-center gap-2 font-semibold"><ShieldIcon />30-DAY GUARANTEE</p>
              <p className="mt-2">Try the ebook for 30 days. If you decide it's not the right material for you, you can request a full refund within 30 days.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="content-shell max-w-[900px]">
          <div className="text-center"><p className="label-light">MEET YOUR TEACHER</p><h2 className="mt-4">Created by a Brazilian Portuguese teacher</h2></div>
          <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            {/* Paste the teacher photo link into TEACHER_PHOTO at the top of this file, or import an uploaded file there. */}
            <TeacherPhotoSlot src={TEACHER_PHOTO} />
            <div className="space-y-4 text-light-body">
              <p>I'm Carolina, a Brazilian Portuguese teacher, and I've been teaching Portuguese to foreigners for 4 years.</p>
              <p>During this time, I've worked with students from countries including the USA, UK, Netherlands, Colombia, Mexico, Japan, and Italy.</p>
              <p>I also run Brazilian Cousin, where I create content about Brazilian Portuguese — from pronunciation and grammar difficulties to expressions and the way Brazilians actually speak in everyday life.</p>
              <p>I created this material based on what I've seen learners struggle with again and again: understanding spoken Brazilian Portuguese and feeling comfortable with the way it sounds in real conversations.</p>
              <p>My goal is simple: to help you prepare for the Portuguese you're actually going to hear in Brazil.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="content-shell">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <Faq />
        </div>
      </section>

      <section className="section-light">
        <div className="content-shell max-w-[720px] text-center">
          <h2>Practice before you arrive in Brazil.</h2>
          <p className="mt-4 text-light-body">Start preparing for the Portuguese you're going to hear at the airport.</p>
          <p className="mt-5 text-subtitle font-semibold text-light-heading">Listen. Repeat. Practice.</p>
          <p className="mt-4 text-light-body">And arrive feeling more prepared for real conversations in Brazilian Portuguese.</p>
          <div className="mt-8"><Cta>Get instant access</Cta></div>
        </div>
      </section>
    </>
  );
}