export type VlogPhoto = {
  file: string
  alt: string
  caption: string
}

export type VlogChapter = {
  title: string
  text: string
  photos: VlogPhoto[]
}

export type VlogStory = {
  opening: string
  chapters: VlogChapter[]
}

export const BLOG_STORIES: Record<string, VlogStory> = {
  "Things to do in Birmingham": {
    opening:
      "A little city wander for when you want to get out of the house without planning every minute. Save this for a slow Saturday: comfy shoes, something good to listen to, and plenty of room on your camera roll.",
    chapters: [
      {
        title: "Start by the water",
        text: "Birmingham makes a lovely first impression from the canals. Pick a stretch around Brindleyplace or Gas Street Basin, take the long way along the towpath and see where the day takes you.",
        photos: [
          {
            file: "things-to-do-birmingham-01.jpg",
            alt: "Canal-side view in Birmingham",
            caption: "A slow start by the canal",
          },
          {
            file: "things-to-do-birmingham-02.jpg",
            alt: "A detail from a Birmingham canal walk",
            caption: "Little details along the towpath",
          },
        ],
      },
      {
        title: "Find a favourite coffee stop",
        text: "Duck into an independent café when you need a reset. No strict itinerary, no rushing your drink — just a window seat, a little people-watching and a note of somewhere to come back to.",
        photos: [
          {
            file: "things-to-do-birmingham-03.jpg",
            alt: "Coffee and a treat at a Birmingham café",
            caption: "Coffee break, very much deserved",
          },
          {
            file: "things-to-do-birmingham-04.jpg",
            alt: "A cosy café corner in Birmingham",
            caption: "The cosy corner I claimed for a while",
          },
        ],
      },
      {
        title: "Leave room for a detour",
        text: "Have a wander through the city centre, browse the shops, then head towards Digbeth for its colourful street art and creative spaces. The best bit is usually the thing you didn't put on the list.",
        photos: [
          {
            file: "things-to-do-birmingham-05.jpg",
            alt: "Street art or a colourful wall in Birmingham",
            caption: "A colourful little detour",
          },
          {
            file: "things-to-do-birmingham-06.jpg",
            alt: "A favourite street scene from Birmingham",
            caption: "One last wander before heading home",
          },
        ],
      },
    ],
  },
  "Microdosing my dream life": {
    opening:
      "I've been thinking about the dream life as something less like a faraway finish line and more like a feeling I can make space for now. A few tiny things, repeated gently, can change the texture of an ordinary week.",
    chapters: [
      {
        title: "Make the morning feel like mine",
        text: "A drink I actually sit down to enjoy, a playlist for getting ready, and ten minutes without scrolling. It doesn't have to be an elaborate routine to feel like a kind way to begin.",
        photos: [
          {
            file: "microdosing-dream-life-01.jpg",
            alt: "A slow morning drink and breakfast",
            caption: "A softer start to the day",
          },
          {
            file: "microdosing-dream-life-02.jpg",
            alt: "A playlist, book or journal in the morning",
            caption: "Making a little space before the day starts",
          },
        ],
      },
      {
        title: "Put the nice thing on the calendar",
        text: "A walk somewhere green, cooking something new, or meeting a friend for a catch-up. Waiting for a special occasion is optional; small things can be the occasion.",
        photos: [
          {
            file: "microdosing-dream-life-03.jpg",
            alt: "A walk outdoors or a small day trip",
            caption: "A tiny adventure, just because",
          },
          {
            file: "microdosing-dream-life-04.jpg",
            alt: "A meal or moment shared with a friend",
            caption: "The best plans are the ones we make time for",
          },
        ],
      },
      {
        title: "Collect proof that it's already happening",
        text: "A photo from a good afternoon, a note about something that made me laugh, a finished little task. Not a checklist for becoming someone else — just reminders to notice the life I'm already building.",
        photos: [
          {
            file: "microdosing-dream-life-05.jpg",
            alt: "A happy everyday moment worth remembering",
            caption: "A moment I want to remember",
          },
        ],
      },
    ],
  },
  "Little things I love": {
    opening:
      "A running list of the little things I want to remember to notice. Consider this a very low-stakes love letter to ordinary days — and an excuse to take far too many photos of the details.",
    chapters: [
      {
        title: "The five-minute reset",
        text: "Fresh sheets, an open window, a tidy corner of the room. Sometimes the smallest change makes home feel new again.",
        photos: [
          {
            file: "little-things-i-love-01.jpg",
            alt: "A cosy corner at home",
            caption: "My favourite little corner",
          },
          {
            file: "little-things-i-love-02.jpg",
            alt: "A sunny patch of light at home",
            caption: "Afternoon light doing its thing",
          },
        ],
      },
      {
        title: "Good things to eat and drink",
        text: "The first sip of a really good drink, a snack shared in the kitchen, finding a new favourite on the menu. Important research, obviously.",
        photos: [
          {
            file: "little-things-i-love-03.jpg",
            alt: "A favourite drink or snack",
            caption: "A very reliable little treat",
          },
          {
            file: "little-things-i-love-04.jpg",
            alt: "A meal shared with someone",
            caption: "Made better by sharing",
          },
        ],
      },
      {
        title: "The in-between bits",
        text: "A voice note from a friend, a song that finds you at the right time, laughing until you forget what the story was. These are the bits I hope I never get too busy to notice.",
        photos: [
          {
            file: "little-things-i-love-05.jpg",
            alt: "A small everyday detail that brings joy",
            caption: "One for the camera roll",
          },
        ],
      },
    ],
  },
}
