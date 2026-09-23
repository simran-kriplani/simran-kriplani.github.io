window.siteContent = {
  home: {
    title: "Hi! I'm Simran.",
    lede: "I study consumer and market behaviour and turn those insights into branding, positioning, and strategy. Because understanding people leads to better products, stronger strategies, and more informed decisions.",
    facts: [
      ["Location", "Toronto, Canada"],
      ["Education", "University of Toronto - HBSc Psychology & Biology, 2026"],
      ["Credential", "CFA Level I Candidate"],
    ],
    cta: "Get in touch",
    resume: {
      label: "My resume",
      href: "assets/SimranKriplani_Resume.pdf",
    },
    featured: {
      heading: "Featured work",
      items: [
        {
          tag: "featured",
          title: "A Consumer Behaviour Perspective on Canada's Grocery Oligopoly",
          description:
            "How brand architecture and dynamic pricing let a handful of conglomerates defend market share across Canada's grocery sector - and what that means for anyone trying to compete with them.",
          link: {
            href: "#case-studies:grocery-oligopoly",
            label: "See more",
          },
        },
        {
          tag: "featured",
          title: "Who's Really In Charge? Competence and Control in the age of AI",
          description:
            "A synthesis of consumer perception, AI role framing, and agency - and why the same product can feel helpful or manipulative depending on how it's positioned.",
          link: {
            href: "#case-studies:brand-anthropomorphism",
            label: "See more",
          },
        },
        {
          tag: "featured",
          title: "Applied Behavioural Strategy in Campus Leadership",
          description:
            "How campaign design, brand voice, and behaviour change frameworks translate into engagement and action when the goal is to move people, not just inform them.",
          link: {
            href: "#case-studies:campus-leadership",
            label: "See more",
          },
        },
      ],
    },
    skillsPreview: {
      heading: "Where the work draws from",
      link: { href: "#about", label: "See the full skill set" },
    },
  },

  caseStudies: {
    title: "Case studies",
    intro:
      "These sit at the intersection of behavioural science and consumer strategy - reading market data and research literature for the same thing: what people actually do, and why.",
    archiveHeading: "In the archive",
    items: [
      {
        slug: "grocery-oligopoly",
        title: "A Consumer Behaviour Perspective on Canada's Grocery Oligopoly",
        meta: "Independent research project · University of Toronto",
        paragraphs: [
          "Canada's grocery sector is dominated by a small number of conglomerates that each operate multiple retail banners spanning discount, mid-market, and premium tiers. That structure lets a single company appear to compete with itself while still controlling most of the shelf space a shopper actually sees.",
          "I processed multi-brand retail datasets in Python and Excel to trace how pricing moved across banners and time periods, and mapped the results against shifts in market share among the major players.",
          "The patterns pointed to a deliberate multi-brand strategy: premium banners protect margin while discount banners defend share, with pricing moving in tandem across the portfolio rather than banner by banner. I translated those findings into a customer strategy and positioning framework, then built a client-ready executive presentation framing the commercial and economic implications for retail stakeholders.",
        ],
        tags: [
          "Quantitative analysis",
          "Pricing strategy",
          "Market structure",
          "Executive presentations",
          "Python & Excel",
        ],
        photo: {
          src: "assets/images/headshot.png",
          alt: "Simran Kriplani portrait",
        },
        detail: {
          href: "case-studies/grocery-oligopoly.html",
          label: "Read the case study",
        },
        pdf: {
          href: "assets/case-studies/grocery-oligopoly.pdf",
          label: "View PDF",
        },
      },
      {
        slug: "brand-anthropomorphism",
        title: "Who's Really In Charge? Competence and Control in the age of AI",
        meta: "Research Assistant · UofT Rotman School of Management",
        paragraphs: [
          "Consumers increasingly form judgments about brands that behave like people - including AI systems introduced as assistants, agents, or advisors. Understanding when that framing builds trust, and when it backfires, has real implications for how companies design and position AI-driven products.",
          "Working under Dr. Pankaj Aggarwal, I combined generative AI research tools with academic databases to synthesize more than 220 articles spanning consumer judgment and AI role framing, cutting research synthesis time by roughly 40%. From there, I analysed how the various social roles of AI influence consumer perception, agency, trust, and behaviour.",
          "This work formed the frontend of an academic manuscript, building arguments that are both rigorous and meaningful.",
        ],
        tags: [
          "Literature synthesis",
          "GenAI-assisted research",
          "Behavioural frameworks",
          "Academic & technical writing",
        ],
        photo: {
          src: "assets/images/headshot.png",
          alt: "Simran Kriplani portrait",
        },
        detail: {
          href: "case-studies/brand-anthropomorphism.html",
          label: "Read the case study",
        },
        pdf: {
          href: "assets/case-studies/brand-anthropomorphism.pdf",
          label: "View PDF",
        },
      },
      {
        slug: "counterfeits",
        title: "Counterfeits",
        meta: "Research Assistant · Rotman School of Management",
        paragraphs: [
          "Two campus organizations gave me a testing ground for behavioural strategy outside the lab: one focused on making neuroscience accessible to a broad student audience, the other on encouraging students to take mental health seriously.",
          "As Vice President of Communications at SYNAPSE, I led a team that designed and ran campaigns applying behavioural principles - like shortening the distance between interest and action - to drive engagement and knowledge retention. As Director of Marketing at the Psychological Health Society, I built social campaigns that used behavioural insight to normalize help-seeking and encourage small, sustainable habit change rather than one-off calls to action.",
          "Across both, the throughline was the same: a consistent brand voice and a real content strategy do more for behaviour change than any single clever post.",
        ],
        tags: [
          "Campaign strategy",
          "Content strategy",
          "Behavioural design",
          "Brand voice",
        ],
        photo: {
          src: "assets/images/headshot.png",
          alt: "Simran Kriplani portrait",
        },
        detail: {
          href: "case-studies/campus-leadership.html",
          label: "Read the case study",
        },
        pdf: {
          href: "assets/case-studies/campus-leadership.pdf",
          label: "View PDF",
        },
      },
    ],
    archive: [
      {
        slug: "look-good-feel-good",
        title: "Look Good, Feel Good? Behaviour Change Strategies to Dress with Intention",
        meta: "Essay · 2024",
        paragraphs: [
          "This project turned the question of personal style into a behavioural research prompt: how do clothing choices shape emotion, confidence, and identity in everyday life?",
          "I framed the work around the link between self-presentation and self-perception, exploring how our choices in dress can influence not just how others see us but how we feel in our own bodies and routines.",
          "The result was a reflective, research-informed piece that translated behavioural theory into a clear, accessible argument about intention, identity, and everyday rituals.",
        ],
        tags: ["Behavioural design", "Identity", "Self-concept"],
        photo: {
          src: "assets/images/headshot.png",
          alt: "Simran Kriplani portrait",
        },
        detail: {
          href: "in-the-archive/look-good-feel-good.html",
          label: "Read the work",
        },
      },
      {
        slug: "is-this-seat-taken",
        title: "Is this Seat Taken? A Behavioural Fix for Crowded Libraries",
        meta: "Reducing Inefficient Seat Search in UofT Libraries",
        paragraphs: [
          "I built and analyzed biodiversity and population genetics datasets in Python, R, and SQL, combining computational work with ecological interpretation to uncover meaningful patterns in species dynamics.",
          "The project emphasized clean data pipelines, cross-variable analysis, and visual storytelling, turning technical outputs into insight that could be discussed with scientists and non-specialists alike.",
          "The goal was not just to model complexity, but to make the patterns legible enough to guide interpretation and decision-making.",
        ],
        tags: ["Data analysis", "Biodiversity", "Python & R"],
        photo: {
          src: "assets/images/headshot.png",
          alt: "Simran Kriplani portrait",
        },
        detail: {
          href: "in-the-archive/is-this-seat-taken.html",
          label: "Read the work",
        },
      },
      {
        slug: "coffee-cup",
        title: "Comfort, Caffeine, Connection: The Cultural Impact of the Coffee Cup",
        meta: "Creative research · 2023",
        paragraphs: [
          "This project translated a dense scientific concept into a visually compelling story about how viruses can hijack host metabolism and reshape biological systems.",
          "I combined research synthesis, narrative framing, and multimedia production to make the topic accessible without losing scientific rigour or emotional resonance.",
          "The final piece used storytelling to make a complex biological mechanism memorable, engaging, and understandable to a broader audience.",
        ],
        tags: ["Science communication", "Storytelling", "Video"],
        photo: {
          src: "assets/images/coffee-cup.png",
          alt: "Simran Kriplani portrait",
        },
        detail: {
          href: "in-the-archive/coffee-cup.html",
          label: "Read the work",
        },
      },
      {
        slug: "wellness-experiment",
        title: "Cultivating Kindness Within: A Behavioural Experiment in Self-Compassion",
        meta: "Short film · 2023",
        paragraphs: [
          "This documentary followed a reflective journey through the Ma Moosh Ka Win Valley Trail, using landscape and movement to explore themes of place, memory, and belonging.",
          "The work blended visual storytelling with personal observation, focusing on how environment shapes perspective and how travel can become a mode of reflection as well as exploration.",
          "The result was a short film that paired narrative texture with rich visual atmosphere, turning a trip into a story about transition and connection.",
        ],
        tags: ["Documentary", "Travel", "Visual storytelling"],
        photo: {
          src: "assets/images/wellness.png",
          alt: "Simran Kriplani portrait",
        },
        detail: {
          href: "in-the-archive/wellness-experiment.html",
          label: "Read the work",
        },
      },
    ],
  },

  blog: {
    title: "Blog",
    intro:
      "Short reflections on consumer behaviour, decision-making, and the strategic lessons hiding inside everyday choices.",
    archiveHeading: "From the notebook",
    items: [
      {
        slug: "why-behavioural-thinking-makes-strategy-clearer",
        title: "Why behavioural thinking makes strategy clearer",
        meta: "Essay · 2026",
        summary:
          "A note on how framing, defaults, and mental models shape the way people respond to markets, brands, and product decisions.",
        body: [
          "Strategy often looks like a problem of positioning, pricing, or product choices. In reality, it is usually a problem of interpretation: how people make sense of the options in front of them and what they believe is being asked of them.",
          "Behavioural thinking pushes the strategist to ask a more useful question than 'What is the best offer?' It asks, 'What does the customer notice first, and what are they likely to infer before they even compare alternatives?' That shift matters because attention, defaults, and framing shape action long before the final decision is made.",
          "When those mechanisms are visible, strategy becomes clearer. The brand message stops sounding like generic persuasion and starts acting like a cue about what matters, what is safer, and what is worth acting on. That is where the real work begins: not in crafting a clever claim, but in designing the environment in which people can make a sensible choice.",
        ],
        link: {
          href: "blog-post.html?slug=why-behavioural-thinking-makes-strategy-clearer",
          label: "Read more",
          external: true,
        },
      },
      {
        slug: "the-hidden-psychology-behind-pricing",
        title: "The hidden psychology behind pricing",
        meta: "Field notes · 2026",
        summary:
          "What a pricing decision looks like when you start from how people actually compare options instead of how theory assumes they should.",
        body: [
          "People rarely compare pricing the way textbooks suggest. We do not first calculate utility and then choose the economically rational option. Instead, we anchor, contrast, and infer value from context before we ever decide whether a price feels fair.",
          "That is why small changes in framing can shift perceived value more than large changes in actual cost. The difference between '$9.99' and '$10' is tiny on paper but psychologically meaningful in practice, especially when the choice is relative rather than absolute.",
          "A strong pricing strategy is therefore not simply about discounting or premium positioning. It is about understanding the mental shortcuts consumers rely on when they decide whether a price is acceptable, expensive, or suspiciously cheap. Once you start from that point, pricing stops sounding like arithmetic and starts looking like behaviour design.",
        ],
        link: {
          href: "blog-post.html?slug=the-hidden-psychology-behind-pricing",
          label: "Dive in",
          external: true,
        },
      },
      {
        slug: "what-good-research-actually-looks-like",
        title: "What good research actually looks like",
        meta: "Notebook · 2025",
        summary:
          "The difference between collecting information and turning it into a decision people can trust.",
        link: {
          href: "blog-post.html?slug=what-good-research-actually-looks-like",
          label: "Read more",
          external: true,
        },
      },
      {
        slug: "why-people-trust-ideas-that-feel-familiar",
        title: "Why people trust ideas that feel familiar",
        meta: "Reflection · 2025",
        summary:
          "A reminder that cognition is not just about facts; it is also about the emotional comfort of the pattern.",
        link: {
          href: "blog-post.html?slug=why-people-trust-ideas-that-feel-familiar",
          label: "Read more",
          external: true,
        },
      },
      {
        slug: "the-small-design-decisions-that-shape-behaviour",
        title: "The small design decisions that shape behaviour",
        meta: "Field notes · 2025",
        summary:
          "Why the most influential choices are often the ones that feel almost invisible in the moment.",
        link: {
          href: "blog-post.html?slug=the-small-design-decisions-that-shape-behaviour",
          label: "Read more",
          external: true,
        },
      },
    ],
  },

  creativeWork: {
    title: "Creative Space",
    intro:
      "Storytelling, media, and visual experiments that translate research into something people can feel, remember, and talk about.",
    items: [
      {
        slug: "research-poster",
        title: "Meat Your Match",
        meta: "Academic poster",
        tags: ["Documentary", "Travel", "Visual storytelling"],
        summary:
          "A travel-film project that turned landscape and reflection into a narrative about movement, belonging, and the textures of place.",
        body: [
          "This short documentary explored how movement, landscape, and memory can become part of the same story. I focused on creating a visual narrative that felt reflective rather than purely informational, using sound, pacing, and place-based imagery to evoke atmosphere as much as information.",
          "The goal was to show that documentary storytelling can be both intimate and expansive: a single journey can carry questions about belonging, transition, and the emotional texture of place.",
        ],
        media: {
          type: "image",
          src: "assets/images/B90-Poster.png",
          alt: "Meat Your Match academic poster",
        },
        link: {
          href: "creative-space/research-poster.html",
          label: "View the poster",
          external: true,
        },
      },
      {
        slug: "travel-video",
        title: "Travel Video",
        meta: "Multimedia · Ongoing",
        tags: ["Storytelling", "Research communication", "Multimedia"],
        summary:
          "Turning dense academic ideas into visual narratives, short-form scripts, and presentation assets that make insight accessible.",
        body: [
          "This work focuses on translating complex academic ideas into format that feels humane, memorable, and understandable to a broader audience. The aim is not to flatten the material, but to make it legible without losing the emotional or intellectual nuance behind it.",
          "Whether the medium is a short script, visual explanation, or presentation asset, the priority is the same: turn insight into a narrative that helps people feel and understand the argument at the same time.",
        ],
        media: {
          type: "video",
          src: "https://www.youtube.com/embed/P5Srb0uVHbI?si=K1Gme0TCwovMWCsj",
          alt: "Travel video",
        },
        link: {
          href: "creative-space/travel-video.html",
          label: "Collaborate",
          external: true,
        },
      },
    ],
  },

  about: {
    title: "About",
    bio: "I hold an Honours Bachelor of Science in Psychology and Biology at the University of Toronto, alongside the CFA Level I curriculum. That combination is deliberate: psychology gives me a working model of why people decide the way they do, biology trained me to treat every claim as a hypothesis to test, and the CFA program keeps that thinking anchored to how markets and companies actually behave. I'm most interested in the space where those three things meet - consumer behaviour, brand strategy, and the research underneath it all.",
    education: {
      heading: "Education",
      entries: [
        {
          title: "Honours Bachelor of Science - Psychology & Biology",
          meta: "September 2022 - May 2026",
          org: "University of Toronto",
          paragraphs: ["High distinction · Dean's List, 2023-2026."],
          coursework:
            "Relevant coursework: statistics, judgment & decision-making, behaviour modification, psychology & money, social psychology, business, advanced research methods, psychology of prejudice, cognitive neuroscience.",
        },
        {
          title: "CFA Level I Candidate",
          meta: "Expected February 2027",
          org: "CFA Institute",
        },
      ],
    },
    experience: {
      heading: "Experience",
      entries: [
        {
          title: "Research Assistant, Consumer Behaviour and Psychology",
          meta: "Sept 2025 - May 2026",
          org: "University of Toronto · Supervised by Dr. Pankaj Aggarwal",
          paragraphs: [
            {
              text: "Synthesized 220+ articles on consumer judgment and brand anthropomorphism, and co-authored a research manuscript and grant proposal.",
              link: {
                href: "#case-studies:brand-anthropomorphism",
                label: "Read the full case study",
              },
            },
          ],
        },
        {
          title:
            "Research Assistant, Therapeutic Interventions for Psychosis Laboratory",
          meta: "May - Aug 2025",
          org: "University of Toronto",
          paragraphs: [
            "Collected behavioural and cognitive data from participants using validated clinical assessments. Managed data entry, participant interaction, and debriefing in compliance with TCPS 2: CORE 2022, Good Clinical Practice, and Responsible Conduct of Research protocols.",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills",
      categories: [
        {
          name: "Consumer insights",
          tags: [
            "Consumer behavior analysis",
            "Qualitative & quantitative research",
            "Customer journey mapping",
            "Questionnaire design",
            "Survey design",
          ],
        },
        {
          name: "Data & quantitative",
          tags: [
            "Statistical analysis",
            "Econometrics",
            "Quantitative reasoning",
          ],
        },
        {
          name: "Strategy & communication",
          tags: [
            "Client-ready presentations",
            "Research summaries",
            "Campaign & content strategy",
          ],
        },
        {
          name: "Tools",
          tags: [
            "Generative AI",
            "Tableau / Power BI",
            "SQL",
            "Excel",
            "Python",
          ],
        },
        {
          name: "Ethics & compliance",
          tags: [
            "TCPS 2: CORE 2022",
            "Good Clinical Practice (GCP)",
            "Responsible Conduct of Research (RCR)",
          ],
        },
      ],
      interests:
        "behavioural finance, nudges, consumer psychology, market research, judgment and decision-making, marketing, behavioural research methods, biases and heuristics.",
    },
    leadership: {
      heading: "Leadership & extracurriculars",
      entries: [
        {
          title: "Vice President of Communications, SYNAPSE UofT",
          meta: "Sept 2023 - May 2026",
          org: "University of Toronto",
          paragraphs: [
            {
              text: "Led a communications team applying behavioural principles to make neuroscience accessible to a broad student audience.",
              link: {
                href: "#case-studies:campus-leadership",
                label: "Read the full case study",
              },
            },
          ],
        },
        {
          title: "Director of Marketing, Psychological Health Society",
          meta: "Sept 2023 - May 2026",
          org: "University of Toronto",
          paragraphs: [
            "Built social campaigns that used behavioural insight to promote mental health awareness and encourage positive habits.",
          ],
        },
      ],
    },
  },

  contact: {
    title: "Contact",
    lede: "I'm currently looking for full-time roles in consumer strategy, insights, and management consulting. If you're working on a pricing question, a brand repositioning, or just want to talk through a behavioural economics paper, I'd like to hear from you.",
    links: [
      {
        type: "email",
        label: "simrankriplani.work@gmail.com",
        sublabel: "Email",
        href: "mailto:simrankriplani.work@gmail.com",
      },
      {
        type: "phone",
        label: "+1 (365) 275-3626",
        sublabel: "Phone",
        href: "tel:+13652753626",
      },
      {
        type: "linkedin",
        label: "linkedin.com/in/simran-kriplani",
        sublabel: "LinkedIn",
        href: "https://www.linkedin.com/in/simran-kriplani/",
        external: true,
      },
    ],
  },

  footer: {
    name: "Simran Kriplani",
    location: "Toronto, Canada",
    updated: "Updated 2026",
  },
};
