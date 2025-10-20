## Configuration

### Google Maps API Key
Path: `misszerhungr/client/src/config/googleMaps.ts`

- Replace the exported `GOOGLE_MAPS_API_KEY` with your own key.
- How to obtain a key:
  1. Create a project in Google Cloud Console
  2. Enable "Maps JavaScript API"
  3. Create credentials → API key
  4. Restrict the key appropriately (HTTP referrers)
  5. Update the constant in `config/googleMaps.ts`

Usage in code:
```ts
import { GOOGLE_MAPS_API_KEY } from './config/googleMaps';
<GoogleMap apiKey={GOOGLE_MAPS_API_KEY} />
```

Note: For production, avoid hardcoding secrets. Consider environment-based injection via your build tool.

### Pages and Navigation
The `App` component controls navigation between pages/state:
- `landing` → header, hero, mission, achievements, gallery, footer
- `map-insights` → `TuscaloosaMapInsights`
- `auth` → `AuthPage`
- `volunteer` → `VolunteerXpress`
- `volunteer-form` → `VolunteerApplicationForm`
- `donation` → `DonationPage`

The `Header` dispatches custom DOM events the `App` listens to: `navigateToMap`, `navigateToAuth`, `navigateToVolunteer`, `navigateToDonation`.
