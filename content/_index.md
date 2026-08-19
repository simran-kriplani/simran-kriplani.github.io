---
# Leave the homepage title empty to use the site title
title: ""
date: 2024-01-01
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: About Me
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: collection
    id: posts
    content:
      title: Recent Posts
      filters:
        folders:
          - posts
      # Choose how many pages you would like to display (0 = all pages)
      count: 8
      # Choose how to sort blog posts
      sort_by: Date
      sort_order: descending
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Get in touch
      subtitle:
      text: |-
        Ready to connect? Feel free to reach out!
      # Contact (add or remove contact options as necessary)
      email: paws.simran@gmail.com
      phone: ""
      appointment_url: ""
      address:
        street: ""
        city: ""
        region: ""
        postcode: ""
        country: Canada
      directions: ""
      office_hours: []
      contact_links:
        - icon: envelope
          icon_pack: fas
          name: Email me
          link: 'mailto:paws.simran@gmail.com'
        - icon: github
          icon_pack: fab
          name: GitHub
          link: 'https://github.com/simran-kriplani'
        - icon: linkedin
          icon_pack: fab
          name: LinkedIn
          link: 'https://linkedin.com/simran-kriplani'
    design:
      columns: '2'
---
