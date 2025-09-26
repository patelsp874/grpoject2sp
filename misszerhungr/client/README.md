# The Table for All - Nonprofit Website Prototype

A beautiful, modern front-end prototype for a nonprofit organization dedicated to ending hunger and achieving UN Sustainable Development Goal 2: Zero Hunger.

## 🎯 Project Overview

This is a **prototype** designed for stakeholder review before the client kickoff meeting. The website showcases a nonprofit organization's mission, impact goals, and provides placeholder functionality for future development.

## ✨ Features

### 🎨 Design & User Experience
- **Modern, Professional Design**: Clean, nonprofit-focused aesthetic with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Loading Splash Screen**: 3-second animated loading sequence for professional presentation

### 📱 Components

1. **Header**
   - Logo placeholder with "TFA" branding
   - Navigation menu (desktop) and mobile menu button
   - Sticky header with smooth scroll behavior

2. **Hero Section**
   - Eye-catching background image with overlay
   - Main title "The Table for All" with animated entrance
   - Call-to-action buttons with hover effects
   - Animated scroll indicator

3. **Mission Section**
   - Mission statement with heart icon
   - Three mission pillars with icons and descriptions
   - Gradient background cards with hover animations

4. **Achievements Section**
   - Six key achievement goals with progress bars
   - Animated progress indicators
   - Call-to-action section with gradient background

5. **Navigation Buttons**
   - Five action buttons: About Us, Our Impact, Volunteer, Donate, Contact
   - Each button triggers a placeholder modal
   - Hover animations and color-coded gradients

6. **Loading Animation**
   - Logo animation with rotation and scaling
   - Progress bar with smooth loading effect
   - Floating background elements
   - UN SDG 2 badge

7. **Footer**
   - Organization information and UN SDG 2 reference
   - Contact information placeholders
   - Social media links
   - Prototype notice for stakeholders

8. **Placeholder Modal**
   - Professional modal for all button interactions
   - Clear prototype messaging
   - Smooth animations and transitions

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **TailwindCSS** for styling and responsive design
- **Framer Motion** for animations and transitions
- **Webpack** for bundling and development server
- **PostCSS** for CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
   ```bash
   cd misszerhungr/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📋 Prototype Features

### ✅ Implemented
- Complete responsive design
- All placeholder content and sections
- Smooth animations and transitions
- Loading splash screen
- Placeholder modals for all interactions
- Professional nonprofit aesthetic
- UN SDG 2 branding and references

### 🔄 Post-Kickoff Development (Placeholders)
- Replace logo and branding with client assets
- Implement real donation and volunteer workflows
- Connect to backend/database for data storage
- Build admin dashboard for impact tracking
- Add real contact forms and functionality
- Implement user authentication and accounts

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Secondary**: Yellow accent (#facc15 to #eab308)
- **Background**: Light gray (#f9fafb)
- **Text**: Dark gray (#111827)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
- Fade-in effects for page loads
- Scale animations on hover
- Smooth transitions (300ms)
- Loading progress animations
- Floating background elements

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

All placeholder content is clearly marked with comments and can be easily replaced:

- Logo: `src/components/Header.tsx` (lines 15-20)
- Mission statement: `src/components/MissionSection.tsx` (lines 25-35)
- Achievement goals: `src/components/AchievementsSection.tsx` (lines 5-35)
- Contact information: `src/components/Footer.tsx` (lines 45-55)

## 📞 Stakeholder Information

This prototype demonstrates:
- Professional nonprofit website design
- Clear mission and impact presentation
- User engagement through interactive elements
- Mobile-responsive design
- Loading experience for better user engagement

All interactive elements show appropriate placeholder messages indicating the prototype nature and timeline for full implementation.

## 🌍 UN SDG 2 Alignment

The website prominently features:
- UN SDG 2: Zero Hunger branding
- Mission alignment with sustainable development goals
- Professional presentation suitable for stakeholder review
- Clear communication of nonprofit mission and impact

---

**Note**: This is a prototype for stakeholder review. Full functionality will be implemented after the client kickoff meeting.
