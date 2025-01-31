"use client"
import React, { useState } from 'react';

const airlineData = [
  {
    "prefix": "0",
    "code": "",
    "airline": "Blue Air",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "1",
    "code": "AA",
    "airline": "American Airlines",
    "location": "Delta City - Unit 3",
    "telephone": "01784 425 000"
  },
  {
    "prefix": "6",
    "code": "DL",
    "airline": "Delta Air Lines",
    "location": "Delta City - Unit 3",
    "telephone": "0208 745 1445"
  },
  {
    "prefix": "14",
    "code": "UA",
    "airline": "Air Canada",
    "location": "Delta City - Unit 3",
    "telephone": "0871 224 3000"
  },
  {
    "prefix": "16",
    "code": "",
    "airline": "united Airlines",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "20",
    "code": "",
    "airline": "HCH",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "23",
    "code": "FX",
    "airline": "Federal Express",
    "location": "Swissport Building 521B",
    "telephone": "0208 990 7782"
  },
  {
    "prefix": "40",
    "code": "",
    "airline": "CamAir - Co",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "44",
    "code": "AP",
    "airline": "Aerollness Argentinas",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 425 389"
  },
  {
    "prefix": "45",
    "code": "",
    "airline": "American",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "47",
    "code": "TP",
    "airline": "TAP Portugal",
    "location": "WFS (Horseshoe)",
    "telephone": "0208 564 1165"
  },
  {
    "prefix": "53",
    "code": "",
    "airline": "Air Lingus",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "55",
    "code": "",
    "airline": "Alltalla",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "57",
    "code": "AF",
    "airline": "Air France",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0208 750 4100"
  },
  {
    "prefix": "64",
    "code": "",
    "airline": "Czech Airlines",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "65",
    "code": "",
    "airline": "Saudi Arabian Airlines",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "70",
    "code": "SJ",
    "airline": "Sriyan air",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0208 757 4737"
  },
  {
    "prefix": "71",
    "code": "ET",
    "airline": "Ethiopian Airlines (cargo point)",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "01753 210 008"
  },
  {
    "prefix": "72",
    "code": "GF",
    "airline": "Gulf Air",
    "location": "Delta City - Unit 3",
    "telephone": "0208 757 4737"
  },
  {
    "prefix": "74",
    "code": "IB",
    "airline": "KLM",
    "location": "HCH (Horton Rd)",
    "telephone": "0208 750 4100"
  },
  {
    "prefix": "75",
    "code": "ME",
    "airline": "IBERIA",
    "location": "BAWC",
    "telephone": "0208 738 4141"
  },
  {
    "prefix": "77",
    "code": "MS",
    "airline": "Egypt air",
    "location": "Menzies 1 (Horseshoe)",
    "telephone": "0208 897 7547"
  },
  {
    "prefix": "80",
    "code": "LO",
    "airline": "LOT Polish Airlines",
    "location": "Delta City - Unit 3",
    "telephone": "0208 897 0834"
  },
  {
    "prefix": "81",
    "code": "",
    "airline": "Qantas",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "82",
    "code": "SN",
    "airline": "Brussels Airlines",
    "location": "Delta - Building 549",
    "telephone": "01332 850021"
  },
  {
    "prefix": "83",
    "code": "SA",
    "airline": "South African",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "86",
    "code": "",
    "airline": "Air newzeland",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "96",
    "code": "IR",
    "airline": "Iran Air",
    "location": "Delta City - Unit 3",
    "telephone": "0208 564 8813"
  },
  {
    "prefix": "98",
    "code": "AI",
    "airline": "Air India",
    "location": "Delta City - Unit 3",
    "telephone": "0208 745 1353"
  },
  {
    "prefix": "105",
    "code": "AY",
    "airline": "Finnair",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "01784 266 380"
  },
  {
    "prefix": "106",
    "code": "MS",
    "airline": "Caribbean Airlines",
    "location": "Cargo Point",
    "telephone": "01784 266 380"
  },
  {
    "prefix": "108",
    "code": "",
    "airline": "Ice Land Air",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "112",
    "code": "CK",
    "airline": "China Eastern",
    "location": "HCH Shoreham Rd",
    "telephone": "01784 266 021"
  },
  {
    "prefix": "114",
    "code": "LY",
    "airline": "EL AL",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "115",
    "code": "JU",
    "airline": "AIR SERBIA (Jat)",
    "location": "WFS 550a (Horseshoe)",
    "telephone": "01784 266 164"
  },
  {
    "prefix": "117",
    "code": "SK",
    "airline": "SAS",
    "location": "ASC CARGO",
    "telephone": "0208 283 0088"
  },
  {
    "prefix": "118",
    "code": "OT",
    "airline": "TAAG",
    "location": "HCH (Horton Rd)",
    "telephone": "0208 759 8888"
  },
  {
    "prefix": "124",
    "code": "AH",
    "airline": "Air Algeria",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "08444 757 400"
  },
  {
    "prefix": "125",
    "code": "BA",
    "airline": "British Airways",
    "location": "BAWC/Premier/BARC",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "126",
    "code": "",
    "airline": "Garuda",
    "location": "",
    "telephone": ""
  },
  {
    "prefix": "131",
    "code": "JL",
    "airline": "Japan Airlines",
    "location": "X2 (Hatton Cross)",
    "telephone": "01784 422 632"
  },
  {
    "prefix": "139",
    "code": "AM",
    "airline": "Aeromexico (Cargo Point)",
    "location": "Delta City - Unit 3",
    "telephone": "0208 757 4778"
  },
  {
    "prefix": "147",
    "code": "AT",
    "airline": "Royal Air Maroc",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0208 745 4735"
  },
  {
    "prefix": "148",
    "code": "LN",
    "airline": "Libyan Airlines",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0208 757 4760"
  },
  {
    "prefix": "149",
    "code": "LG",
    "airline": "Lux air",
    "location": "WFS (Horseshoe)",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "157",
    "code": "QR",
    "airline": "Qatar Airways",
    "location": "Delta City - Unit 2",
    "telephone": "0845 6599 157"
  },
  {
    "prefix": "160",
    "code": "CX",
    "airline": "Cathay Pacific",
    "location": "Delta - South Point",
    "telephone": "0330 0429 347"
  },
  {
    "prefix": "165",
    "code": "JP",
    "airline": "Adria Airways",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0845 1772 165"
  },
  {
    "prefix": "168",
    "code": "UM",
    "airline": "Air Zimbabwe",
    "location": "HCH (Horton Rd)",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "172",
    "code": "OV",
    "airline": "Cargolux S.A.",
    "location": "ASC CARGO",
    "telephone": "0208 759 0747"
  },
  {
    "prefix": "176",
    "code": "EK",
    "airline": "Emirates",
    "location": "Delta City - Unit 1",
    "telephone": "0208 897 9090"
  },
  {
    "prefix": "180",
    "code": "KE",
    "airline": "Korean Air",
    "location": "Swissport Building 521B",
    "telephone": "0208 897 0037"
  },
  {
    "prefix": "186",
    "code": "SW",
    "airline": "Air Namibia",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 266 178"
  },
  {
    "prefix": "187",
    "code": "DW",
    "airline": "Aerochartar",
    "location": "ASC CARGO",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "192",
    "code": "PY",
    "airline": "Surinam Airlines",
    "location": "HCH (Horton Rd)",
    "telephone": "0208 990 9090"
  },
  {
    "prefix": "199",
    "code": "TU",
    "airline": "Tunis Air",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "01784 425 320"
  },
  {
    "prefix": "200",
    "code": "SD",
    "airline": "Sudan Airways",
    "location": "Delta - Cargo Point",
    "telephone": "0208 897 7103"
  },
  {
    "prefix": "205",
    "code": "NH",
    "airline": "All Nippon Airways",
    "location": "X2 (Hatton Cross)",
    "telephone": "0208 759 8746"
  },
  {
    "prefix": "214",
    "code": "PK",
    "airline": "Pakistan Airlines",
    "location": "Pakistan Airlines (Shoreham Rd)",
    "telephone": "0208 564 0190"
  },
  {
    "prefix": "217",
    "code": "TG",
    "airline": "Thai Airways International",
    "location": "Menzies 1 (Horseshoe)",
    "telephone": "0208 745 7428"
  },
  {
    "prefix": "229",
    "code": "KU",
    "airline": "Kuwait Airways",
    "location": "Menzies 1 (Horseshoe)",
    "telephone": "0845 7800 006"
  },
  {
    "prefix": "230",
    "code": "CM",
    "airline": "COPA Airlines",
    "location": "HCH (Horton Rd)",
    "telephone": "0208 760 0142"
  },
  {
    "prefix": "232",
    "code": "MH",
    "airline": "Malaysia Airlines",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "01784 425 686"
  },
  {
    "prefix": "235",
    "code": "TK",
    "airline": "Turkish Airlines",
    "location": "WFS 550b (Horseshoe)",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "239",
    "code": "MK",
    "airline": "Air Mauritius",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 425 384"
  },
  {
    "prefix": "242",
    "code": "SBO",
    "airline": "Siabo Air",
    "location": "HCH (Horton Rd)",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "258",
    "code": "MD",
    "airline": "Air Madagascar",
    "location": "HCH (Horton Rd)",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "261",
    "code": "BE",
    "airline": "Flybe",
    "location": "HCH (Horton Rd)",
    "telephone": "01332 810 204"
  },
  {
    "prefix": "297",
    "code": "RO",
    "airline": "Tarom",
    "location": "Location In LHR",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "301",
    "code": "CZ",
    "airline": "China Airlines",
    "location": "Menzies 1 (Horseshoe)",
    "telephone": "01784 266 178"
  },
  {
    "prefix": "307",
    "code": "WE",
    "airline": "Global Air",
    "location": "WFS (Horseshoe)",
    "telephone": "01753 660060"
  },
  {
    "prefix": "328",
    "code": "DY",
    "airline": "Centurion Air Cargo",
    "location": "Delta City - Unit 3",
    "telephone": "0208 564 5543"
  },
  {
    "prefix": "356",
    "code": "E7",
    "airline": "Estafeta",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 266 168"
  },
  {
    "prefix": "406",
    "code": "A3",
    "airline": "Aegean Airlines",
    "location": "Menzies 1 (Horseshoe)",
    "telephone": "01784 425 389"
  },
  {
    "prefix": "452",
    "code": "3O",
    "airline": "Budget Air Cargo",
    "location": "Swissport Building",
    "telephone": "0208 757 4730"
  },
  {
    "prefix": "470",
    "code": "KC",
    "airline": "Air Arabia",
    "location": "HCH (Horton Rd)",
    "telephone": "0845 886 4044"
  },
  {
    "prefix": "501",
    "code": "ZL",
    "airline": "WOW air",
    "location": "WFS Scylla Road",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "517",
    "code": "RJ",
    "airline": "Silk Way",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 266 170"
  },
  {
    "prefix": "542",
    "code": "T5",
    "airline": "Royal Jordanian",
    "location": "ASC CARGO",
    "telephone": "0208 567 0931"
  },
  {
    "prefix": "555",
    "code": "M3",
    "airline": "Air Mediterranee",
    "location": "WFS (Horseshoe)",
    "telephone": "020"
  },
  {
    "prefix": "566",
    "code": "SU",
    "airline": "Aeroflot",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "568",
    "code": "PS",
    "airline": "MAGMA",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0208 564 5551"
  },
  {
    "prefix": "572",
    "code": "9U",
    "airline": "Ukraine International Airlines",
    "location": "Delta City - Unit 3",
    "telephone": "01642 83 00 00"
  },
  {
    "prefix": "574",
    "code": "4W",
    "airline": "Air Moldova",
    "location": "Delta City - Unit 3",
    "telephone": "0208 757 4733"
  },
  {
    "prefix": "575",
    "code": "ZC",
    "airline": "Allied Air",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 425 373"
  },
  {
    "prefix": "580",
    "code": "RU",
    "airline": "Coyne",
    "location": "WFS 550b (Horseshoe)",
    "telephone": "0207 605 318"
  },
  {
    "prefix": "603",
    "code": "UL",
    "airline": "Jet Airways",
    "location": "Delta City - Unit 3",
    "telephone": "0208 917 1310"
  },
  {
    "prefix": "607",
    "code": "SY",
    "airline": "SriLankan",
    "location": "WFS 549 (Horseshoe)",
    "telephone": "0208 564 0890"
  },
  {
    "prefix": "615",
    "code": "CY",
    "airline": "Etihad Airways",
    "location": "Swissport Building 521B",
    "telephone": "0208 534 2010"
  },
  {
    "prefix": "616",
    "code": "SS",
    "airline": "European Air Transport/DHL",
    "location": "WFS (Horseshoe)",
    "telephone": "01784 425 313"
  },
  {
    "prefix": "623",
    "code": "FB",
    "airline": "Singapore",
    "location": "DHL Shoreham Rd",
    "telephone": "01332 653 256"
  },
  {
    "prefix": "624",
    "code": "FC",
    "airline": "Bulgaria air",
    "location": "WFS 550a (Horseshoe)",
    "telephone": "0208 283 2660"
  },
  {
    "prefix": "635",
    "code": "IY",
    "airline": "Pegasus Airlines",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0208 757 4736"
  },
  {
    "prefix": "643",
    "code": "KM",
    "airline": "Yemen",
    "location": "HCH (Horton Rd)",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "649",
    "code": "TS",
    "airline": "Air Malta",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "01784 425 393"
  },
  {
    "prefix": "672",
    "code": "BT",
    "airline": "Air Baltic",
    "location": "WFS (Horseshoe)",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "695",
    "code": "EI",
    "airline": "Aer Lingus",
    "location": "WFS Scylla Road",
    "telephone": "01784 266 102"
  },
  {
    "prefix": "700",
    "code": "BR",
    "airline": "EVA Air",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "708",
    "code": "KQ",
    "airline": "C.A.L Cargo Airlines",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 422 725"
  },
  {
    "prefix": "716",
    "code": "MB",
    "airline": "Kenya Airways",
    "location": "Swissport Building 521B",
    "telephone": "0208 283 1821"
  },
  {
    "prefix": "724",
    "code": "LX",
    "airline": "SWISS",
    "location": "HCH 558 (Horseshoe) - Express Window",
    "telephone": "0844 8588 724"
  },
  {
    "prefix": "725",
    "code": "W3",
    "airline": "Arik Air",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0208 757 4779"
  },
  {
    "prefix": "727",
    "code": "MT",
    "airline": "MyTravel/Thomas Cook",
    "location": "HCH (Horton Rd)",
    "telephone": "0845 880 7727"
  },
  {
    "prefix": "729",
    "code": "AV",
    "airline": "Avianca",
    "location": "Direct file HCH 558(Horseshoe)/Other file Dnata VS",
    "telephone": "01784 425 313"
  },
  {
    "prefix": "738",
    "code": "VN",
    "airline": "Vietnam Airlines",
    "location": "WFS 550b (Horseshoe)",
    "telephone": "0208 757 4734"
  },
  {
    "prefix": "745",
    "code": "LT/AB",
    "airline": "Leisure Cargo",
    "location": "WFS (Horseshoe)",
    "telephone": "0203 432 7810"
  },
  {
    "prefix": "757",
    "code": "Z9",
    "airline": "Wizzair",
    "location": "Dnata City - Unit 3",
    "telephone": "01980 676 010"
  },
  {
    "prefix": "771",
    "code": "J2",
    "airline": "Azerbaijan Airlines",
    "location": "ASC CARGO",
    "telephone": "0208 738 1612"
  },
  {
    "prefix": "784",
    "code": "CZ",
    "airline": "China Southern Airlines",
    "location": "HCH 558 (Horseshoe)",
    "telephone": "0845 1771 784"
  },
  {
    "prefix": "810",
    "code": "M6",
    "airline": "Amerijet",
    "location": "Dnata - Cargo Point",
    "telephone": "01784 425 384"
  },
  {
    "prefix": "831",
    "code": "OU",
    "airline": "Croatia Airlines",
    "location": "Menzies 1 (Horseshoe)",
    "telephone": "01753 690060"
  },
  {
    "prefix": "843",
    "code": "D7",
    "airline": "Air Asia X",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 425 384"
  },
  {
    "prefix": "851",
    "code": "HX",
    "airline": "Hong Kong Airlines",
    "location": "HCH (Horton Rd)",
    "telephone": "0845 1771 851"
  },
  {
    "prefix": "871",
    "code": "Y8",
    "airline": "Yangtze River Express",
    "location": "Dnata City - Unit 3",
    "telephone": "01784 425 666"
  },
  {
    "prefix": "901",
    "code": "B1",
    "airline": "TAB Bolivia",
    "location": "Dnata - Cargo Point",
    "telephone": "01784 479 900"
  },
  {
    "prefix": "910",
    "code": "WY",
    "airline": "Oman Air",
    "location": "Swissport Building 521B",
    "telephone": "0845 686 0176"
  },
  {
    "prefix": "932",
    "code": "VS",
    "airline": "Virgin Atlantic",
    "location": "Dnata - Cargo Point",
    "telephone": "0844 209 8300"
  },
  {
    "prefix": "933",
    "code": "KZ",
    "airline": "Nippon Cargo Airlines (NCA)",
    "location": "WFS Scylla Road",
    "telephone": "01332 850 021"
  },
  {
    "prefix": "959",
    "code": "LE",
    "airline": "Leparkan",
    "location": "HCH (Horton Rd)",
    "telephone": "01784 425 391"
  },
  {
    "prefix": "974",
    "code": "ZB",
    "airline": "Monarch",
    "location": "Dnata City - Unit 3",
    "telephone": "01753 686 852"
  },
  {
    "prefix": "988",
    "code": "OZ",
    "airline": "Asiana",
    "location": "Menzies 1 (Horseshoe)",
    "telephone": "0208 759 0300"
  },
  {
    "prefix": "997",
    "code": "BG",
    "airline": "Biman Bangladesh",
    "location": "Dnata City - Unit 3",
    "telephone": "0208 757 4744"
  },
  {
    "prefix": "999",
    "code": "CA",
    "airline": "Air China Limited",
    "location": "WFS 550b (Horseshoe)",
    "telephone": "0843 898 0175"
  }

];
const AirlineSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAirlines = airlineData.filter(airline => 
  
    airline.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    airline.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    airline.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airline.prefix.includes(searchTerm.toLowerCase()) 
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
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Prefix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Airline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Telephone</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAirlines.map((airline) => (
                <tr key={airline.prefix} className="hover:bg-gray-50 transition-colors">
                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{airline.prefix}</td>
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