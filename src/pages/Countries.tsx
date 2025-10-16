import { useState } from 'react';
import { Search, Download, RefreshCw, Star, Wifi } from 'lucide-react';

interface Currency {
  code: string;
  name: string;
  country: string;
  rate: number;
  change: number;
  region: string;
  isFavorite?: boolean;
  isConnected?: boolean;
}

export default function Countries() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [sortBy, setSortBy] = useState('A-Z');

  const currencies: Currency[] = [
    { code: 'AED', name: 'United Arab Emirates', country: 'Dirham', rate: 3.6565, change: -0.37, region: 'Middle East' },
    { code: 'AUD', name: 'Australia', country: 'Dollar', rate: 1.5130, change: -0.46, region: 'Oceania' },
    { code: 'BRL', name: 'Brazil', country: 'Real', rate: 4.8923, change: -1.17, region: 'South America' },
    { code: 'CAD', name: 'Canada', country: 'Dollar', rate: 1.3574, change: -0.19, region: 'North America' },
    { code: 'CHF', name: 'Switzerland', country: 'Franc', rate: 0.8771, change: -0.33, region: 'Europe' },
    { code: 'CNY', name: 'China', country: 'Yuan', rate: 7.2691, change: -0.15, region: 'Asia' },
    { code: 'EGP', name: 'Egypt', country: 'Pound', rate: 30.8689, change: 0.06, region: 'Africa' },
    { code: 'EUR', name: 'European Union', country: 'Euro', rate: 0.9191, change: -0.10, region: 'Europe' },
    { code: 'GBP', name: 'United Kingdom', country: 'Pound', rate: 0.7935, change: 0.44, region: 'Europe' },
    { code: 'GHS', name: 'Ghana', country: 'Cedi', rate: 12.4633, change: 0.11, region: 'Africa', isConnected: true },
    { code: 'INR', name: 'India', country: 'Rupee', rate: 82.9351, change: -0.38, region: 'Asia' },
    { code: 'JPY', name: 'Japan', country: 'Yen', rate: 150.4098, change: 0.37, region: 'Asia' },
    { code: 'KES', name: 'Kenya', country: 'Shilling', rate: 129.5021, change: -0.19, region: 'Africa' },
    { code: 'KRW', name: 'South Korea', country: 'Won', rate: 1339.2476, change: 0.28, region: 'Asia' },
    { code: 'MXN', name: 'Mexico', country: 'Peso', rate: 17.8143, change: -0.29, region: 'North America' },
    { code: 'NGN', name: 'Nigeria', country: 'Naira', rate: 796.9150, change: 0.18, region: 'Africa', isConnected: true },
    { code: 'PHP', name: 'Philippines', country: 'Peso', rate: 56.7885, change: 0.07, region: 'Asia', isConnected: true },
    { code: 'SAR', name: 'Saudi Arabia', country: 'Riyal', rate: 3.7394, change: -0.28, region: 'Middle East' },
    { code: 'ZAR', name: 'South Africa', country: 'Rand', rate: 18.4962, change: -1.35, region: 'Africa' },
  ];

  const regions = ['All Regions', 'Favorites', 'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Middle East'];

  const filteredCurrencies = currencies.filter(currency => {
    const matchesSearch =
      currency.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.country.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion = selectedRegion === 'All Regions' ||
                         (selectedRegion === 'Favorites' && currency.isFavorite) ||
                         currency.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Countries & Exchange Rates</h1>
      </div>

      <div className="card p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search countries or currencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Export Rates</span>
            </button>
            <button className="btn-primary flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedRegion === region
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {region === 'Favorites' && <Star className="w-4 h-4 inline mr-1" />}
              {region}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredCurrencies.length} of {currencies.length} currencies
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Rate">Rate</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCurrencies.map((currency) => (
          <div
            key={currency.code}
            className="group relative bg-white rounded-xl border border-gray-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-soft-xl hover:border-primary-300 hover:-translate-y-1 hover:scale-[1.02]"
          >
            {currency.isConnected && (
              <div className="absolute top-4 right-4">
                <span className="status-badge bg-gray-900 text-white text-xs flex items-center gap-1 shadow-sm">
                  <Wifi className="w-3 h-3" />
                  Connected
                </span>
              </div>
            )}

            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                <span className="text-xl font-bold text-primary-700">{currency.code.substring(0, 2)}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary-700 transition-colors">{currency.code}</h3>
                <p className="text-sm text-gray-600">{currency.name}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-gray-600">Exchange Rate</span>
                <span className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{currency.rate.toLocaleString()}</span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm text-gray-600">24h Change</span>
                <span className={`text-sm font-medium px-2 py-1 rounded-lg transition-all ${currency.change >= 0 ? 'text-green-700 bg-green-50 group-hover:bg-green-100' : 'text-red-700 bg-red-50 group-hover:bg-red-100'}`}>
                  {currency.change >= 0 ? '↑' : '↓'} {Math.abs(currency.change)}%
                </span>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Last Updated</span>
                  <span className="font-medium">18-07-25 AM</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
