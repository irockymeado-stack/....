import { useState } from 'react';
import { TrendingUp, DollarSign, Activity, Users, Eye, EyeOff, X, Plus, RefreshCw, ArrowUpRight, ArrowDownRight, FileText, BarChart3 } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  trend?: 'up' | 'down';
  color: string;
  icon: React.ReactNode;
}

function MetricCard({ title, value, subtitle, change, trend, color, icon }: MetricCardProps) {
  return (
    <div className={`metric-card ${color} relative overflow-hidden`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="opacity-20">{icon}</div>
      </div>
      {change && (
        <div className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span>{change}</span>
        </div>
      )}
    </div>
  );
}

interface ConversionPair {
  id: string;
  from: string;
  to: string;
  amount: number;
  rate: number;
  result: number;
  change: number;
  visible: boolean;
}

export default function Dashboard() {
  const [conversions, setConversions] = useState<ConversionPair[]>([
    {
      id: '1',
      from: 'USD',
      to: 'GHS',
      amount: 1000,
      rate: 12.467327,
      result: 12528.7889,
      change: 0.0363,
      visible: true,
    },
    {
      id: '2',
      from: 'USD',
      to: 'NGN',
      amount: 500,
      rate: 800.387828,
      result: 403403.814,
      change: -0.0628,
      visible: true,
    },
    {
      id: '3',
      from: 'USD',
      to: 'KES',
      amount: 1000,
      rate: 128.782369,
      result: 128765.2686,
      change: -0.078,
      visible: true,
    },
  ]);

  const [recentTransactions] = useState([
    { id: '1', initial: 'JS', name: 'John Smith', amount: '$1,000 USD → GHS', status: 'completed', color: 'bg-blue-500' },
    { id: '2', initial: 'MJ', name: 'Mary Johnson', amount: '$500 USD → NGN', status: 'pending', color: 'bg-green-500' },
    { id: '3', initial: 'DB', name: 'David Brown', amount: '$750 USD → PHP', status: 'completed', color: 'bg-orange-500' },
    { id: '4', initial: 'SW', name: 'Sarah Wilson', amount: '$800 USD → GHS', status: 'pending', color: 'bg-pink-500' },
    { id: '5', initial: 'MC', name: 'Michael Chen', amount: '$1,200 USD → PHP', status: 'pending', color: 'bg-purple-500' },
  ]);

  const [topCurrencyPairs] = useState([
    { rank: 1, from: 'USD', to: 'PHP', transactions: 2, revenue: '$1,950.00' },
    { rank: 2, from: 'USD', to: 'GHS', transactions: 2, revenue: '$1,800.00' },
    { rank: 3, from: 'USD', to: 'NGN', transactions: 2, revenue: '$1,150.00' },
  ]);

  const toggleVisibility = (id: string) => {
    setConversions(conversions.map(c =>
      c.id === id ? { ...c, visible: !c.visible } : c
    ));
  };

  const removeConversion = (id: string) => {
    setConversions(conversions.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$128"
          subtitle="↑ 32.51% from last month"
          color="bg-gradient-to-br from-blue-50 to-blue-100"
          icon={<DollarSign className="w-12 h-12" />}
        />
        <MetricCard
          title="Daily Transaction Volume"
          value="₵4,900"
          subtitle="Total volume: 6 transactions"
          change="Average per transaction: $817"
          color="bg-gradient-to-br from-green-50 to-green-100"
          icon={<Activity className="w-12 h-12" />}
        />
        <MetricCard
          title="Revenue Growth"
          value="+15.7%"
          subtitle="vs previous period"
          color="bg-gradient-to-br from-pink-50 to-pink-100"
          icon={<TrendingUp className="w-12 h-12" />}
        />
        <MetricCard
          title="Avg Transaction"
          value="$817"
          subtitle="per transaction"
          color="bg-gradient-to-br from-cyan-50 to-cyan-100"
          icon={<BarChart3 className="w-12 h-12" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900">Auto Conversions</h2>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                  Quiet
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {conversions.map((conv) => (
                <div key={conv.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700">US</span>
                      <span className="font-bold text-gray-900">{conv.from}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-sm font-medium text-gray-700">GH</span>
                      <span className="font-bold text-gray-900">{conv.to}</span>
                    </div>
                    <input
                      type="number"
                      value={conv.amount}
                      className="w-24 px-3 py-1 border border-gray-300 rounded-lg text-sm"
                      readOnly
                    />
                  </div>

                  <div className="flex-1 text-right">
                    <p className="text-2xl font-bold text-gray-900">{conv.result.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Rate: {conv.rate}</p>
                  </div>

                  <div className={`text-sm font-medium ${conv.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {conv.change >= 0 ? '↑' : '↓'} {Math.abs(conv.change).toFixed(2)}%
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleVisibility(conv.id)}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                    >
                      {conv.visible ? <Eye className="w-4 h-4 text-gray-600" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
                    </button>
                    <button
                      onClick={() => removeConversion(conv.id)}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}

              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-all flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                <span className="font-medium">Add Conversion Pair</span>
              </button>
              <p className="text-center text-xs text-gray-500">Auto refreshing every 30s</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
            <div className="space-y-3">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className={`w-10 h-10 ${tx.color} rounded-full flex items-center justify-center text-white font-medium`}>
                    {tx.initial}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{tx.name}</p>
                    <p className="text-xs text-gray-500">{tx.amount}</p>
                  </div>
                  <span className={`status-badge ${tx.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
                    {tx.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">System Status & Analytics</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Printer Status</span>
                <span className="status-badge bg-green-100 text-green-800">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Paper Level</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-600" style={{ width: '87%' }}></div>
                  </div>
                  <span className="text-xs font-medium text-gray-700">87%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Exchange Rates</span>
                <span className="status-badge bg-gray-900 text-white">Live</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Pending Transactions</span>
                <span className="text-sm font-bold text-gray-900">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Client Growth</span>
                <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +8.3%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="card p-6 hover:shadow-soft-lg transition-shadow">
          <p className="text-sm text-gray-600 mb-2">Revenue Growth</p>
          <div className="flex items-baseline gap-2">
            <TrendingUp className="w-5 h-5 text-gray-400" />
            <h3 className="text-3xl font-bold text-gray-900">+15.7%</h3>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs previous period</p>
        </div>

        <div className="card p-6 hover:shadow-soft-lg transition-shadow">
          <p className="text-sm text-gray-600 mb-2">Avg Transaction</p>
          <div className="flex items-baseline gap-2">
            <DollarSign className="w-5 h-5 text-gray-400" />
            <h3 className="text-3xl font-bold text-gray-900">$816.67</h3>
          </div>
          <p className="text-xs text-gray-500 mt-1">per transaction</p>
        </div>

        <div className="card p-6 hover:shadow-soft-lg transition-shadow">
          <p className="text-sm text-gray-600 mb-2">Success Rate</p>
          <div className="flex items-baseline gap-2">
            <Activity className="w-5 h-5 text-gray-400" />
            <h3 className="text-3xl font-bold text-gray-900">33.3%</h3>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-primary-600" style={{ width: '33.3%' }}></div>
          </div>
        </div>

        <div className="card p-6 hover:shadow-soft-lg transition-shadow">
          <p className="text-sm text-gray-600 mb-2">Revenue per Client</p>
          <div className="flex items-baseline gap-2">
            <Users className="w-5 h-5 text-gray-400" />
            <h3 className="text-3xl font-bold text-gray-900">$64.00</h3>
          </div>
          <p className="text-xs text-gray-500 mt-1">average lifetime value</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Currency Pairs</h2>
          </div>
          <div className="space-y-3">
            {topCurrencyPairs.map((pair) => (
              <div key={pair.rank} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-sm">
                  #{pair.rank}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{pair.from} → {pair.to}</p>
                  <p className="text-xs text-gray-500">{pair.transactions} transactions</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{pair.revenue}</p>
                  <p className="text-xs text-gray-500">Revenue: {pair.revenue.replace('$', '$')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Client Tiers</h2>
          <div className="space-y-3">
            <div className="text-center text-gray-500 py-8">No data available</div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Trends</h2>
            <div className="flex gap-1">
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">7d</button>
              <button className="px-3 py-1 text-xs bg-primary-600 text-white rounded">90d</button>
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">1y</button>
            </div>
          </div>
          <div className="text-center text-gray-500 py-8">No trend data</div>
        </div>
      </div>
    </div>
  );
}
