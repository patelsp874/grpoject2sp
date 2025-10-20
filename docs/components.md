## React Components

All components are exported as default exports from `misszerhungr/client/src/components/*` unless noted. Paths below are relative to `misszerhungr/client/src`.

### App (`App.tsx`)
- Props: none
- Description: Top-level application component controlling navigation between pages.
- Usage:
```tsx
import App from './App';
```

### Header (`components/Header.tsx`)
- Props: none
- Description: Fixed top navigation bar. Dispatches custom DOM events used by `App` for navigation: `navigateToMap`, `navigateToAuth`, `navigateToVolunteer`, `navigateToDonation`.
- Usage:
```tsx
import Header from './components/Header';

<Header />
// Listen in parent if not using the provided App:
useEffect(() => {
  const toMap = () => {/* set route to map */};
  window.addEventListener('navigateToMap', toMap);
  return () => window.removeEventListener('navigateToMap', toMap);
}, []);
```

### HeroSection (`components/HeroSection.tsx`)
- Props: none
- Description: Landing page hero with CTAs and animated visuals.
- Usage:
```tsx
import HeroSection from './components/HeroSection';
<HeroSection />
```

### MissionSection (`components/MissionSection.tsx`)
- Props: none
- Description: Organization mission with pillars.
- Usage:
```tsx
import MissionSection from './components/MissionSection';
<MissionSection />
```

### AchievementsSection (`components/AchievementsSection.tsx`)
- Props:
  - `onNavigateToVolunteerForm?`: () => void — optional callback used by the "Get Involved" button.
- Description: Goals grid with modals and CTA.
- Usage:
```tsx
import AchievementsSection from './components/AchievementsSection';

<AchievementsSection onNavigateToVolunteerForm={() => navigate('/volunteer-form')} />
```

### ImageGallery (`components/ImageGallery.tsx`)
- Props:
  - `onNavigateToVolunteerForm?`: () => void — optional callback for the "Volunteer Today" button.
- Usage:
```tsx
import ImageGallery from './components/ImageGallery';
<ImageGallery onNavigateToVolunteerForm={() => setShowForm(true)} />
```

### LoadingAnimation (`components/LoadingAnimation.tsx`)
- Props: none
- Description: Fullscreen animated loading/splash screen.
- Usage:
```tsx
import LoadingAnimation from './components/LoadingAnimation';
{isLoading && <LoadingAnimation />}
```

### Footer (`components/Footer.tsx`)
- Props: none
- Description: Footer with links and contact details.
- Usage:
```tsx
import Footer from './components/Footer';
<Footer />
```

### PlaceholderModal (`components/PlaceholderModal.tsx`)
- Props:
  - `isOpen`: boolean — controls visibility
  - `onClose`: () => void — close handler
  - `content`: string — message rendered inside the modal
- Usage:
```tsx
import PlaceholderModal from './components/PlaceholderModal';

<PlaceholderModal
  isOpen={isOpen}
  onClose={() => setOpen(false)}
  content="Feature coming soon"
/>
```

### NavigationButtons (`components/NavigationButtons.tsx`)
- Props:
  - `onButtonClick`: (content: string) => void — called with the selected card title
- Usage:
```tsx
import NavigationButtons from './components/NavigationButtons';

<NavigationButtons onButtonClick={(title) => console.log('Clicked', title)} />
```

### GoogleMap (`components/GoogleMap.tsx`)
- Props:
  - `apiKey`: string — Google Maps API key
  - `onMapLoad?`: (map: google.maps.Map) => void — optional callback when the map is ready
- Description: Interactive Google Map with severity overlays and analytics for Tuscaloosa areas. Requires a valid Maps API key.
- Usage:
```tsx
import GoogleMap from './components/GoogleMap';
import { GOOGLE_MAPS_API_KEY } from './config/googleMaps';

<GoogleMap apiKey={GOOGLE_MAPS_API_KEY} onMapLoad={(map) => console.log(map)} />
```

### ResourcesSection (`components/ResourcesSection.tsx`)
- Props: none
- Description: Resource cards with informational modals (Emergency, SNAP, School Meals, Seniors).
- Usage:
```tsx
import ResourcesSection from './components/ResourcesSection';
<ResourcesSection />
```

### TuscaloosaMap (`components/TuscaloosaMap.tsx`)
- Props: none
- Description: SVG-based map visualization powered by `useFoodInsecurityData` hook.
- Usage:
```tsx
import TuscaloosaMap from './components/TuscaloosaMap';
<TuscaloosaMap />
```

### TuscaloosaMapInsights (`components/TuscaloosaMapInsights.tsx`)
- Props:
  - `onBackToLanding`: () => void — navigate back handler
- Description: Full page combining the Google map and the custom data viz with tabs.
- Usage:
```tsx
import TuscaloosaMapInsights from './components/TuscaloosaMapInsights';

<TuscaloosaMapInsights onBackToLanding={() => navigate('/')} />
```

### VolunteerXpress (`components/VolunteerXpress.tsx`)
- Props:
  - `onBackToLanding`: () => void
- Description: Volunteer program landing and signup UI.
- Usage:
```tsx
import VolunteerXpress from './components/VolunteerXpress';
<VolunteerXpress onBackToLanding={() => navigate('/')} />
```

### VolunteerApplicationForm (`components/VolunteerApplicationForm.tsx`)
- Props:
  - `onBackToLanding`: () => void
- Description: Multi-step volunteer application form with validation and submission simulation.
- Usage:
```tsx
import VolunteerApplicationForm from './components/VolunteerApplicationForm';
<VolunteerApplicationForm onBackToLanding={() => navigate('/')} />
```

### DonationPage (`components/DonationPage.tsx`)
- Props:
  - `onBackToLanding`: () => void
- Description: Donation flow with preset/custom amounts and simulated processing.
- Usage:
```tsx
import DonationPage from './components/DonationPage';
<DonationPage onBackToLanding={() => navigate('/')} />
```

### AuthPage (`components/AuthPage.tsx`)
- Props:
  - `onBackToLanding`: () => void
- Description: Signup/Login UI for farmers and organizations.
- Usage:
```tsx
import AuthPage from './components/AuthPage';
<AuthPage onBackToLanding={() => navigate('/')} />
```
