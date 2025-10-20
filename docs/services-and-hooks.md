## Services and Hooks

### Types
- `FoodInsecurityData`
  - `area: string`
  - `rate: number` — percent
  - `population: number`
  - `children: number` — percent
  - `seniors: number` — percent
  - `lastUpdated: string` — ISO date
  - `source: string`
- `DataSource`
  - `name: string`
  - `url: string`
  - `lastUpdated: string`
  - `description: string`

### FoodInsecurityDataService (singleton)
Path: `services/FoodInsecurityDataService.ts`

- `static getInstance(): FoodInsecurityDataService`
  - Returns the singleton instance.
- `getData(): Promise<FoodInsecurityData[]>`
  - Returns all current data (auto-refreshes periodically).
- `getDataForArea(area: string): Promise<FoodInsecurityData | null>`
  - Returns data for a specific area.
- `getDataSources(): Promise<DataSource[]>`
  - Returns metadata about the underlying data sources.
- `getTotalAffectedPopulation(): number`
  - Derived estimate of affected people across areas.
- `getAverageRate(): number`
  - Average food insecurity rate across areas.
- `getHighestRateArea(): FoodInsecurityData | null`
  - Area with the highest rate.
- `getLowestRateArea(): FoodInsecurityData | null`
  - Area with the lowest rate.

Example (direct service):
```ts
import { FoodInsecurityDataService } from './services/FoodInsecurityDataService';

async function loadStats() {
  const service = FoodInsecurityDataService.getInstance();
  const all = await service.getData();
  const highest = service.getHighestRateArea();
  console.log(all.length, highest?.area);
}
```

### useFoodInsecurityData (React hook)
Path: `services/FoodInsecurityDataService.ts`

- Returns `{ data, loading, error }`
- Auto-refreshes data every 5 minutes.

Example (component):
```tsx
import React from 'react';
import { useFoodInsecurityData } from './services/FoodInsecurityDataService';

export default function DataPanel() {
  const { data, loading, error } = useFoodInsecurityData();
  if (loading) return <div>Loading…</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <ul>
      {data.map(d => (
        <li key={d.area}>{d.area}: {d.rate.toFixed(1)}%</li>
      ))}
    </ul>
  );
}
```
