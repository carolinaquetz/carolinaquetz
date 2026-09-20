# Airport Portuguese Practice

Build a single-page, mobile-first sales landing page for an ebook, using React + Tailwind. Follow this brief exactly. Do NOT add sections, copy, timers, fake counters, badges or anything not listed here. Use the copy word for word. Do not rewrite it, shorten it, or insert manual line breaks (let the text wrap naturally).

## CONSTANTS (define at the top of the code, easy to edit)

- CHECKOUT_URL = "PASTE_HOTMART_CHECKOUT_LINK_HERE"

- VIDEO_EMBED_URL = "" (embed link for the sales video: YouTube, Vimeo or similar)

- MOCKUP_IMAGE_SECTION_4 = "" (ebook mockup image URL or uploaded file)

- MOCKUP_IMAGE_SECTION_7 = "" (ebook mockup image URL or uploaded file, can be a different image)

- TEACHER_PHOTO = "" (teacher photo)

EVERY button on the page (there are 3) links to CHECKOUT_URL, opening in the same tab.

## MEDIA SLOTS (important)

Build these as reusable components with clear placeholders that I will fill in later.

VIDEO SLOT (section 1):

- A 16:9 responsive container, max-width 800px, centered, rounded 12px, no black bars.

- If VIDEO_EMBED_URL is empty: show a placeholder with a dashed border in #f4f4f0 at 40% opacity, a play icon and the text "Sales video goes here (16:9)".

- If VIDEO_EMBED_URL is filled: render it as an iframe filling the container, with player controls visible and NO autoplay. For YouTube, add rel=0 and modestbranding=1.

- Placeholder and video must occupy exactly the same space so the layout does not shift when I add the video.

EBOOK MOCKUP SLOTS (sections 4 and 7):

- Two separate slots, one per section, each controlled by its own constant.

- Aspect ratio 3:4, centered, ~80% width on mobile, max 360px on desktop. Use object-contain (never crop). Support transparent PNGs, and add no border or background behind the image.

- If the constant is empty: show a placeholder with a dashed border, a book icon and the text "Ebook mockup goes here".

- When filled, show only the image with a soft shadow.

TEACHER PHOTO SLOT (section 8):

- Circular, 160px, same logic. Placeholder text "Teacher photo".

