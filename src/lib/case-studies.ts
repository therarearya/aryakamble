import brunch1 from "@/assets/she-e-o-brunch-01.jpg.asset.json";
import brunch2 from "@/assets/she-e-o-brunch-02.jpg.asset.json";
import brunch3 from "@/assets/she-e-o-brunch-03.jpg.asset.json";
import brunch4 from "@/assets/she-e-o-brunch-04.jpg.asset.json";
import wp1 from "@/assets/womenpreneur-india-01.jpg.asset.json";
import wp2 from "@/assets/womenpreneur-india-02.jpg.asset.json";
import smb1 from "@/assets/she-means-business-cover.jpg.asset.json";
import smb2 from "@/assets/she-means-business-02.jpg.asset.json";
import smb3 from "@/assets/she-means-business-03.jpg.asset.json";
import smb4 from "@/assets/she-means-business-04.jpg.asset.json";
import valCover from "@/assets/valentines-cofounder-cover.png.asset.json";
import val1 from "@/assets/valentines-cofounder-01.jpg.asset.json";
import val2 from "@/assets/valentines-cofounder-02.jpg.asset.json";
import val3 from "@/assets/valentines-cofounder-03.jpg.asset.json";
import sh1 from "@/assets/shanay-social-launch-01.jpg.asset.json";
import sh2 from "@/assets/shanay-social-launch-02.jpg.asset.json";
import sh3 from "@/assets/shanay-social-launch-03.jpg.asset.json";
import sh4 from "@/assets/shanay-social-launch-04.jpg.asset.json";
import cp1 from "@/assets/concept-posts-01.jpg.asset.json";
import cp2 from "@/assets/concept-posts-02.jpg.asset.json";
import cp3 from "@/assets/concept-posts-03.jpg.asset.json";
import cp4 from "@/assets/concept-posts-04.jpg.asset.json";
import cp5 from "@/assets/concept-posts-05.jpg.asset.json";
import cp6 from "@/assets/concept-posts-06.jpg.asset.json";
import cp7 from "@/assets/concept-posts-07.jpg.asset.json";
import deli1 from "@/assets/freelance-deli-01.jpg.asset.json";
import deli2 from "@/assets/freelance-deli-02.jpg.asset.json";
import bb01 from "@/assets/bluebird-01.jpg.asset.json";
import bb02 from "@/assets/bluebird-02.jpg.asset.json";
import bb03 from "@/assets/bluebird-03.jpg.asset.json";
import bb04 from "@/assets/bluebird-04.jpg.asset.json";
import bb05 from "@/assets/bluebird-05.jpg.asset.json";
import bb06 from "@/assets/bluebird-06.jpg.asset.json";
import bb07 from "@/assets/bluebird-07.jpg.asset.json";
import bb08 from "@/assets/bluebird-08.jpg.asset.json";
import bb09 from "@/assets/bluebird-09.jpg.asset.json";
import bb10 from "@/assets/bluebird-10.jpg.asset.json";
import bb11 from "@/assets/bluebird-11.jpg.asset.json";
import bb12 from "@/assets/bluebird-12.jpg.asset.json";
import bb13 from "@/assets/bluebird-13.jpg.asset.json";
import bb14 from "@/assets/bluebird-14.jpg.asset.json";
import bb15 from "@/assets/bluebird-15.jpg.asset.json";
import bb16 from "@/assets/bluebird-16.jpg.asset.json";
import bb17 from "@/assets/bluebird-17.jpg.asset.json";
import bb18 from "@/assets/bluebird-18.jpg.asset.json";
import bb19 from "@/assets/bluebird-19.jpg.asset.json";
import bb20 from "@/assets/bluebird-20.jpg.asset.json";
import bb21 from "@/assets/bluebird-21.jpg.asset.json";
import bb22 from "@/assets/bluebird-22.jpg.asset.json";
import bb23 from "@/assets/bluebird-23.jpg.asset.json";
import bb24 from "@/assets/bluebird-24.jpg.asset.json";

export type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  href?: string;
  cta?: string;
};

