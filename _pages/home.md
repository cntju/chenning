---
layout: home
title: Home
permalink: /
---

<section class="hero section-shell">
  <div class="hero-copy">
    <p class="eyebrow">NETWORKING · IoT · EDGE INTELLIGENCE · RESILIENCE</p>
    <h1>Intelligent, Autonomous &amp; <span>Resilient</span> Networked Systems</h1>
    <p class="hero-lead">
      I am <strong>Chen Ning</strong>, an MSCA Postdoctoral Fellow at the University of Exeter. My research explores how networked systems can become more robust, adaptive and intelligent under failures, uncertainty and large-scale dynamics.
    </p>
    <div class="hero-actions">
      <a class="button primary" href="{{ '/research/' | relative_url }}">Explore Research</a>
      <a class="button secondary" href="{{ '/join/' | relative_url }}">Join Us</a>
    </div>
    <div class="profile-links">
      {% if site.links.google_scholar != '' %}<a href="{{ site.links.google_scholar }}" target="_blank" rel="noopener">Google Scholar ↗</a>{% endif %}
      {% if site.links.github != '' %}<a href="{{ site.links.github }}" target="_blank" rel="noopener">GitHub ↗</a>{% endif %}
      {% if site.links.orcid != '' %}<a href="{{ site.links.orcid }}" target="_blank" rel="noopener">ORCID ↗</a>{% endif %}
      {% if site.links.cv != '' %}<a href="{{ site.links.cv | relative_url }}">CV ↓</a>{% endif %}
    </div>
  </div>
  <div class="hero-visual">
    <div class="portrait-card">
      <img src="{{ site.photo | relative_url }}" alt="Portrait placeholder for Chen Ning">
      <div class="portrait-meta">
        <strong>Chen Ning</strong>
        <span>{{ site.title }}</span>
        <span>{{ site.institution }}</span>
      </div>
    </div>
  </div>
</section>

<section class="recruitment-strip">
  <div class="section-shell recruitment-inner">
    <div>
      <p class="eyebrow light">PROSPECTIVE STUDENTS &amp; COLLABORATORS</p>
      <h2>Interested in resilient networks, IoT or AI for networking?</h2>
      <p>I welcome enquiries from motivated students and collaborators who want to work on ambitious networked-systems problems with real-world impact.</p>
    </div>
    <a class="button light" href="{{ '/join/' | relative_url }}">See how to join →</a>
  </div>
</section>

<section class="section-shell content-section">
  <div class="section-heading">
    <p class="eyebrow">RESEARCH THEMES</p>
    <h2>What I work on</h2>
    <p>My work sits at the intersection of networking, IoT, optimization and intelligent decision-making.</p>
  </div>
  <div class="card-grid three">
    {% for item in site.data.research_areas %}
    <a class="research-card" href="{{ '/research/' | relative_url }}#{{ item.slug }}">
      <span class="card-index">0{{ forloop.index }}</span>
      <h3>{{ item.title }}</h3>
      <p>{{ item.summary }}</p>
      <span class="text-link">Learn more →</span>
    </a>
    {% endfor %}
  </div>
</section>

<section class="section-shell content-section split-section">
  <div>
    <div class="section-heading compact">
      <p class="eyebrow">SELECTED WORK</p>
      <h2>Representative research</h2>
    </div>
    <div class="project-stack">
      {% for project in site.data.projects limit:4 %}
      <article class="project-row">
        <div class="project-kicker">{{ project.category }}</div>
        <div>
          <h3>{{ project.name }}</h3>
          <p>{{ project.summary }}</p>
        </div>
      </article>
      {% endfor %}
    </div>
    <a class="text-link strong" href="{{ '/research/' | relative_url }}">View research portfolio →</a>
  </div>

  <aside class="news-panel">
    <div class="section-heading compact">
      <p class="eyebrow">LATEST</p>
      <h2>News</h2>
    </div>
    {% for item in site.data.news limit:5 %}
    <div class="news-item">
      <time>{{ item.date }}</time>
      <p>{{ item.text }}</p>
    </div>
    {% endfor %}
    <a class="text-link strong" href="{{ '/news/' | relative_url }}">All news →</a>
  </aside>
</section>

<section class="section-shell content-section">
  <div class="section-heading">
    <p class="eyebrow">PUBLICATIONS</p>
    <h2>Selected publications</h2>
    <p>Representative publications are shown here; the complete and most up-to-date list is available on Google Scholar.</p>
  </div>
  <div class="publication-list featured-publications">
    {% assign featured = site.data.publications | where: "featured", true %}
    {% for pub in featured limit:3 %}
    <article class="publication-item">
      <div class="pub-year">{{ pub.year }}</div>
      <div>
        <h3>{{ pub.title }}</h3>
        <p class="pub-meta">{{ pub.venue }}</p>
        {% if pub.note %}<p>{{ pub.note }}</p>{% endif %}
        <div class="pub-links">
          {% if pub.url %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Paper ↗</a>{% endif %}
          {% if pub.code %}<a href="{{ pub.code }}" target="_blank" rel="noopener">Code ↗</a>{% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
  <a class="button secondary" href="{{ '/publications/' | relative_url }}">View Publications</a>
</section>

<section class="section-shell final-cta">
  <p class="eyebrow light">WORK WITH ME</p>
  <h2>Looking for a research direction in networked intelligence?</h2>
  <p>Tell me what you are interested in, what you have worked on, and what kind of research problem you want to solve.</p>
  <a class="button light" href="{{ '/join/' | relative_url }}">Read the application guide →</a>
</section>
