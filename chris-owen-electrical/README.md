# Chris Owen Electrical Website

A professional website for Chris Owen Electrical, an electrician business based in Linwood, Christchurch, New Zealand.

## 🚀 Project Structure

The website is built using [Astro](https://astro.build), a modern static site generator, along with [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com) for styling.

```
/
├── public/
│   ├── images/
│   │   ├── gallery/
│   │   └── ...
│   └── favicon.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── gallery.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Features

- **SEO Optimized**: Meta tags, Open Graph, and structured data for better search engine visibility
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Modern Design**: Clean, professional design with a focus on usability
- **Contact Form**: Ready-to-use contact form (email functionality to be added)
- **Gallery**: Filterable project gallery to showcase completed work
- **Services Showcase**: Detailed information about services offered
- **About Page**: Information about the company, team, and values
- **Easy to Customize**: Simple structure makes it easy to update content

## 🖼️ Images

The website uses placeholder components that generate visually appealing placeholders until you replace them with actual photos:

- `LazyPlaceholder.astro` is a component that generates placeholder imagery with customizable colors and text
- To replace placeholders with actual images, modify the relevant components to use `<img>` tags instead of the `<LazyPlaceholder>` component 

When you're ready to use real images, place them in the following locations:
- `/public/images/` - For general images
- `/public/images/gallery/` - For gallery project images

## 📧 Contact Form

The contact form is currently set up to display a success message but does not send emails. To add email functionality, you'll need to:

1. Choose an email service provider (e.g., SendGrid, Mailgun)
2. Set up server-side processing for the form
3. Update the form submission code in `contact.astro`

## 🎨 Customization

### Colors

The primary and secondary colors can be customized in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#114084', // Blue color for branding
      secondary: '#F2A922', // Gold/Yellow accent color
    },
  },
},
```

### Content

All content is easily editable in the respective `.astro` files in the `src/pages` directory.

## 🚀 Deployment

To deploy the website:

1. Run `npm run build` to generate the static site
2. Upload the contents of the `dist` directory to your web hosting provider

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Created By

This website was created for Chris Owen Electrical.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
