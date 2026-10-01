/*
  Inline SVG icon markup used by js/site.js. Each icon is a list of child elements;
  colour, stroke and sizing come from the CSS for the container (.fact-icon,
  .contact-list .icon, .skill-card svg), so the markup here stays minimal.
*/
window.siteIcons = {
  fact: {
    location: [
      '<path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z"/>',
      '<circle cx="12" cy="10" r="2.5"/>',
    ],
    education: [
      '<path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z"/>',
      '<path d="M7 10.8v3.7c0 1.5 2.2 3 5 3s5-1.5 5-3v-3.7"/>',
    ],
    credential: [
      '<path d="M7 4.5h10a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z"/>',
      '<path d="M9 8.5h6M9 12h6M9 15.5h4"/>',
    ],
  },

  contact: {
    email: [
      '<path d="M3 6h18v12H3z" stroke-linejoin="round" />',
      '<path d="M3 6l9 7 9-7" stroke-linejoin="round" />',
    ],
    phone: [
      '<path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C11.5 19.5 4.5 12.5 4.5 5a2 2 0 0 1 2-2z" stroke-linejoin="round" />',
    ],
    linkedin: [
      '<path d="M9 15l6-6M15 15V9H9" stroke-linecap="round" stroke-linejoin="round" />',
      '<rect x="3" y="3" width="18" height="18" rx="2" />',
    ],
  },

  skill: {
    behaviour: [
      '<path d="M4 17.5c1.2-3.1 3.6-4.7 6.9-4.7 2.5 0 4.2 1 5.4 3.2"></path>',
      '<path d="M8.5 10.8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>',
      '<path d="M15.5 8.5h3.5v3.5"></path>',
      '<path d="M18.5 8.5L14.5 12.5"></path>',
      '<path d="M4 19.5h16"></path>',
    ],
    research: [
      '<path d="M5 18.5V6.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12"></path>',
      '<path d="M8 9.5h8"></path>',
      '<path d="M8 13h8"></path>',
      '<path d="M9 18.5h6"></path>',
      '<path d="M5 21.5h14"></path>',
    ],
    strategy: [
      '<path d="M5 18.5V8.8"></path>',
      '<path d="M12 18.5V5.5"></path>',
      '<path d="M19 18.5v-9.5"></path>',
      '<path d="M3.5 18.5h17"></path>',
      '<path d="M7.5 8.5l4.5-3 4.5 3"></path>',
    ],
    data: [
      '<path d="M5 18.5V9.5"></path>',
      '<path d="M12 18.5V5.5"></path>',
      '<path d="M19 18.5v-7"></path>',
      '<path d="M3.5 18.5h17"></path>',
      '<circle cx="5" cy="9" r="1.2"></circle>',
      '<circle cx="12" cy="5" r="1.2"></circle>',
      '<circle cx="19" cy="11" r="1.2"></circle>',
    ],
    narrative: [
      '<path d="M6 6.5h12"></path>',
      '<path d="M6 11h12"></path>',
      '<path d="M6 15.5h8"></path>',
      '<path d="M6 18.5h9"></path>',
      '<path d="M17 15.5l2 2 3-4"></path>',
    ],
    ai: [
      '<path d="M9 7.5h6"></path>',
      '<path d="M7 10.5h10"></path>',
      '<path d="M8.5 14.5h7"></path>',
      '<path d="M6.5 17.5h11"></path>',
      '<path d="M12 3.5v17"></path>',
    ],
  },
};
