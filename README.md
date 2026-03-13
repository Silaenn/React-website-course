# Ngoding Mastery - Website Course Platform

A modern, responsive website for an online course platform built with React, Bootstrap, and Vite.

![Website-Course](https://github.com/Silaenn/React-website-course/assets/131638765/2574ec8e-4d63-420e-9e10-85f132c66abd)

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI/UX** - Clean and intuitive interface with smooth animations
- **Course Catalog** - Browse available courses with pricing and discounts
- **Testimonials** - Student reviews and feedback with Swiper carousel
- **FAQ Section** - Frequently asked questions with accordion component
- **Promotions** - Special discount offers on selected courses
- **Smooth Navigation** - Auto scroll-to-top on page navigation
- **Animations** - AOS (Animate On Scroll) and Animate.css integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React

### Libraries
- **AOS** - Scroll animations
- **Animate.css** - CSS animation library
- **Swiper** - Touch slider for testimonials
- **Axios** - HTTP client

## 📁 Project Structure

```
src/
├── assets/           # Images and static assets
├── components/       # Reusable components
│   ├── FaqComponent.jsx
│   ├── FooterComponent.jsx
│   ├── NavbarComponent.jsx
│   └── ScrollToTop.jsx
├── data/            # Mock data and constants
│   └── index.js
├── pages/           # Page components
│   ├── Home.jsx
│   ├── KelasPage.jsx
│   ├── PromosiPage.jsx
│   ├── TestimonialPage.jsx
│   ├── SyaratKatenPage.jsx
│   └── FaqPage.jsx
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── main.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Silaenn/React-website-course.git
cd React-website-course
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to
```
http://localhost:5173
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Pages

- **Home** - Landing page with hero section, featured courses, and testimonials
- **Kelas** - Course catalog page
- **Promosi** - Promotional offers and discounts
- **Testimonial** - All student testimonials
- **FAQ** - Frequently asked questions
- **Syarat & Ketentuan** - Terms and conditions

## 🎨 Customization

### Colors
Edit CSS variables in `src/main.css`:
```css
:root {
  --primary-color: #f8f9fa;
  --secondary-color: #dc3545;
  --color-text: #2d2b55;
  --navbar-color: #ffffff;
  --gradient-header: linear-gradient(135deg, #c6ffdd 0%, #fbd786 50%, #f7797d 100%);
}
```

### Data
Update course data, testimonials, and navigation links in `src/data/index.js`.

## 📦 Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**deokeldisilaen**

- GitHub: [@Silaenn](https://github.com/Silaenn)
- Email: deokeldisilaen@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using React + Vite + Bootstrap