export type Block =
  | { kind: "prose"; num: string; kicker: string; heading: string; paras: string[] }
  | { kind: "stats"; items: { value: string; label: string }[] }
  | { kind: "bullets"; num: string; kicker: string; heading: string; items: string[] }
  | {
      kind: "steps";
      num: string;
      kicker: string;
      heading: string;
      items: { title: string; body: string }[];
    }
  | {
      kind: "phases";
      num: string;
      kicker: string;
      heading: string;
      items: { tag: string; title: string; body: string; href?: string; cta?: string }[];
    }
  | {
      kind: "gallery";
      num: string;
      kicker: string;
      heading: string;
      note?: string;
      columns: 2 | 3 | 4;
      items: GalleryItem[];
    }
  | {
      kind: "media";
      num: string;
      kicker: string;
      heading: string;
      body: string;
      href: string;
      cta: string;
    };

export type CaseStudy = {
  slug: string;
  num: string;
  client: string;
  discipline: string;
  title: string;
  summary: string;
  lead: string;
  tags: string[];
  cover: string;
  blocks: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "she-e-o-brunch",
    num: "01",
    client: "NTWRK India",
    discipline: "Event Marketing",
    title: "She-E-O's Brunch",
    summary:
      "Turned a ₹30,000 founder event into a full content pipeline across pre-event, live coverage and post-event storytelling.",
    lead: "How I executed a high-impact founder event with startup resources — turning a ₹30,000 International Women's Day event into a premium, content-led brand experience.",
    tags: ["Event Marketing", "Social Media Marketing", "Creative Direction", "Event Coverage"],
    cover: brunch1.url,
    blocks: [
      {
        kind: "prose",
        num: "01",
        kicker: "Project snapshot",
        heading: "Premium founder experience. ₹30,000 budget.",
        paras: [
          "She-E-O's Brunch was an invite-only International Women's Day networking event for women founders hosted by NTWRK India.",
          "The goal was to deliver a premium founder experience while maximising brand visibility before, during and after the event.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "₹30K", label: "total event budget" },
          { value: "50%", label: "venue discount secured" },
          { value: "3", label: "content phases: pre · live · post" },
        ],
      },
      {
        kind: "bullets",
        num: "02",
        kicker: "My role",
        heading: "I owned the content layer — and helped make the event happen.",
        items: [
          "Led the event's content strategy across pre-event, live and post-event campaigns.",
          "Creatively directed branding assets with the design team.",
          "Secured a venue at a 50% discounted rate to keep the event within budget.",
          "Curated the gifting experience by sourcing vendors, negotiating prices and assembling premium gift kits.",
          "Assisted with on-ground production, founder interviews and event videography.",
        ],
      },
      {
        kind: "steps",
        num: "03",
        kicker: "Challenges",
        heading: "Small budget. Limited production. High expectations.",
        items: [
          {
            title: "Budget constraints",
            body: "Hosted a premium founder event within ₹30,000 by negotiating vendor rates, securing a discounted venue and optimising the event menu.",
          },
          {
            title: "Limited resources",
            body: "With only one videographer available, I stepped into production to help film content and conduct founder interviews, ensuring comprehensive event coverage.",
          },
          {
            title: "Brand experience",
            body: "Every touchpoint — from gifting and printed collateral to the photo booth and content strategy — was planned to make attendees feel part of a premium founder community.",
          },
        ],
      },
      {
        kind: "gallery",
        num: "04",
        kicker: "On the ground",
        heading: "The room, the founders, the brand.",
        columns: 2,
        items: [
          { src: brunch1.url, alt: "She-E-O's Brunch event moment" },
          { src: brunch2.url, alt: "Founders networking at She-E-O's Brunch" },
          { src: brunch3.url, alt: "Branded event collateral at She-E-O's Brunch" },
          { src: brunch4.url, alt: "Founder interview setup at She-E-O's Brunch" },
        ],
      },
      {
        kind: "phases",
        num: "05",
        kicker: "Marketing strategy",
        heading: "One event. Three content windows.",
        items: [
          {
            tag: "Pre-event",
            title: "Build anticipation.",
            body: "Announcement campaigns, founder outreach and invite-only social content across Instagram and LinkedIn.",
            href: "https://www.linkedin.com/posts/jeetchandan_this-womens-day-we-dont-just-want-to-celebrate-activity-7433016761542950914-BR9D/",
            cta: "View pre-event post",
          },
          {
            tag: "During",
            title: "Capture the room.",
            body: "Live coverage, founder vox-pop interviews and behind-the-scenes content designed to show the experience authentically.",
            href: "https://www.instagram.com/reels/DVnQQFQCHAl/",
            cta: "View live reel",
          },
          {
            tag: "Post-event",
            title: "Extend the impact.",
            body: "Highlight reels, curated photo content and a recap vlog to reinforce NTWRK India's founder-first community.",
            href: "https://www.instagram.com/reels/DVvn0Wzk-_p/",
            cta: "View highlight reel",
          },
        ],
      },
      {
        kind: "media",
        num: "06",
        kicker: "Event coverage",
        heading: "Turn the event into a story.",
        body: "The event coverage vlog brought together the people, conversations, atmosphere and brand experience beyond the feed. Filmed at Balsa, Worli, Mumbai.",
        href: "https://www.youtube.com/watch?v=iGUOoQoj-yM",
        cta: "Watch on YouTube",
      },
      {
        kind: "prose",
        num: "07",
        kicker: "Distribution",
        heading: "Designed for the channels where the community already lives.",
        paras: [
          "Instagram carried the live and post-event storytelling through reels and event content.",
          "LinkedIn carried the professional narrative — from the announcement to the post-event story.",
          "YouTube gave the event a longer-form home through the recap vlog.",
        ],
      },
    ],
  },
  {
    slug: "womenpreneur-india",
    num: "02",
    client: "NTWRK India",
    discipline: "Event Marketing",
    title: "Womenpreneur India",
    summary:
      "Built a content-first sponsorship strategy around founder interviews, vox-pops and short-form event content.",
    lead: "Turning an event sponsorship into a content opportunity — with founder interviews, vox-pops and short-form content built around the people in the room.",
    tags: ["Event Sponsorship", "Content Strategy", "On-Ground Production", "Vox-Pops"],
    cover: wp1.url,
    blocks: [
      {
        kind: "prose",
        num: "01",
        kicker: "Strategy & pre-event planning",
        heading: "Maximising the return on sponsorship.",
        paras: [
          "Since we sponsored Womenpreneur India, I wanted to maximise the value of the sponsorship beyond physical brand visibility. I developed a content-first strategy around founder interviews and short-form event content.",
          "Before the event, I prepared the reel questions and content prompts, while coordinating with graphic designers and vendors to get the standee and other branding material designed and ready.",
        ],
      },
      {
        kind: "prose",
        num: "02",
        kicker: "On-ground content production",
        heading: "Designing the content around real conversations.",
        paras: [
          "At the event, I coordinated with the creative and shoot team to set up the interview space and briefed the camera and lighting teams on the content we wanted to capture.",
          "I approached and introduced myself to the founders, explained the format and made them comfortable before the shoot. I also briefed the host and developed relevant questions on the spot based on each founder, so the conversations felt natural rather than scripted.",
          "Alongside the founder interviews, I executed the planned Instagram coverage through vox-pop questions with founders and attendees, capturing different perspectives from the event.",
        ],
      },
      {
        kind: "gallery",
        num: "03",
        kicker: "Published content",
        heading: "The vox-pops.",
        note: "Both reels from the event. Click either cover to view the original Reel on Instagram.",
        columns: 2,
        items: [
          {
            src: wp1.url,
            alt: "Womenpreneur India vox pop reel cover",
            label: "Vox Pop Reel 01",
            caption: "Founder-focused event conversation captured for short-form social content.",
            href: "https://www.instagram.com/reel/DS4Sbg4DQOA/",
            cta: "Watch reel",
          },
          {
            src: wp2.url,
            alt: "Womenpreneur India second vox pop reel cover",
            label: "Vox Pop Reel 02",
            caption: "Second founder and attendee perspective captured on-ground for social content.",
            href: "https://www.instagram.com/reel/DTaonEZiF6u/",
            cta: "Watch reel",
          },
        ],
      },
    ],
  },
  {
    slug: "she-means-business",
    num: "03",
    client: "NTWRK India",
    discipline: "Podcast Marketing",
    title: "She Means Business",
    summary:
      "Promoted a podcast built around women founders, their journeys and the messages they want the next generation to hear.",
    lead: "A podcast built around women founders — their journeys, their perspectives, and the messages they want the next generation of women in business to hear.",
    tags: ["Podcast Marketing", "Social Media", "Content Promotion", "Women Founders"],
    cover: smb1.url,
    blocks: [
      {
        kind: "prose",
        num: "01",
        kicker: "The brief",
        heading: "Give women founders a platform — then make the stories worth stopping for.",
        paras: [
          "She Means Business was created as a podcast targeting women founders, sharing their entrepreneurial journeys and messages for upcoming women looking to thrive in business.",
          "The promotion needed to introduce the series, build curiosity around the founders and give the podcast a recognisable visual identity across social.",
        ],
      },
      {
        kind: "media",
        num: "02",
        kicker: "The series",
        heading: "A podcast playlist, built for the feed and the long form.",
        body: "Every episode was cut for social while the full conversations lived on YouTube as a growing playlist.",
        href: "https://youtube.com/playlist?list=PLMcQ8OrAhQENSw1CO_S14wnlyHRcc2vdL",
        cta: "Watch the podcast on YouTube",
      },
      {
        kind: "gallery",
        num: "03",
        kicker: "Social promotion",
        heading: "Three posts. One clear podcast identity.",
        note: "The Instagram rollout used a consistent visual language to introduce the show and its founder-led stories. Each creative links to the live post.",
        columns: 3,
        items: [
          {
            src: smb2.url,
            alt: "She Means Business Instagram post one",
            label: "01 · Instagram",
            href: "https://www.instagram.com/p/DVQVbrOE9br/",
            cta: "Open post",
          },
          {
            src: smb3.url,
            alt: "She Means Business Instagram post two",
            label: "02 · Instagram",
            href: "https://www.instagram.com/p/DVRCMIaiHcB/",
            cta: "Open post",
          },
          {
            src: smb4.url,
            alt: "She Means Business Instagram post three",
            label: "03 · Instagram",
            href: "https://www.instagram.com/p/DVTYrY5k9z_/?img_index=1",
            cta: "Open post",
          },
        ],
      },
    ],
  },
  {
    slug: "valentines-cofounder",
    num: "04",
    client: "NTWRK India",
    discipline: "Campaign Development",
    title: "Valentine's Day, but make it business",
    summary:
      "Reframed Valentine's Week as “Will You Be My Co-Founder?” to connect love, partnership, ambition and entrepreneurship.",
    lead: "I turned Valentine's Week into a “Will You Be My Co-Founder?” campaign — reframing a familiar cultural moment around partnership, ambition and entrepreneurship.",
    tags: ["Campaign Concept", "Creative Strategy", "Social Media", "Short-Form Content"],
    cover: val1.url,
    blocks: [
      {
        kind: "prose",
        num: "01",
        kicker: "The idea",
        heading: "What if your Valentine was your co-founder?",
        paras: [
          "The goal was to launch a creative campaign that reimagined Valentine's Week through the lens of entrepreneurship — showing that some bonds were meant for more than love stories; they were meant for building businesses together.",
          "I brought together love, partnership, ambition and entrepreneurship to make the familiar Valentine's narrative feel fresh and relevant to founders.",
        ],
      },
      {
        kind: "gallery",
        num: "02",
        kicker: "The campaign",
        heading: "A three-part Reel sequence.",
        note: "Click any visual to open the original Instagram Reel.",
        columns: 3,
        items: [
          {
            src: val1.url,
            alt: "Valentine's co-founder campaign reel one",
            label: "Reel 01",
            href: "https://www.instagram.com/reel/DUoQvE4DUki/",
            cta: "View reel",
          },
          {
            src: val2.url,
            alt: "Valentine's co-founder campaign reel two",
            label: "Reel 02",
            href: "https://www.instagram.com/reel/DUsk8uUjbJZ/",
            cta: "View reel",
          },
          {
            src: val3.url,
            alt: "Valentine's co-founder campaign reel three",
            label: "Reel 03",
            href: "https://www.instagram.com/reel/DUtJ2zmjac_/",
            cta: "View reel",
          },
        ],
      },
      {
        kind: "prose",
        num: "03",
        kicker: "Campaign thinking",
        heading: "Use a familiar moment. Give it a founder's lens.",
        paras: [
          "Instead of creating another generic Valentine's post, the campaign used the cultural conversation around relationships to speak directly to an entrepreneurial audience — making the idea of partnership literal, playful and business-focused.",
        ],
      },
    ],
  },
  {
    slug: "shanay-social-launch",
    num: "05",
    client: "MiniMinds",
    discipline: "Social Media Marketing",
    title: "Shanay Silver 925 — Social Launch",
    summary:
      "Built the social content system for a new silver jewellery brand, translating competitor research and visual trend analysis into a consistent premium launch feed.",
    lead: "Built the social content system for a new silver jewellery brand — starting with competitor research and visual trend analysis, then translating the direction into a consistent, premium launch feed.",
    tags: [
      "Social Media Strategy",
      "Competitor Research",
      "Content Creation",
      "Copywriting",
      "Visual Direction",
    ],
    cover: sh1.url,
    blocks: [
      {
        kind: "prose",
        num: "01",
        kicker: "Strategy before posting",
        heading: "Research first, feed second.",
        paras: [
          "I researched competitor brands, studied visual trends and used Pinterest mood boards to define an elegant, aspirational and consistent visual language for Shanay Silver 925.",
        ],
      },
      {
        kind: "prose",
        num: "02",
        kicker: "Execution",
        heading: "Turning the direction into content.",
        paras: [
          "The visual direction was translated into a mix of static creatives and Reels designed for Instagram, while keeping the brand identity consistent across the content pipeline.",
        ],
      },
      {
        kind: "gallery",
        num: "03",
        kicker: "Selected launch posts",
        heading: "From curiosity to conversion.",
        note: "Four pieces showing how the launch moved from curiosity and product teasing into promotional content.",
        columns: 4,
        items: [
          {
            src: sh1.url,
            alt: "Shanay Silver 925 teaser post",
            label: "01 · Teaser",
            href: "https://www.instagram.com/p/DKZ78USs7WN/",
            cta: "Open post",
          },
          {
            src: sh2.url,
            alt: "Shanay Silver 925 product tease post",
            label: "02 · Product tease",
            href: "https://www.instagram.com/p/DK6reXWROrH/",
            cta: "Open post",
          },
          {
            src: sh3.url,
            alt: "Shanay Silver 925 launch build-up reel",
            label: "03 · Launch build-up",
            href: "https://www.instagram.com/reel/DKcXDLgsNfj/",
            cta: "Open post",
          },
          {
            src: sh4.url,
            alt: "Shanay Silver 925 launch sale content",
            label: "04 · Launch / sale",
            href: "https://www.instagram.com/reel/DKhilRxt_HG/",
            cta: "Open post",
          },
        ],
      },
    ],
  },
  {
    slug: "concept-posts",
    num: "06",
    client: "Creative Concepts",
    discipline: "Social Media",
    title: "Concept Posts",
    summary:
      "A carousel built around the idea that networking is not a one-time interaction, using growth and nurturing as the visual metaphor.",
    lead: "A carousel built around a simple idea: networking is not a one-time interaction. The visual story uses growth and nurturing as the metaphor for building relationships that compound over time.",
    tags: ["Concept Development", "Social Content", "Copywriting"],
    cover: cp1.url,
    blocks: [
      {
        kind: "gallery",
        num: "01",
        kicker: "Carousel",
        heading: "The full sequence.",
        columns: 3,
        items: [
          { src: cp1.url, alt: "Networking concept carousel slide one" },
          { src: cp2.url, alt: "Networking concept carousel slide two" },
          { src: cp3.url, alt: "Networking concept carousel slide three" },
          { src: cp4.url, alt: "Networking concept carousel slide four" },
          { src: cp5.url, alt: "Industry snapshot concept post — fintech" },
          { src: cp6.url, alt: "Industry snapshot concept post — logistics" },
          { src: cp7.url, alt: "Industry snapshot concept post — SaaS" },
        ],
      },
      {
        kind: "steps",
        num: "02",
        kicker: "Creative thinking",
        heading: "One thought, one device.",
        items: [
          {
            title: "Core thought",
            body: "Networking should be treated as an ongoing relationship, not a single exchange.",
          },
          {
            title: "Visual device",
            body: "Plant growth turns an abstract networking principle into something immediately understandable — small actions, consistency and mutual effort lead to stronger connections.",
          },
        ],
      },
      {
        kind: "prose",
        num: "03",
        kicker: "Industry snapshots",
        heading: "Market intelligence, made scrollable.",
        paras: [
          "A content pillar built around quick, visual market intelligence — turning industry trends, challenges and opportunities into easy-to-digest social content across fintech, logistics and SaaS.",
        ],
      },
    ],
  },
  {
    slug: "freelance-deli",
    num: "07",
    client: "Freelance",
    discipline: "Social Content",
    title: "The Deli",
    summary:
      "Food-led social content combining polished visual editing, product presentation and platform-ready post design.",
    lead: "A freelance social content project focused on turning food photography into polished, editorial-style posts designed to make the product the hero.",
    tags: ["Social Content", "Visual Editing", "Post Design", "Food Content"],
    cover: deli1.url,
    blocks: [
      {
        kind: "prose",
        num: "01",
        kicker: "Creative approach",
        heading: "Make the dish the hero.",
        paras: [
          "Used strong food photography, typography and composition to create premium-looking social assets while keeping the dish and its details visually dominant.",
          "Edited and developed platform-ready food posts, combining image treatment, typography, hierarchy and product-focused storytelling.",
        ],
      },
      {
        kind: "gallery",
        num: "02",
        kicker: "Selected posts",
        heading: "Two examples from the project.",
        columns: 2,
        items: [
          {
            src: deli1.url,
            alt: "Golden Drizzle food social post",
            label: "Golden Drizzle",
            caption: "Food-led social post with editorial typography and product-focused treatment.",
          },
          {
            src: deli2.url,
            alt: "Espresso French Toast food social post",
            label: "Espresso French Toast",
            caption: "Built around premium composition, typography and visual hierarchy.",
          },
        ],
      },
    ],
  },
  {
    slug: "bluebird-company-profile",
    num: "08",
    client: "Blue Bird Industries",
    discipline: "Branding · Freelance",
    title: "Blue Bird Industries — Company Profile",
    summary:
      "A 24-page corporate profile developed end-to-end, from discovery and content planning to design, client communication and print coordination.",
    lead: "A 24-page corporate profile developed end-to-end — from company discovery and content planning to copy, visual direction, design, client communication and print coordination.",
    tags: ["Branding", "Corporate Profile", "Copywriting", "Graphic Design", "Client Servicing"],
    cover: bb01.url,
    blocks: [
      {
        kind: "prose",
        num: "01",
        kicker: "The project",
        heading: "Turning company information into a sales-ready brand document.",
        paras: [
          "The brief required more than putting information into pages. I structured the company's story, capabilities, product portfolio, clients, projects, certifications and contact information into a cohesive profile.",
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "24", label: "page corporate profile" },
          { value: "8", label: "stage end-to-end process" },
          { value: "1", label: "print run coordinated in budget" },
        ],
      },
      {
        kind: "steps",
        num: "02",
        kicker: "End-to-end process",
        heading: "From first brief to final print.",
        items: [
          {
            title: "Discovery & requirement gathering",
            body: "Understood the company's business, offerings, audience, existing materials and what the profile needed to communicate.",
          },
          {
            title: "Research & content mapping",
            body: "Organised the information into a clear narrative covering company overview, process, systems, products, differentiators, clients, projects, certifications and contact.",
          },
          {
            title: "Content development",
            body: "Wrote and refined the page copy, simplifying technical information while keeping the document professional and business-focused.",
          },
          {
            title: "Visual direction",
            body: "Established page hierarchy, visual language, image treatment and layout so the 24 pages felt like one brand document.",
          },
          {
            title: "AI-assisted imagery & design",
            body: "Created supporting visual assets where required and integrated them with product photography, diagrams, icons and company material.",
          },
          {
            title: "Client communication",
            body: "Handled requirement clarification, shared drafts, collected feedback, managed revisions and kept approvals moving.",
          },
          {
            title: "Finalisation & quality checks",
            body: "Reviewed the full profile for consistency, content accuracy, page flow and print readiness before final delivery.",
          },
          {
            title: "Vendor coordination",
            body: "Coordinated the printing process and vendor requirements to deliver the final profile cost-efficiently within the allocated budget.",
          },
        ],
      },
      {
        kind: "prose",
        num: "03",
        kicker: "Client handling",
        heading: "Keeping the creative process moving.",
        paras: [
          "I managed the project as a client-facing workflow — translating the brief into concrete deliverables, communicating progress, handling feedback and revisions, aligning stakeholders and coordinating final approvals rather than treating design as a one-way handoff.",
        ],
      },
      {
        kind: "gallery",
        num: "04",
        kicker: "Final deliverable",
        heading: "The complete 24-page profile.",
        note: "Every page of the delivered document, in order.",
        columns: 3,
        items: [
          bb01, bb02, bb03, bb04, bb05, bb06, bb07, bb08, bb09, bb10, bb11, bb12,
          bb13, bb14, bb15, bb16, bb17, bb18, bb19, bb20, bb21, bb22, bb23, bb24,
        ].map((a, i) => ({
          src: a.url,
          alt: `Blue Bird Industries company profile page ${i + 1}`,
          label: `Page ${String(i + 1).padStart(2, "0")}`,
        })),
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
