# GitHub Pages Deploy Guide

This project is a static site, so it can be hosted directly on GitHub Pages.

## 1. Create a GitHub repository and push this project

Run these commands from this project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## 2. Enable GitHub Pages (Actions source)

1. Open your repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. In `Build and deployment`, set `Source` to `GitHub Actions`.

The workflow file is already included:

- `.github/workflows/deploy-pages.yml`

After each push to `main`, deployment runs automatically.

## 3. Open and share the URL

Your site URL will be:

`https://<your-user>.github.io/<your-repo>/`

If your default branch is not `main`, update the branch in:

- `.github/workflows/deploy-pages.yml`
