---
layout: page
title: News
eyebrow: Updates
subtitle: "Research, publications, talks, service and opportunities."
permalink: /news/
---

<div class="timeline">
{% for item in site.data.news %}
<div class="timeline-item">
  <time>{{ item.date }}</time>
  <div>
    {% if item.category %}<span class="news-category">{{ item.category }}</span>{% endif %}
    <p>{{ item.text }}</p>
  </div>
</div>
{% endfor %}
</div>

<div class="intro-callout">
To add news, edit <code>_data/news.yml</code>. Put the newest item at the top.
</div>
