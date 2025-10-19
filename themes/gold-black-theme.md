# Gold-Black Theme Configuration

## Current Color Palette

### Gold Colors
- Primary Gold: `gold-500/20` (background), `gold-400` (text)
- Gold Hover: `gold-500/30` (background), `gold-300` (text)
- Gold Border: `border-gold-500/30`, hover `border-gold-500/50`

### Dark Colors
- Background: `dark-bg`, `dark-surface/95`, `dark-surface/80`
- Text: `dark-text-secondary` (secondary), `white` (primary on hover)
- Cards: `dark-card/50`
- Borders: `dark-border/50`

## Navigation Component Styling

### Desktop Navigation
```css
/* Regular buttons */
className="px-3 lg:px-4 py-2 text-sm font-medium text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-full transition-all duration-300"

/* Highlighted button (Contact) */
className="px-3 lg:px-4 py-2 text-sm font-medium bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 hover:text-gold-300 rounded-full transition-all duration-300 border border-gold-500/30"
```

### Mobile Navigation
```css
/* Regular buttons */
className="block w-full text-left px-3 py-2.5 text-dark-text-secondary hover:text-white hover:bg-dark-card/50 rounded-xl transition-all duration-300"

/* Highlighted button (Contact) */
className="block w-full text-left px-3 py-2.5 bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 hover:text-gold-300 rounded-xl transition-all duration-300 border border-gold-500/30"
```

## Hero Section Styling

### Main Title
```css
/* "Your" text */
className="text-2xl md:text-4xl lg:text-5xl font-medium text-dark-text-secondary block mb-3 leading-relaxed"

/* "Himalayan Adventure Awaits" text */
className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent block leading-relaxed py-2"
```

### Description Text
```css
className="text-lg md:text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
```

### Buttons
```css
/* Primary button (Book a Tour Package) */
className="px-6 py-3 text-lg font-medium bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 hover:text-gold-300 rounded-lg transition-all duration-300 border border-gold-500/30 hover:border-gold-500/50 hover:shadow-lg"

/* Secondary button (Rent a Car) */
className="px-6 py-3 text-lg font-medium bg-transparent text-gold-400 hover:bg-gold-500/20 hover:text-gold-300 rounded-lg transition-all duration-300 border border-gold-500/30 hover:border-gold-500/50 hover:shadow-lg"
```

## Navigation Bar Background
```css
/* Scrolled state */
bg-dark-surface/95 backdrop-blur-md

/* Initial state */
bg-dark-surface/80 backdrop-blur-sm

/* Border */
border border-dark-border/50
```

## Logo Styling
```css
/* Logo glow effect */
drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]
```

## Key Design Elements
- **Primary CTA**: Gold background with semi-transparency
- **Secondary CTA**: Transparent background with gold border and text
- **Hover Effects**: Increased opacity and brightness
- **Border Radius**: `rounded-full` for navigation, `rounded-lg` for hero buttons
- **Transitions**: `transition-all duration-300` for smooth animations
- **Typography**: Medium weight for navigation, bold for hero title
- **Gradient**: Yellow to amber gradient for main hero text

## Menu Items
- Home
- About  
- Car Rental
- Corporate Rental
- Destinations
- Packages
- Contact (highlighted with gold styling)

## Hero Content
- Main Title: "Your Himalayan Adventure Awaits"
- Description: "Ghosh Travels helps you discover the majestic beauty of the Himalayas with our premium travel experiences and luxury accommodations."
- Primary Button: "Book a Tour Package"
- Secondary Button: "Rent a Car"

---
*Saved on: October 15, 2025*
*Theme: Gold-Black for Ghosh Travels*