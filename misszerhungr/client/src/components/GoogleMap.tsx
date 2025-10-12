import React, { useEffect, useRef, useState } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  apiKey: string;
  onMapLoad?: (map: google.maps.Map) => void;
}

interface MarkerData {
  position: { lat: number; lng: number };
  title: string;
  foodInsecurityRate: number;
  population: number;
  children: number;
  seniors: number;
  affectedPeople: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey, onMapLoad }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowsRef = useRef<google.maps.InfoWindow[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Enhanced Tuscaloosa County areas with more detailed data
  const markerData: MarkerData[] = [
    {
      position: { lat: 33.2098, lng: -87.5692 }, // Tuscaloosa City
      title: 'Tuscaloosa City',
      foodInsecurityRate: 18.7,
      population: 101129,
      children: 22.1,
      seniors: 14.3,
      affectedPeople: 18911
    },
    {
      position: { lat: 33.2290, lng: -87.5772 }, // Northport
      title: 'Northport',
      foodInsecurityRate: 12.4,
      population: 31209,
      children: 15.8,
      seniors: 10.2,
      affectedPeople: 3870
    },
    {
      position: { lat: 33.1904, lng: -87.4521 }, // Cottondale
      title: 'Cottondale',
      foodInsecurityRate: 16.9,
      population: 3247,
      children: 20.3,
      seniors: 13.7,
      affectedPeople: 549
    },
    {
      position: { lat: 33.2340, lng: -87.4567 }, // Holt
      title: 'Holt',
      foodInsecurityRate: 14.6,
      population: 1838,
      children: 17.2,
      seniors: 11.9,
      affectedPeople: 268
    },
    {
      position: { lat: 33.2534, lng: -87.3201 }, // Brookwood
      title: 'Brookwood',
      foodInsecurityRate: 13.1,
      population: 1847,
      children: 16.4,
      seniors: 10.8,
      affectedPeople: 242
    },
    {
      position: { lat: 33.1590, lng: -87.3456 }, // Coaling
      title: 'Coaling',
      foodInsecurityRate: 19.2,
      population: 1655,
      children: 24.1,
      seniors: 15.6,
      affectedPeople: 318
    },
    {
      position: { lat: 33.1745, lng: -87.2345 }, // Vance
      title: 'Vance',
      foodInsecurityRate: 11.8,
      population: 1529,
      children: 14.2,
      seniors: 9.8,
      affectedPeople: 180
    },
    {
      position: { lat: 33.2801, lng: -87.1234 }, // Lake View
      title: 'Lake View',
      foodInsecurityRate: 17.3,
      population: 1871,
      children: 21.5,
      seniors: 14.1,
      affectedPeople: 324
    },
    {
      position: { lat: 33.2012, lng: -87.0987 }, // Woodstock
      title: 'Woodstock',
      foodInsecurityRate: 20.1,
      population: 1420,
      children: 25.8,
      seniors: 16.2,
      affectedPeople: 285
    },
    // Additional areas for more coverage
    {
      position: { lat: 33.1800, lng: -87.6000 }, // Alberta
      title: 'Alberta',
      foodInsecurityRate: 15.3,
      population: 2100,
      children: 18.7,
      seniors: 12.4,
      affectedPeople: 321
    },
    {
      position: { lat: 33.2200, lng: -87.5000 }, // McFarland
      title: 'McFarland',
      foodInsecurityRate: 13.8,
      population: 1850,
      children: 16.9,
      seniors: 11.2,
      affectedPeople: 255
    },
    {
      position: { lat: 33.1600, lng: -87.4000 }, // Peterson
      title: 'Peterson',
      foodInsecurityRate: 17.6,
      population: 1650,
      children: 21.8,
      seniors: 14.5,
      affectedPeople: 290
    }
  ];

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      try {
        // Set the API key
        setOptions({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places']
        });

        // Import the Maps library
        const { Map } = await importLibrary('maps');
        
        // Center map on Tuscaloosa County
        const map = new Map(mapRef.current, {
          center: { lat: 33.2098, lng: -87.5692 }, // Tuscaloosa City center
          zoom: 11,
          mapTypeId: 'roadmap',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        mapInstanceRef.current = map;
        setIsLoaded(true);

        // Import the Marker library
        const { Marker } = await importLibrary('marker');

        // Create enhanced markers with severity cones for each area
        markerData.forEach((data, index) => {
          // Create severity cone (circle overlay)
          const severityCone = new google.maps.Circle({
            strokeColor: getMarkerColor(data.foodInsecurityRate),
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: getMarkerColor(data.foodInsecurityRate),
            fillOpacity: 0.15,
            map: map,
            center: data.position,
            radius: getSeverityRadius(data.foodInsecurityRate) // Radius based on severity
          });

          // Create enhanced marker
          const marker = new Marker({
            position: data.position,
            map: map,
            title: data.title,
            icon: {
              path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
              scale: getMarkerScale(data.foodInsecurityRate),
              fillColor: getMarkerColor(data.foodInsecurityRate),
              fillOpacity: 0.9,
              strokeColor: '#ffffff',
              strokeWeight: 3
            }
          });

          // Create enhanced info window content with more analytics
          const infoWindowContent = `
            <div style="padding: 15px; min-width: 280px; font-family: Arial, sans-serif; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%); border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="display: flex; align-items: center; margin-bottom: 12px;">
                <div style="width: 12px; height: 12px; background-color: ${getMarkerColor(data.foodInsecurityRate)}; border-radius: 50%; margin-right: 8px;"></div>
                <h3 style="margin: 0; color: #1f2937; font-size: 18px; font-weight: 600;">${data.title}</h3>
              </div>
              
              <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 8px; margin-bottom: 12px; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-weight: bold; color: #dc2626; font-size: 24px;">${data.foodInsecurityRate}%</span>
                  <span style="color: #6b7280; font-size: 14px; font-weight: 500;">Food Insecurity Rate</span>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                <div style="background: #f0f9ff; padding: 8px; border-radius: 4px; text-align: center;">
                  <div style="font-weight: bold; color: #0369a1; font-size: 16px;">${data.population.toLocaleString()}</div>
                  <div style="color: #6b7280; font-size: 12px;">Total Population</div>
                </div>
                <div style="background: #fef3c7; padding: 8px; border-radius: 4px; text-align: center;">
                  <div style="font-weight: bold; color: #d97706; font-size: 16px;">${data.affectedPeople.toLocaleString()}</div>
                  <div style="color: #6b7280; font-size: 12px;">People Affected</div>
                </div>
              </div>

              <div style="background: #f3f4f6; padding: 10px; border-radius: 6px; margin-bottom: 12px;">
                <div style="font-weight: 600; color: #374151; margin-bottom: 6px; font-size: 14px;">Vulnerable Populations</div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                  <span style="color: #6b7280; font-size: 13px;">Children (0-17):</span>
                  <span style="font-weight: bold; color: #f59e0b; font-size: 13px;">${data.children}%</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: #6b7280; font-size: 13px;">Seniors (65+):</span>
                  <span style="font-weight: bold; color: #8b5cf6; font-size: 13px;">${data.seniors}%</span>
                </div>
              </div>

              <div style="background: #ecfdf5; border: 1px solid #d1fae5; padding: 8px; border-radius: 4px;">
                <div style="font-size: 12px; color: #065f46; font-weight: 500;">
                  📊 ${getSeverityLevel(data.foodInsecurityRate)} Priority Area
                </div>
                <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">
                  ${getRecommendation(data.foodInsecurityRate)}
                </div>
              </div>
            </div>
          `;

          const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
          });

          // Add click listener to marker
          marker.addListener('click', () => {
            // Close all other info windows
            infoWindowsRef.current.forEach(window => window.close());
            
            // Open this info window
            infoWindow.open(map, marker);
          });

          markersRef.current.push(marker);
          infoWindowsRef.current.push(infoWindow);
        });

        // Call the onMapLoad callback if provided
        if (onMapLoad) {
          onMapLoad(map);
        }

      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setHasError(true);
        setErrorMessage('Failed to load Google Maps. Using fallback visualization.');
      }
    };

    initMap();
  }, [apiKey, onMapLoad]);

  const getMarkerColor = (rate: number): string => {
    if (rate < 12) return '#22c55e'; // Green
    if (rate < 16) return '#f59e0b'; // Yellow
    if (rate < 20) return '#f97316'; // Orange
    return '#dc2626'; // Red
  };

  // Helper functions for enhanced analytics
  const getSeverityRadius = (rate: number): number => {
    // Radius in meters based on severity
    if (rate < 12) return 800; // Small radius for low severity
    if (rate < 16) return 1200; // Medium radius
    if (rate < 20) return 1600; // Large radius
    return 2000; // Extra large radius for critical areas
  };

  const getMarkerScale = (rate: number): number => {
    // Marker size based on severity
    if (rate < 12) return 1.0;
    if (rate < 16) return 1.2;
    if (rate < 20) return 1.4;
    return 1.6;
  };

  const getSeverityLevel = (rate: number): string => {
    if (rate < 12) return 'Low';
    if (rate < 16) return 'Medium';
    if (rate < 20) return 'High';
    return 'Critical';
  };

  const getRecommendation = (rate: number): string => {
    if (rate < 12) return 'Monitor and maintain current programs';
    if (rate < 16) return 'Increase food assistance programs';
    if (rate < 20) return 'Urgent: Expand emergency food services';
    return 'Critical: Immediate intervention required';
  };

  // Calculate analytics data
  const analyticsData = {
    totalAreas: markerData.length,
    totalPopulation: markerData.reduce((sum, area) => sum + area.population, 0),
    totalAffected: markerData.reduce((sum, area) => sum + area.affectedPeople, 0),
    averageRate: markerData.reduce((sum, area) => sum + area.foodInsecurityRate, 0) / markerData.length,
    criticalAreas: markerData.filter(area => area.foodInsecurityRate >= 20).length,
    highPriorityAreas: markerData.filter(area => area.foodInsecurityRate >= 16).length
  };

  return (
    <div className="w-full h-full relative">
      {/* Analytics Panel */}
      <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <h4 className="text-lg font-bold text-gray-800 mb-3">📊 Tuscaloosa Analytics</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Areas Monitored:</span>
            <span className="font-bold text-blue-600">{analyticsData.totalAreas}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Population:</span>
            <span className="font-bold text-blue-600">{analyticsData.totalPopulation.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">People Affected:</span>
            <span className="font-bold text-red-600">{analyticsData.totalAffected.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Average Rate:</span>
            <span className="font-bold text-orange-600">{analyticsData.averageRate.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Critical Areas:</span>
            <span className="font-bold text-red-600">{analyticsData.criticalAreas}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">High Priority:</span>
            <span className="font-bold text-orange-600">{analyticsData.highPriorityAreas}</span>
          </div>
        </div>
      </div>

      {/* Severity Legend */}
      <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-lg p-4">
        <h4 className="text-sm font-semibold mb-3">Severity Levels</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-xs">Low (&lt;12%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span className="text-xs">Medium (12-16%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span className="text-xs">High (16-20%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-xs">Critical (20%+)</span>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            🔵 Circle size = Severity radius<br/>
            📍 Marker size = Priority level
          </p>
        </div>
      </div>

      {hasError ? (
        <div className="w-full h-full rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map Unavailable</h3>
            <p className="text-gray-600 mb-4">{errorMessage}</p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <h4 className="font-semibold text-gray-800 mb-3">Tuscaloosa Food Insecurity Data</h4>
              <div className="space-y-2 text-sm">
                {markerData.slice(0, 5).map((data, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{data.title}</span>
                    <span className={`font-bold ${
                      data.foodInsecurityRate < 12 ? 'text-green-600' :
                      data.foodInsecurityRate < 16 ? 'text-yellow-600' :
                      data.foodInsecurityRate < 20 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {data.foodInsecurityRate}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Click on "Data Visualization" tab for full interactive map
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div 
            ref={mapRef} 
            className="w-full h-full rounded-lg shadow-lg"
            style={{ minHeight: '500px' }}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading map...</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GoogleMap;