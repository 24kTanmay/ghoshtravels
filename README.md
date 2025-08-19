# BlockCasino - Premium Crypto Casino Landing Page

A sophisticated, premium casino website landing page built with modern web technologies and featuring a carefully crafted color palette that evokes luxury and trust.

## Color Palette

The design uses a refined color scheme that creates a premium casino atmosphere:

- **#006A6A Teal Felt**: Main background for tables and content areas
- **#C92A2A Chip Red**: Call-to-actions, player turn indicators, and error messages
- **#593829 Rich Mahogany**: Borders, footers, headers, and card backs
- **#E9ECEF Cool Grey**: Secondary backgrounds, card faces, and UI elements
- **#D4AF37 Muted Gold**: VIP status indicators, logos, and premium feature highlights

## Features

### Design Elements
- **Full-bleed Hero Section**: High-resolution poker night background with rich textures and dramatic lighting
- **Premium Typography**: Elegant serif fonts (Playfair Display) for headings and clean sans-serif fonts (Inter) for body text
- **Sophisticated Animations**: Subtle hover effects, gentle pulse animations, and smooth transitions
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop

### Interactive Components
- **Animated Statistics Counter**: Numbers animate when they come into view
- **Floating Poker Cards**: CSS animations with hover effects
- **Interactive Image Gallery**: Click to change main showcase image
- **Smooth Scrolling Navigation**: Enhanced user experience
- **Parallax Effects**: Subtle background movement on scroll
- **Ripple Button Effects**: Modern touch feedback

### Sections
1. **Hero Section**: Welcoming message with call-to-action and animated statistics
2. **Features Grid**: Casino, Rewards, and Sports betting sections
3. **Premium Poker Showcase**: High-quality product imagery with detailed descriptions
4. **Customer Testimonials**: Social proof with sophisticated layouts and VIP badges
5. **Media Reviews**: Credibility through featured media mentions
6. **Footer**: Comprehensive links and legal information

## Technical Implementation

### HTML Structure
- Semantic HTML5 markup
- Accessible navigation and content structure
- SEO-friendly meta tags and structure
- Optimized image loading with placeholders

### CSS Features
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties (variables) for consistent theming
- Advanced animations and transitions
- Mobile-first responsive design
- Performance-optimized animations

### JavaScript Functionality
- Intersection Observer API for scroll-triggered animations
- Smooth scrolling and navigation
- Dynamic content interactions
- Performance-optimized scroll handlers
- Loading screen with smooth transitions

## File Structure

```
Casino_site/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with animations
├── script.js          # Interactive functionality
└── README.md          # Project documentation
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Features

- Optimized animations using CSS transforms
- Throttled scroll events for smooth performance
- Efficient intersection observers
- Minimal DOM manipulation
- Optimized loading sequences

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a modern web browser
3. For local development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## Customization

### Colors
All colors are defined as CSS custom properties in the `:root` selector at the top of `styles.css`. You can easily modify the color scheme by changing these values.

### Typography
Font families are defined as custom properties and can be easily changed:
- `--font-heading`: Currently set to 'Playfair Display'
- `--font-body`: Currently set to 'Inter'

### Animations
Animation durations and effects can be customized by modifying the CSS animations and JavaScript timing values.

## Future Enhancements

- Integration with backend APIs
- User authentication system
- Live chat functionality
- Progressive Web App (PWA) features
- Advanced game previews
- Multi-language support

## License

This project is designed for educational and demonstration purposes. Please ensure you have appropriate licensing for any commercial use of casino-related imagery and content.

## Credits

- Fonts: Google Fonts (Playfair Display, Inter)
- Color Palette: Custom premium casino theme
- Images: Placeholder images for demonstration
- Icons: Unicode emoji characters
