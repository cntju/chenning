---
layout: page
title: Research
eyebrow: Research Portfolio
subtitle: "I study how large-scale networked systems can remain connected, efficient and serviceable under failures, changing workloads and resource constraints."
permalink: /research/
---

<div class="intro-callout">
My research combines <strong>network science</strong>, <strong>optimization</strong>, <strong>machine learning</strong>, and <strong>distributed intelligence</strong>. A recurring theme is to move beyond static network design toward systems that can <em>sense, adapt and recover online</em>.
</div>

{% for area in site.data.research_areas %}
<section class="research-detail" id="{{ area.slug }}">
  <div class="research-number">0{{ forloop.index }}</div>
  <div>
    <h2>{{ area.title }}</h2>
    <p class="research-question"><strong>Core question:</strong> {{ area.question }}</p>
    <p>{{ area.description }}</p>
    <div class="tag-row">
      {% for tag in area.tags %}<span>{{ tag }}</span>{% endfor %}
    </div>
  </div>
</section>
{% endfor %}

## Representative Research Directions

<div class="card-grid two">
{% for project in site.data.projects %}
<div class="project-card">
  <p class="project-kicker">{{ project.category }}</p>
  <h3>{{ project.name }}</h3>
  <p>{{ project.summary }}</p>
  {% if project.focus %}<p><strong>Focus:</strong> {{ project.focus }}</p>{% endif %}
</div>
{% endfor %}
</div>

## Collaboration

I am especially interested in collaborations connecting networking with edge intelligence, industrial systems, autonomous agents, graph learning, optimization, and resilient infrastructure. If your work intersects with these areas, please see the [Join Us page]({{ '/join/' | relative_url }}).
