# WorkMate Landing Page

Landing page untuk aplikasi WorkMate - Platform Employee Engagement & Productivity terdepan.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Navigate ke folder landing page:
```bash
cd landing
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser dan akses `http://localhost:3001`

## 📦 Build untuk Production

```bash
npm run build
npm run preview
```

## 🎨 Features

### ✨ Landing Page Components
- **Hero Section**: Call-to-action utama dengan statistik
- **Features**: Showcase semua fitur WorkMate
- **Benefits**: Testimonial dan hasil yang terukur
- **Pricing**: Paket harga yang fleksibel
- **Contact**: Form kontak dan informasi perusahaan
- **Footer**: Links dan social media

### 🎯 Design System
- Konsisten dengan aplikasi utama WorkMate
- Menggunakan Tailwind CSS dengan custom colors
- Responsive design untuk semua device
- Animasi dan transitions yang smooth

### 🔧 Tech Stack
- **React 18** dengan TypeScript
- **Vite** untuk development dan build
- **Tailwind CSS** untuk styling
- **Lucide React** untuk icons
- **React Router** untuk navigation
- **React Hot Toast** untuk notifications

## 📁 Structure

```
landing/
├── public/
│   └── workmatelogo.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Design Guidelines

### Colors
- **Primary**: `#C41E3A` (Brand red)
- **Secondary**: `#8B1538` (Brand secondary)
- **Accent**: `#FF6B9D` (Brand accent)

### Typography
- **Font**: Inter (system fallback)
- **Headings**: Bold weights dengan gradient text
- **Body**: Regular dengan good contrast ratio

### Components
- Rounded corners (12px, 16px, 24px)
- Subtle shadows dan hover effects
- Gradient backgrounds dan buttons
- Consistent spacing menggunakan Tailwind scale

## 🔗 Integration

Landing page ini terintegrasi dengan aplikasi utama WorkMate melalui:
- Login redirect ke `http://localhost:5173/login`
- Consistent branding dan design system
- Shared assets (logo, colors, fonts)

## 📱 Responsive Design

- **Mobile First**: Optimized untuk mobile devices
- **Tablet**: Enhanced layout untuk tablet
- **Desktop**: Full-featured desktop experience
- **Large Screens**: Optimized untuk large displays

## 🚀 Deployment

Landing page dapat di-deploy secara terpisah atau bersama aplikasi utama:

### Vercel/Netlify
```bash
npm run build
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "preview"]
```

## 📊 Performance

- Lazy loading untuk images
- Optimized bundle size
- Fast refresh during development
- SEO-friendly dengan proper meta tags

## 🤝 Contributing

Untuk berkontribusi pada landing page:

1. Follow design system yang sudah ada
2. Test responsive design di semua breakpoints  
3. Ensure accessibility standards
4. Optimize untuk performance

## 📄 License

Sesuai dengan lisensi aplikasi utama WorkMate.
