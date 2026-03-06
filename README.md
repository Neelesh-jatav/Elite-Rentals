# 🏡 Elite Rentals - Real Estate React App

A modern and responsive real-estate web application built with **React + Vite**.
This project showcases luxury villas with rich property cards, a dedicated villa details page, and supporting pages like About, Contact, and Terms.

## ✨ Highlights

- 📱 Responsive layout with mobile-friendly navigation.
- 🧭 Multi-page experience using React Router.
- 🏘️ Villa listing page with property cards.
- 🔎 Dynamic villa detail route (`/villa/:id`).
- 🎨 Icon-rich UI using `react-icons`.
- ⚡ Fast development workflow with Vite.

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Bundler/Dev Server:** Vite 7
- **Routing:** React Router DOM 7
- **Icons:** React Icons
- **Linting:** ESLint 9

## 📂 Project Structure

```text
client/
	public/
	src/
		App.css
		App.jsx
		main.jsx
		villas.js
		components/
			AboutUs/
			Contact/
			Footer/
			Home/
			Navbar/
			TermsAndConditions/
			Villa/
				SingleVilla.jsx
				Villas.jsx
		SubComponents/
			About.jsx
			Contact.jsx
			HeroSection.jsx
			Host.jsx
			OurSpecialities.jsx
			Regions.jsx
			TopVillas.jsx
	index.html
	package.json
	vite.config.js
```

## 🧩 Main Pages & Routes

- `/` -> Home page with hero and key sections
- `/aboutus` -> About Us page
- `/contact` -> Contact page
- `/villas` -> All villas listing page
- `/villa/:id` -> Single villa details page (dynamic)
- `/termsandconditions` -> Terms & Conditions page

## 🚀 Getting Started

### 1. Prerequisites

- Node.js `18+` recommended
- npm (comes with Node.js)

### 2. Install Dependencies

```bash
cd client
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) in your terminal.

## 📦 Available Scripts

- `npm run dev` -> Start local development server
- `npm run build` -> Create production build in `dist/`
- `npm run preview` -> Preview production build locally
- `npm run lint` -> Run ESLint checks

## 🏠 Villa Data Model

Villa data is currently defined locally in `src/villas.js`.
Each villa object includes fields like:

- `id`
- `name`
- `location`
- `category`
- `guests`
- `bedrooms`
- `bathrooms`
- `squareMeter`
- `rating`
- `image`
- `dailyRent`

## 🎯 Current Functional Features

- Navigation bar with responsive hamburger toggle.
- Clickable villa cards that route to detail pages.
- Shared header/footer across routes.
- Embedded map and check-in/check-out section on single villa view.
- Home page assembled from modular subcomponents.

## 🔧 Customization Ideas

- 🌐 Replace static `villas.js` data with an API.
- 🔍 Add search, filters, and sorting for villa listings.
- ❤️ Add wishlist/favorites support.
- 🧾 Add booking form and date selection.
- 🔐 Add authentication for user accounts.

## 🐞 Notes

- Route `/villa/:id` expects a valid villa `id` from the dataset.
- Image paths currently use static assets from `public/`.

## 📄 License

No license file is currently included in this project.
Add a `LICENSE` file if you plan to share or publish it publicly.

---

Built with care using React and Vite 💙