Testimonials use an initial-letter avatar (a circle with the person's initial).

Add a short code comment above each slot saying exactly where to paste the link or upload the file.

## COLORS

- Dark green background: #334831

- Light background: #f4f4f0

- On dark green sections: headings #ffffff, body text #f4f4f0

- On light sections: headings #334831, body text #1f2a1d

- Highlight color on light backgrounds: #1a6b1a (check icons, small labels, key phrases). Do NOT use it on dark green sections because contrast is poor.

- Accent on dark green sections: #5CDC5C

- CTA button: background #5CDC5C, text #334831, hover background #4CC94C. Rounded corners 12px. Same style everywhere.

## TYPOGRAPHY (Inter, from Google Fonts, weights 400, 600, 900)

- Titles (H1, H2): Inter Black (900)

- Subtitles: Inter SemiBold (600)

- Body text: Inter Regular (400)

- Button text: Inter SemiBold (600), sentence case

- Sizes: H1 28-30px mobile / 48px desktop. H2 26px mobile / 38px desktop. Subtitle 18-20px mobile / 24px desktop. Body 16px mobile / 18px desktop, line-height 1.6.

## LAYOUT

- Mobile-first: most visitors are on phones. Same 20px side padding for all content on mobile.

- Text max-width ~720px, centered. Two-column layouts stack on mobile.

- Section padding: 56px top/bottom mobile, 96px desktop.

- Consistent vertical rhythm: 16-20px between a title and its subtitle, 12-16px between subtitle and paragraph, 28-32px between a text block and the next element (video, image, button, card).

- Sections alternate backgrounds in this order: 1 dark green, 2 light, 3 dark green, 4 light, 5 dark green, 6 light, 7 dark green, 8 light, 9 dark green, 10 light.

- Rounded corners 12px on cards, images and video. Subtle shadows on cards only. No gradients, no stock photos.

- Replace every "✔" with a clean SVG check icon.

- Semantic HTML, good contrast, visible focus states, alt text on images, smooth anchor behavior, fast loading.

- Page <title>: "Understand Real Brazilian Portuguese at the Airport".

---

## SECTION 1 (dark green) HERO

H1: Understand Brazilians More Easily at the Airport

Subtitle: You study Portuguese for months, but still don't follow Brazilians

Paragraph: Discover what happens to Portuguese when Brazilians speak, and what you can start listening for before your trip.

[VIDEO SLOT: 16:9, between the paragraph and the button]

[Button: I want to understand Brazilians]

## SECTION 2 (light)

H2: This is for you if:

Checklist (check icons in #1a6b1a):

- You already know some Portuguese, but still struggle when Brazilians speak naturally.

- You sometimes freeze because you recognize the words on the page, but can't catch them when someone says them to you.

- You're preparing for a trip to Brazil and want to practice before you arrive.

- You want to practice recognizing the Portuguese you already know when Brazilians speak naturally.

Then a smaller, quieter box (muted, no check icons):

Subtitle: This is probably not for you if:

- You've never studied Portuguese before.

- You're looking for a complete beginner Portuguese course.

- You want to learn Portuguese from scratch.

## SECTION 3 (dark green)

H2: You may not need more Portuguese.

Subtitle: You may need more practice recognizing the Portuguese you already know when Brazilians speak naturally.

Example card (slightly lighter than the background, rounded), centered:

  small label: You already know this:

  large text: Você pode me ajudar?

  down arrow ↓

  small label: But you may hear:

  large text, in #5CDC5C: Cê pode me ajudá?

Paragraph:

The words sound different, but the meaning is the same.

You're not hearing new Portuguese. You're hearing the Portuguese you already know, the way Brazilians naturally speak.

Last line, semibold, in #5CDC5C: And that's something you can get used to before your trip.

## SECTION 4 (light)

H2: Practice the Portuguese You'll Hear in Brazil

Paragraph: This ebook gives you listening practice built around the phrases you'll need at the airport.

[EBOOK MOCKUP SLOT using MOCKUP_IMAGE_SECTION_4, centered, between the paragraph and the two cards]

Two white cards side by side on desktop, stacked on mobile. Small labels in #1a6b1a:

Card 1 label: YOU SAY

  Useful phrases you may actually need to use at the airport.

  Each phrase comes with audio so you can listen, repeat, and practice saying it out loud.

Card 2 label: THEY SAY

  Responses you may hear from Brazilians in those same situations.

  Each THEY SAY section comes with one audio file containing two versions:

  Sub-item (semibold): Slow audio

  To help you clearly hear the words and pronunciation.

  Sub-item (semibold): Natural-speed audio

  To help you get used to how the same Portuguese can sound in a real conversation.

## SECTION 5 (dark green)

H2: What's Inside the Ebook

Paragraph: Inside the ebook, you'll find:

Checklist (check icons in #5CDC5C):

- YOU SAY sections with useful phrases for common airport situations

- THEY SAY sections with responses you may hear from Brazilians

- Portuguese + English translations for every phrase and dialogue

- Audio recordings throughout the ebook

- Slow + natural-speed audio in the same file for every THEY SAY section

- Essential airport vocabulary

- Realistic airport dialogues

- Examples of common Brazilian contractions and abbreviations

- Explanations of common pronunciation patterns, using examples from the ebook's sentences

Closing line, semibold: Everything is organized around the airport situations you're most likely to encounter when traveling to Brazil.

## SECTION 6 (light)

H2: What Other Learners Say

Two testimonial cards (white), stacked, each with an initial avatar:

Card 1

Label: A student after practicing with my audio recordings

Before I started practicing with your audio recordings, I felt very insecure about my pronunciation. I didn't think my Portuguese was good enough to have a conversation with a native speaker, and I was afraid of making mistakes.

Now I feel much more confident. Your audio recordings have helped me improve my listening comprehension a lot, and I continue practicing my pronunciation with the shadowing exercises. They are very helpful because they allow me to notice which words and sounds are more difficult for me, so I can focus on practicing those areas and continue improving.

I would definitely recommend the shadowing exercises. I think they are a great way to build confidence, improve pronunciation and diction, and become more familiar with the sounds of Brazilian Portuguese. They also help you learn new vocabulary and sentence structures because, by repeating the audio recordings, you naturally memorize words, expressions, and grammar.

Name: Karen, Mexico

Card 2 (questions in semibold #1a6b1a, answers in regular text)

Label: A student after practicing with my lessons

Q: Before we started, how did you feel listening to Brazilians speak naturally?

A: Before we started, I could not understand Brazilians speaking naturally at all.

Q: What was it like listening to the same audio multiple times in the lessons? Do you notice yourself understanding things that used to sound too fast or unclear?

A: I really enjoyed listening to the audio multiple times. It's nice to hear the speed at which they're speaking and trying to understand all the words. I would definitely say that I can understand more things that used to sound too fast and unclear. There are a few small words that I don't catch, but it will get better with practice.

Q: How did you feel about your pronunciation before we started, and what changed after practicing sounds like R, LH, and NH?

A: My pronunciation was horrible and I think it's gotten better. Practicing those sounds have made pronouncing words easier.

Name: Lauren, United States

## SECTION 7 (dark green) OFFER

Two columns on desktop (mockup left, text right), stacked on mobile with the mockup on top.

The mockup column uses the EBOOK MOCKUP SLOT with MOCKUP_IMAGE_SECTION_7.

H2: Understand Real Brazilian Portuguese at the Airport

Paragraph: Complete ebook (PDF with clickable audio links) + a folder with all the audio files.

Price line: One-time payment of $19. (make "$19" large and bold in #5CDC5C)

[Button: Get instant access]

Directly under the button, small centered text with a shield icon (not a new section):

30-DAY GUARANTEE

Try the ebook for 30 days. If you decide it's not the right material for you, you can request a full refund within 30 days.

## SECTION 8 (light) TEACHER

Small label in #1a6b1a: MEET YOUR TEACHER

H2: Created by a Brazilian Portuguese teacher

TEACHER PHOTO SLOT next to (desktop) or above (mobile) the text:

I'm Carolina, a Brazilian Portuguese teacher, and I've been teaching Portuguese to foreigners for 4 years.

During this time, I've worked with students from countries including the USA, UK, Netherlands, Colombia, Mexico, Japan, and Italy.

I also run Brazilian Cousin, where I create content about Brazilian Portuguese — from pronunciation and grammar difficulties to expressions and the way Brazilians actually speak in everyday life.

I created this material based on what I've seen learners struggle with again and again: understanding spoken Brazilian Portuguese and feeling comfortable with the way it sounds in real conversations.

My goal is simple: to help you prepare for the Portuguese you're actually going to hear in Brazil.

## SECTION 9 (dark green) FAQ

H2: Frequently Asked Questions

Build the FAQ as a click-to-open accordion:

- ALL answers are hidden by default. Only the questions are visible when the page loads.

- The visitor clicks (or taps) a question to reveal its answer. Clicking it again closes it.

- Only one answer is open at a time: opening a question automatically closes the previously opened one.

- Each question row is a full-width <button> (the entire row is clickable, not just the text or the icon), with a minimum height of 56px for easy tapping on mobile.

- On the right side of each question, show a chevron (or plus/minus) icon in #5CDC5C. It rotates (or switches to minus) when the item is open.

- Smooth open/close animation (about 250ms height + fade).

- Question text: Inter SemiBold, white, left-aligned, wraps to multiple lines on mobile without cutting off.

- Answer text: Inter Regular, #f4f4f0, with 16px padding below the question, and keep the paragraph breaks from the copy.

- Subtle divider line (white at 15% opacity) between items.

- Accessibility: use aria-expanded and aria-controls on each button, and make it work with keyboard (Enter/Space).

- Do not use hover-to-open. It must open on click/tap only. 

Copy:

Q: I already speak some Portuguese. Will this still help me?

A: Yes. Many learners can already form sentences and communicate basic ideas, but still struggle to understand Brazilians when they speak naturally.

This ebook focuses specifically on listening practice and becoming more familiar with spoken Brazilian Portuguese.

Q: Is this for complete beginners?

A: This material is best for learners who already know some basic Portuguese and want more listening and pronunciation practice before traveling to Brazil.

The phrases, dialogues, and explanations will be much easier to follow if you already have some familiarity with the language.

Q: Will this help with pronunciation too?

A: Yes. While the main goal of the ebook is to help you understand spoken Portuguese more easily, you can also use the audio recordings for pronunciation practice by listening and repeating the phrases out loud, which is the principle of shadowing.

Q: Do I need to memorize everything before my trip?

A: No. The goal isn't to memorize every phrase.

The goal is to become more familiar with the sounds, words, and patterns you're likely to hear, so airport conversations feel easier to follow.

Q: Is this focused on grammar?

A: No. This ebook focuses on listening practice rather than teaching Portuguese grammar.

Q: Why are there two audio versions in the THEY SAY sections?

A: The slow version helps you hear the words and pronunciation more clearly.

The natural-speed version helps you get used to the way Brazilian Portuguese sounds in everyday conversation, including contractions, abbreviations, and pronunciation patterns.

Both versions are included in the same audio file.

Q: Is this Brazilian Portuguese?

A: Yes. All audio recordings and dialogues use Brazilian Portuguese.

Q: Are the audio recordings made with AI?

A: No. The audio recordings were not generated with AI.

The voices you'll hear in the material are real voices: mine, my boyfriend's, and my father's.

I wanted the material to give you exposure to real voices and different ways of hearing Brazilian Portuguese.

Q: How do the audio recordings work?

A: Every phrase and dialogue contains a clickable audio link inside the PDF.

Simply click the text to open the audio in a new tab while you study.

Q: How are the audio files delivered?

A: The ebook already includes clickable audio links for all phrases and dialogues.

You will also receive a separate folder containing all the audio files, organized by topic and section.

Q: Can I use the ebook on my phone?

A: For the best experience, I recommend using a computer or tablet for the practice.

At certain points, you'll need to listen to the audio while reading the Portuguese sentence at the same time. Using two screens makes this much easier.

## SECTION 10 (light) CLOSING

H2: Practice before you arrive in Brazil.

Paragraph: Start preparing for the Portuguese you're going to hear at the airport.

Subtitle: Listen. Repeat. Practice.

Paragraph: And arrive feeling more prepared for real conversations in Brazilian Portuguese.

[Button: Get instant access]

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c52b5bf7-568d-4019-8951-87d9328017cf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
