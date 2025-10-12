import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFoodInsecurityData, FoodInsecurityData } from '../services/FoodInsecurityDataService';

const TuscaloosaMap: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('Tuscaloosa County');
  const { data, loading, error } = useFoodInsecurityData();
  const [currentData, setCurrentData] = useState<FoodInsecurityData | null>(null);

  useEffect(() => {
    if (data.length > 0) {
      const selected = data.find(d => d.area === selectedArea);
      if (selected) {
        setCurrentData(selected);
      }
    }
  }, [selectedArea, data]);

  const mapAreas = [
    { id: 'tuscaloosa-county', name: 'Tuscaloosa County', x: 50, y: 30, width: 200, height: 180 },
    { id: 'tuscaloosa-city', name: 'Tuscaloosa City', x: 80, y: 60, width: 120, height: 80 },
    { id: 'northport', name: 'Northport', x: 30, y: 140, width: 80, height: 60 },
    { id: 'cottondale', name: 'Cottondale', x: 180, y: 100, width: 70, height: 50 },
    { id: 'holt', name: 'Holt', x: 40, y: 100, width: 50, height: 40 },
    { id: 'brookwood', name: 'Brookwood', x: 160, y: 160, width: 60, height: 40 },
    { id: 'coaling', name: 'Coaling', x: 120, y: 40, width: 50, height: 35 },
    { id: 'vance', name: 'Vance', x: 200, y: 80, width: 45, height: 30 },
    { id: 'lake-view', name: 'Lake View', x: 70, y: 20, width: 55, height: 35 },
    { id: 'woodstock', name: 'Woodstock', x: 150, y: 20, width: 50, height: 30 }
  ];

  const getColorIntensity = (rate: number) => {
    if (rate < 10) return '#e8f5e8'; // Light green
    if (rate < 15) return '#fff3cd'; // Light yellow
    if (rate < 20) return '#f8d7da'; // Light red
    return '#f5c6cb'; // Darker red
  };

  const getBorderColor = (rate: number) => {
    if (rate < 10) return '#28a745';
    if (rate < 15) return '#ffc107';
    if (rate < 20) return '#dc3545';
    return '#721c24';
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading food insecurity data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-red-600 text-4xl mb-4">⚠️</div>
            <p className="text-red-600 mb-2">Failed to load data</p>
            <p className="text-gray-600 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tuscaloosa Food Insecurity Map</h2>
        <p className="text-gray-600">Interactive map showing food insecurity rates across Tuscaloosa County</p>
        <div className="mt-2 text-sm text-gray-500">
          Last updated: {data.length > 0 ? data[0].lastUpdated : 'N/A'} | 
          Data source: {data.length > 0 ? data[0].source : 'N/A'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="relative bg-gray-50 rounded-lg p-4 min-h-[400px]">
            <svg
              viewBox="0 0 300 200"
              className="w-full h-full"
              style={{ maxHeight: '400px' }}
            >
              {mapAreas.map((area) => {
                const areaData = data.find(d => d.area === area.name);
                const rate = areaData?.rate || 0;
                const isSelected = selectedArea === area.name;
                const affectedPeople = Math.round((areaData?.population || 0) * rate / 100);
                
                return (
                  <g key={area.id}>
                    <motion.rect
                      x={area.x}
                      y={area.y}
                      width={area.width}
                      height={area.height}
                      fill={getColorIntensity(rate)}
                      stroke={getBorderColor(rate)}
                      strokeWidth={isSelected ? 3 : 2}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedArea(area.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      rx="8"
                    />
                    
                    {/* Hover tooltip */}
                    <motion.text
                      x={area.x + area.width / 2}
                      y={area.y + area.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs font-medium fill-gray-700 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {area.name}
                    </motion.text>
                    
                    {/* Rate indicator */}
                    <motion.text
                      x={area.x + area.width / 2}
                      y={area.y + area.height / 2 + 12}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs font-bold fill-red-600 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {rate.toFixed(1)}%
                    </motion.text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-sm">
              <h4 className="text-sm font-semibold mb-2">Food Insecurity Rate</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-200 border border-green-500 rounded"></div>
                  <span className="text-xs">Under 10%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-200 border border-yellow-500 rounded"></div>
                  <span className="text-xs">10-15%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-200 border border-red-500 rounded"></div>
                  <span className="text-xs">15-20%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-300 border border-red-700 rounded"></div>
                  <span className="text-xs">Over 20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Panel */}
        <div className="space-y-4">
          {currentData ? (
            <>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  {currentData.area}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Food Insecurity Rate</span>
                    <span className="text-lg font-bold text-red-600">
                      {currentData.rate.toFixed(1)}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-red-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${currentData.rate}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {currentData.population.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600">Total Population</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {currentData.children.toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-600">Children Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Quick Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Seniors Affected</span>
                    <span className="font-medium">{currentData.seniors.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Estimated People</span>
                    <span className="font-medium">
                      {Math.round((currentData.population * currentData.rate) / 100).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-medium">{currentData.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-center">Select an area on the map to view data</p>
            </div>
          )}

          {/* Priority Areas Section */}
          <div className="bg-red-50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-red-900 mb-3">🚨 Priority Areas Needing Food Assistance</h4>
            <div className="space-y-2">
              {data
                .filter(area => area.rate >= 18)
                .sort((a, b) => b.rate - a.rate)
                .slice(0, 3)
                .map((area, index) => (
                  <div key={area.area} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-red-800">{area.area}</span>
                    <span className="font-bold text-red-600">{area.rate.toFixed(1)}%</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              View Detailed Report
            </button>
            <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
              Download Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuscaloosaMap;
