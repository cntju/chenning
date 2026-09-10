---
layout: page
title: People
eyebrow: Research Community
subtitle: "Research is collaborative. This page is designed to grow from an individual profile into a clear record of students, collaborators and alumni."
permalink: /people/
---

## Principal Researcher

<div class="people-grid">
{% for person in site.data.people %}
<div class="person-card">
  <img src="{{ person.photo | relative_url }}" alt="{{ person.name }}">
  <div>
    <h3>{{ person.name }}</h3>
    <p class="role">{{ person.role }}</p>
    <p>{{ person.bio }}</p>
    {% if person.interests %}<p><strong>Interests:</strong> {{ person.interests }}</p>{% endif %}
    <div class="pub-links">
      {% if person.scholar %}<a href="{{ person.scholar }}" target="_blank" rel="noopener">Scholar ↗</a>{% endif %}
      {% if person.github %}<a href="{{ person.github }}" target="_blank" rel="noopener">GitHub ↗</a>{% endif %}
    </div>
  </div>
</div>
{% endfor %}
</div>

## Students & Research Collaborators

<div class="empty-state">
  <strong>Add people here as the group grows.</strong>
  <p>Edit <code>_data/people.yml</code> and add new entries. The page updates automatically after you commit the change.</p>
</div>

## Prospective Members

If you are considering a PhD, MSc dissertation, research assistantship, visiting project, or research collaboration in networking / IoT / edge intelligence, please read the [Join Us page]({{ '/join/' | relative_url }}).
