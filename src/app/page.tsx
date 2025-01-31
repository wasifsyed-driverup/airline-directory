"use client"
import React, { useState } from 'react';

const airlineData = [
  { prefix: "000", code: "AA", airline: "American Airlines", location: "Delta City - Unit 3", telephone: "01784 425 000" },
  { prefix: "003", code: "DL", airline: "Delta Air Lines", location: "Delta City - Unit 3", telephone: "0208 745 1445" },
  { prefix: "018", code: "UA", airline: "Air Canada", location: "Delta City - Unit 3", telephone: "0871 224 3000" },
  { prefix: "023", code: "FX", airline: "Federal Express", location: "Swissport Building 521B", telephone: "0208 990 7782" },
  { prefix: "045", code: "AP", airline: "Aerolineas Argentinas", location: "HCH (Horton Rd)", telephone: "01784 425 389" },
  { prefix: "053", code: "TP", airline: "TAP Portugal", location: "WFS (Horseshoe)", telephone: "0208 564 1165" },
  { prefix: "067", code: "AF", airline: "Air France", location: "HCH 558 (Horseshoe)", telephone: "0208 750 4100" },
  { prefix: "070", code: "SJ", airline: "Srilanair", location: "HCH 558 (Horseshoe)", telephone: "0208 757 4737" },
  { prefix: "072", code: "ET", airline: "Ethiopian Airlines", location: "HCH 558 (Horseshoe)", telephone: "01753 210 008" },
  { prefix: "073", code: "GF", airline: "Gulf Air", location: "Delta City - Unit 3", telephone: "0208 757 4737" }
];

const AirlineSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAirlines = airlineData.filter(airline => 
    airline.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    airline.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    airline.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Airline Directory</h1>
          <input
            type="text"
            placeholder="Search airlines, codes, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Airline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Telephone</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAirlines.map((airline) => (
                <tr key={airline.prefix} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{airline.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{airline.airline}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{airline.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{airline.telephone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredAirlines.length} airlines
        </div>
      </div>
    </div>
  );
};

export default AirlineSearch;