# Chen Ning — Academic & Recruitment Homepage

A GitHub Pages academic website tailored for **Chen Ning**, with a strong focus on research visibility and student recruitment.

The information architecture and maintenance philosophy are inspired by the `sbryngelson/academic-website-template`: Jekyll + Markdown/YAML + GitHub Pages, but this repository contains a custom recruitment-first layout and styling.

## Pages

- Home — research positioning, selected work, news, recruitment CTA
- Research — research areas and representative research directions
- Publications — data-driven publication list
- People — researcher / students / collaborators
- News — data-driven updates
- Join Us — prominent recruitment page with application guidance

## Publish in 5 minutes

1. Create a GitHub repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload all files in this folder to the repository root.
3. Rename the default branch to `main` if needed.
4. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
5. Edit `_config.yml` and replace the placeholders.
6. Commit changes. The workflow in `.github/workflows/pages.yml` will deploy the site.

Your site will be available at:

`https://YOUR_GITHUB_USERNAME.github.io`

## Everyday updates

You normally only need to edit:

- `_data/news.yml` — news
- `_data/publications.yml` — publications
- `_data/people.yml` — team members
- `_data/projects.yml` — research projects
- `_pages/join.md` — recruitment information
- `files/Chen_Ning_CV.pdf` — CV

No HTML or CSS changes are required for routine updates.

## Local preview (optional)

If Ruby/Jekyll is installed:

```bash
bundle exec jekyll serve
```

For most updates, GitHub's web editor is enough; you do not need a local development environment.

## Important starter placeholders

Read `CHANGE_ME_FIRST.md` before publication.

## License

Custom website code is provided under the MIT License. Review licenses separately if you later copy files directly from third-party templates or themes.
