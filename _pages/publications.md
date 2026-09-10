---
layout: page
title: Publications
eyebrow: Research Outputs
subtitle: "Selected publications and representative research outputs. For the most current citation record, please use Google Scholar."
permalink: /publications/
---

<div class="publication-toolbar">
  <a class="button secondary" href="{{ site.links.google_scholar }}" target="_blank" rel="noopener">Google Scholar ↗</a>
  {% if site.links.cv != '' %}<a class="button secondary" href="{{ site.links.cv | relative_url }}">Download CV ↓</a>{% endif %}
</div>

{% assign years = site.data.publications | map: "year" | uniq %}
{% for year in years %}
## {{ year }}

<div class="publication-list">
{% assign pubs = site.data.publications | where: "year", year %}
{% for pub in pubs %}
<article class="publication-item">
  <div class="pub-year">{{ pub.type | default: "Paper" }}</div>
  <div>
    <h3>{{ pub.title }}</h3>
    {% if pub.authors %}<p class="pub-authors">{{ pub.authors }}</p>{% endif %}
    <p class="pub-meta">{{ pub.venue }}</p>
    {% if pub.note %}<p>{{ pub.note }}</p>{% endif %}
    <div class="pub-links">
      {% if pub.url %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Paper ↗</a>{% endif %}
      {% if pub.doi %}<a href="{{ pub.doi }}" target="_blank" rel="noopener">DOI ↗</a>{% endif %}
      {% if pub.code %}<a href="{{ pub.code }}" target="_blank" rel="noopener">Code ↗</a>{% endif %}
    </div>
  </div>
</article>
{% endfor %}
</div>
{% endfor %}

<div class="intro-callout">
<strong>Easy maintenance:</strong> add or edit papers in <code>_data/publications.yml</code>. No HTML editing is required.
</div>
