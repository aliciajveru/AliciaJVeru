# Alicia J. Veru Author Website

Static GitHub Pages site for Alicia J. Veru and the His Golden Heart Series.

## Preview Locally

Open `index.html` directly in a browser, or run a tiny local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Email And Interest Counts

GitHub Pages cannot store emails or count signups by itself. Use a static form or newsletter provider.

Recommended simple setup:

1. Create one form for the general reader list.
2. Create one form for `Why We Braved` interest/preorder notifications.
3. Replace the placeholder `action` URLs in `index.html`.
4. View counts and submissions in that provider dashboard.

Search for these placeholders in `index.html`:

```txt
YOUR_NEWSLETTER_FORM_ID
YOUR_WHY_WE_BRAVED_FORM_ID
```

Good options: Formspree, Basin, Getform, MailerLite, ConvertKit, Mailchimp, Buttondown, Substack, Google Forms, Airtable.

## Covers

Replace cover files with final art, keeping these paths:

```txt
assets/covers/his-golden-heart/book-1.jpg
assets/covers/his-golden-heart/book-2.jpg
assets/covers/his-golden-heart/book-3.png
```

## GitHub Pages

In the GitHub repository:

1. Go to `Settings`.
2. Open `Pages`.
3. Set source to `Deploy from a branch`.
4. Choose `main` and `/root`.
5. Save.
