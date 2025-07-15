
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Package, DollarSign, Users, AlertTriangle, CheckCircle, Brain, Activity, Target, UserCheck } from 'lucide-react';

const Dashboard = () => {
  const [activeAgents, setActiveAgents] = useState(3);
  
  // Mock data for demand forecasting based on uploaded spreadsheet
  const demandData = [
    { month: 'Jan', actual: 334, predicted: 338, future: null },
    { month: 'Feb', actual: 429, predicted: 425, future: null },
    { month: 'Mar', actual: 344, predicted: 350, future: null },
    { month: 'Apr', actual: 368, predicted: 365, future: null },
    { month: 'May', actual: 475, predicted: 480, future: null },
    { month: 'Jun', actual: 431, predicted: 428, future: null },
    { month: 'Jul', actual: null, predicted: null, future: 445 },
    { month: 'Aug', actual: null, predicted: null, future: 490 },
    { month: 'Sep', actual: null, predicted: null, future: 520 },
    { month: 'Oct', actual: null, predicted: null, future: 485 },
    { month: 'Nov', actual: null, predicted: null, future: 580 },
    { month: 'Dec', actual: null, predicted: null, future: 650 },
  ];

  const inventoryData = [
    { store: 'Store 49 - Mumbai', current: 60, optimal: 100, status: 'warning' },
    { store: 'Store 77 - Delhi', current: 95, optimal: 100, status: 'good' },
    { store: 'Store 53 - Bangalore', current: 45, optimal: 100, status: 'critical' },
    { store: 'Store 19 - Chennai', current: 78, optimal: 100, status: 'good' },
    { store: 'Store 66 - Kolkata', current: 25, optimal: 100, status: 'critical' },
  ];

  const pricingData = [
    { product: 'Product 2695', currentPrice: 31.51, suggestedPrice: 29.85, impact: '+5.3%' },
    { product: 'Product 5540', currentPrice: 35.51, suggestedPrice: 38.20, impact: '+7.6%' },
    { product: 'Product 2435', currentPrice: 6.54, suggestedPrice: 7.15, impact: '+9.3%' },
    { product: 'Product 3489', currentPrice: 13.51, suggestedPrice: 14.25, impact: '+5.5%' },
    { product: 'Product 7318', currentPrice: 62.68, suggestedPrice: 65.80, impact: '+5.0%' },
  ];

  const agentActivities = [
    { agent: 'Demand Forecasting Agent', status: 'active', task: 'Processing Q2 demand patterns', accuracy: 94 },
    { agent: 'Inventory Monitoring Agent', status: 'active', task: 'Scanning warehouse levels', accuracy: 97 },
    { agent: 'Pricing Optimization Agent', status: 'active', task: 'Adjusting seasonal prices', accuracy: 89 },
    { agent: 'Supply Chain Agent', status: 'idle', task: 'Standby mode', accuracy: 92 },
  ];

  // Product recommendation data based on uploaded spreadsheet
  const productRecommendations = [
    { product: 'P2000 - Fashion Jeans', category: 'Fashion', price: 713, brand: 'Brand B', probability: 0.91, season: 'Summer' },
    { product: 'P2001 - Beauty Lipstick', category: 'Beauty', price: 232, brand: 'Brand D', probability: 0.86, season: 'Winter' },
    { product: 'P2002 - Electronics Laptop', category: 'Electronics', price: 4833, brand: 'Brand B', probability: 0.6, season: 'Spring' },
    { product: 'P2003 - Books Comics', category: 'Books', price: 802, brand: 'Brand D', probability: 0.36, season: 'Winter' },
    { product: 'P2004 - Home Decor Cushion', category: 'Home Decor', price: 356, brand: 'Brand C', probability: 0.37, season: 'Summer' },
  ];

  // Customer analytics data based on uploaded spreadsheet
  const customerData = [
    { segment: 'Young Adult (18-30)', count: 156, avgOrder: 2547, location: 'Mumbai', gender: 'Mixed' },
    { segment: 'Adult (31-45)', count: 89, avgOrder: 3124, location: 'Delhi', gender: 'Mixed' },
    { segment: 'Senior (46+)', count: 67, avgOrder: 2890, location: 'Chennai', gender: 'Mixed' },
  ];

  const locationData = [
    { city: 'Mumbai', customers: 45, avgOrder: 2650 },
    { city: 'Delhi', customers: 38, avgOrder: 3200 },
    { city: 'Chennai', customers: 32, avgOrder: 2890 },
    { city: 'Bangalore', customers: 28, avgOrder: 3450 },
    { city: 'Kolkata', customers: 22, avgOrder: 2340 },
  ];

  const pieData = [
    { name: 'In Stock', value: 65, color: '#10B981' },
    { name: 'Low Stock', value: 25, color: '#F59E0B' },
    { name: 'Out of Stock', value: 10, color: '#EF4444' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgents(prev => prev === 3 ? 2 : 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Multi-Agent Retail Inventory System</h1>
          <p className="text-purple-200">AI-Powered Inventory Optimization & Management</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Revenue</p>
                  <p className="text-white text-2xl font-bold">$2.4M</p>
                  <p className="text-green-400 text-xs flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12.5%
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Inventory Items</p>
                  <p className="text-white text-2xl font-bold">15,847</p>
                  <p className="text-blue-400 text-xs flex items-center mt-1">
                    <Package className="w-3 h-3 mr-1" />
                    Active
                  </p>
                </div>
                <Package className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Active Agents</p>
                  <p className="text-white text-2xl font-bold">{activeAgents}/3</p>
                  <p className="text-purple-400 text-xs flex items-center mt-1">
                    <Brain className="w-3 h-3 mr-1" />
                    AI Powered
                  </p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Efficiency</p>
                  <p className="text-white text-2xl font-bold">93%</p>
                  <p className="text-emerald-400 text-xs flex items-center mt-1">
                    <Activity className="w-3 h-3 mr-1" />
                    Optimized
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border-white/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">Overview</TabsTrigger>
            <TabsTrigger value="agents" className="data-[state=active]:bg-purple-600">AI Agents</TabsTrigger>
            <TabsTrigger value="forecasting" className="data-[state=active]:bg-purple-600">Demand Forecasting</TabsTrigger>
            <TabsTrigger value="inventory" className="data-[state=active]:bg-purple-600">Inventory Monitor</TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-purple-600">Pricing Optimization</TabsTrigger>
            <TabsTrigger value="recommendations" className="data-[state=active]:bg-purple-600">Product Recommendations</TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-purple-600">Customer Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Inventory Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">System Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-1">
                      <span>Forecast Accuracy</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-1">
                      <span>Inventory Optimization</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-1">
                      <span>Price Optimization</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-1">
                      <span>Supply Chain Efficiency</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agentActivities.map((agent, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white text-lg">{agent.agent}</CardTitle>
                      <Badge className={agent.status === 'active' ? 'bg-green-600' : 'bg-gray-600'}>
                        {agent.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-200 mb-3">{agent.task}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-300">Accuracy:</span>
                      <span className="text-white font-semibold">{agent.accuracy}%</span>
                    </div>
                    <Progress value={agent.accuracy} className="mt-2 h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forecasting">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Demand Forecasting - Historical vs Future Predictions</CardTitle>
                <p className="text-purple-200 text-sm">Historical data (Jan-Jun) and AI-predicted upcoming demand (Jul-Dec)</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={demandData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        border: '1px solid rgba(148, 163, 184, 0.3)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="#10B981" 
                      strokeWidth={3} 
                      name="Actual Sales"
                      connectNulls={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="#8B5CF6" 
                      strokeWidth={3} 
                      name="AI Predictions (Historical)"
                      connectNulls={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="future" 
                      stroke="#F59E0B" 
                      strokeWidth={3} 
                      strokeDasharray="8 8"
                      name="Future Demand Forecast"
                      connectNulls={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 flex justify-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-green-500 mr-2"></div>
                    <span className="text-purple-200">Actual Sales</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-purple-500 mr-2"></div>
                    <span className="text-purple-200">AI Predictions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-yellow-500 border-dashed mr-2" style={{borderTopStyle: 'dashed', borderTopWidth: '2px'}}></div>
                    <span className="text-purple-200">Future Forecast</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Store Inventory Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventoryData.map((store, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{store.store}</span>
                        <Badge className={
                          store.status === 'critical' ? 'bg-red-600' :
                          store.status === 'warning' ? 'bg-yellow-600' : 'bg-green-600'
                        }>
                          {store.current}%
                        </Badge>
                      </div>
                      <Progress value={store.current} className="h-3" />
                      <div className="flex justify-between text-sm text-purple-200 mt-1">
                        <span>Current: {store.current}%</span>
                        <span>Optimal: {store.optimal}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Dynamic Pricing Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pricingData.map((item, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-white font-medium">{item.product}</h3>
                          <p className="text-purple-200 text-sm">
                            Current: ${item.currentPrice} → Suggested: ${item.suggestedPrice}
                          </p>
                        </div>
                        <Badge className="bg-green-600">
                          {item.impact} sales
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    AI Product Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productRecommendations.map((item, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="text-white font-medium text-sm">{item.product}</h3>
                            <p className="text-purple-200 text-xs">
                              {item.category} • {item.brand} • ${item.price}
                            </p>
                            <p className="text-purple-300 text-xs mt-1">Season: {item.season}</p>
                          </div>
                          <Badge className={
                            item.probability > 0.8 ? 'bg-green-600' :
                            item.probability > 0.5 ? 'bg-yellow-600' : 'bg-red-600'
                          }>
                            {Math.round(item.probability * 100)}%
                          </Badge>
                        </div>
                        <Progress value={item.probability * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Recommendation Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={productRecommendations}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="category" 
                        stroke="#9CA3AF" 
                        fontSize={12}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                          border: '1px solid rgba(148, 163, 184, 0.3)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar 
                        dataKey="probability" 
                        fill="#8B5CF6" 
                        name="Recommendation Score"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <UserCheck className="w-5 h-5 mr-2" />
                    Customer Segments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerData.map((segment, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h3 className="text-white font-medium">{segment.segment}</h3>
                            <p className="text-purple-200 text-sm">
                              {segment.count} customers • Avg Order: ${segment.avgOrder}
                            </p>
                            <p className="text-purple-300 text-xs">Primary Location: {segment.location}</p>
                          </div>
                          <Badge className="bg-blue-600">
                            ${segment.avgOrder}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Customer Distribution by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={locationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="city" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                          border: '1px solid rgba(148, 163, 184, 0.3)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar 
                        dataKey="customers" 
                        fill="#10B981" 
                        name="Number of Customers"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Average Order Value by Location</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={locationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="city" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        border: '1px solid rgba(148, 163, 184, 0.3)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="avgOrder" 
                      stroke="#F59E0B" 
                      strokeWidth={3}
                      name="Average Order Value ($)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
