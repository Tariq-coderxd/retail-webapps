
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
    { product: 'Electronics Smartphone', currentPrice: 31.51, suggestedPrice: 29.85, impact: '+5.3%' },
    { product: 'Fashion Jeans', currentPrice: 35.51, suggestedPrice: 38.20, impact: '+7.6%' },
    { product: 'Beauty Lipstick', currentPrice: 6.54, suggestedPrice: 7.15, impact: '+9.3%' },
    { product: 'Books Comics', currentPrice: 13.51, suggestedPrice: 14.25, impact: '+5.5%' },
    { product: 'Electronics Laptop', currentPrice: 62.68, suggestedPrice: 65.80, impact: '+5.0%' },
  ];

  const agentActivities = [
    { agent: 'Demand Forecasting Agent', status: 'active', task: 'Processing Q2 demand patterns', accuracy: 94 },
    { agent: 'Inventory Monitoring Agent', status: 'active', task: 'Scanning warehouse levels', accuracy: 97 },
    { agent: 'Pricing Optimization Agent', status: 'active', task: 'Adjusting seasonal prices', accuracy: 89 },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Header with subtle animation */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
              Multi-Agent Retail Inventory System
            </h1>
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl -z-10"></div>
          </div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            AI-Powered Inventory Optimization & Management Platform
          </p>
          <div className="mt-4 flex justify-center">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">System Online</span>
            </div>
          </div>
        </div>

        {/* Enhanced Key Metrics with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">Total Revenue</p>
                  <p className="text-white text-3xl font-bold">$2.4M</p>
                  <p className="text-green-400 text-xs flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12.5% vs last month
                  </p>
                </div>
                <div className="p-3 bg-green-400/10 rounded-xl group-hover:bg-green-400/20 transition-colors">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">Inventory Items</p>
                  <p className="text-white text-3xl font-bold">15,847</p>
                  <p className="text-blue-400 text-xs flex items-center mt-2">
                    <Package className="w-4 h-4 mr-1" />
                    Active tracking
                  </p>
                </div>
                <div className="p-3 bg-blue-400/10 rounded-xl group-hover:bg-blue-400/20 transition-colors">
                  <Package className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">Active Agents</p>
                  <p className="text-white text-3xl font-bold">
                    <span className="transition-all duration-500">{activeAgents}</span>/3
                  </p>
                  <p className="text-purple-400 text-xs flex items-center mt-2">
                    <Brain className="w-4 h-4 mr-1" />
                    AI Powered
                  </p>
                </div>
                <div className="p-3 bg-purple-400/10 rounded-xl group-hover:bg-purple-400/20 transition-colors">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/10 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">System Efficiency</p>
                  <p className="text-white text-3xl font-bold">93%</p>
                  <p className="text-emerald-400 text-xs flex items-center mt-2">
                    <Activity className="w-4 h-4 mr-1" />
                    Optimized
                  </p>
                </div>
                <div className="p-3 bg-emerald-400/10 rounded-xl group-hover:bg-emerald-400/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Main Dashboard with professional tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl p-1">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="agents" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
              >
                AI Agents
              </TabsTrigger>
              <TabsTrigger 
                value="forecasting" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
              >
                Forecasting
              </TabsTrigger>
              <TabsTrigger 
                value="inventory" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
              >
                Inventory
              </TabsTrigger>
              <TabsTrigger 
                value="pricing" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
              >
                Pricing
              </TabsTrigger>
              <TabsTrigger 
                value="recommendations" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
              >
                Recommendations
              </TabsTrigger>
              <TabsTrigger 
                value="customers" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
              >
                Customers
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="p-2 bg-purple-500/10 rounded-lg mr-3">
                      <Package className="w-5 h-5 text-purple-400" />
                    </div>
                    Inventory Distribution
                  </CardTitle>
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
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                          border: '1px solid rgba(148, 163, 184, 0.3)',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                      <Activity className="w-5 h-5 text-blue-400" />
                    </div>
                    System Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-2">
                      <span className="font-medium">Forecast Accuracy</span>
                      <span className="font-bold">94%</span>
                    </div>
                    <Progress value={94} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-2">
                      <span className="font-medium">Inventory Optimization</span>
                      <span className="font-bold">87%</span>
                    </div>
                    <Progress value={87} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-2">
                      <span className="font-medium">Price Optimization</span>
                      <span className="font-bold">91%</span>
                    </div>
                    <Progress value={91} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-200 mb-2">
                      <span className="font-medium">Supply Chain Efficiency</span>
                      <span className="font-bold">89%</span>
                    </div>
                    <Progress value={89} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentActivities.map((agent, index) => (
                <Card key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                          <Brain className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg leading-tight">{agent.agent}</CardTitle>
                          <Badge className="mt-1 bg-green-600/20 text-green-400 border-green-400/30">
                            {agent.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-200 mb-4 text-sm leading-relaxed">{agent.task}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-purple-300 font-medium">Accuracy:</span>
                      <span className="text-white font-bold text-lg">{agent.accuracy}%</span>
                    </div>
                    <Progress value={agent.accuracy} className="h-3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forecasting" className="animate-fade-in">
            <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                  </div>
                  Demand Forecasting - Historical vs Future Predictions
                </CardTitle>
                <p className="text-purple-200 text-sm mt-2">Historical data (Jan-Jun) and AI-predicted upcoming demand (Jul-Dec)</p>
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
                <div className="mt-6 flex justify-center space-x-8 text-sm">
                  <div className="flex items-center bg-white/5 px-3 py-2 rounded-lg">
                    <div className="w-4 h-0.5 bg-green-500 mr-2"></div>
                    <span className="text-purple-200 font-medium">Actual Sales</span>
                  </div>
                  <div className="flex items-center bg-white/5 px-3 py-2 rounded-lg">
                    <div className="w-4 h-0.5 bg-purple-500 mr-2"></div>
                    <span className="text-purple-200 font-medium">AI Predictions</span>
                  </div>
                  <div className="flex items-center bg-white/5 px-3 py-2 rounded-lg">
                    <div className="w-4 h-0.5 bg-yellow-500 border-dashed mr-2" style={{borderTopStyle: 'dashed', borderTopWidth: '2px'}}></div>
                    <span className="text-purple-200 font-medium">Future Forecast</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="animate-fade-in">
            <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                    <Package className="w-5 h-5 text-blue-400" />
                  </div>
                  Store Inventory Levels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventoryData.map((store, index) => (
                    <div key={index} className="group p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-medium">{store.store}</span>
                        <Badge className={
                          store.status === 'critical' ? 'bg-red-600/20 text-red-400 border-red-400/30' :
                          store.status === 'warning' ? 'bg-yellow-600/20 text-yellow-400 border-yellow-400/30' : 'bg-green-600/20 text-green-400 border-green-400/30'
                        }>
                          {store.current}%
                        </Badge>
                      </div>
                      <Progress value={store.current} className="h-3 mb-2" />
                      <div className="flex justify-between text-sm text-purple-200">
                        <span className="font-medium">Current: {store.current}%</span>
                        <span className="font-medium">Optimal: {store.optimal}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="animate-fade-in">
            <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className="p-2 bg-green-500/10 rounded-lg mr-3">
                    <DollarSign className="w-5 h-5 text-green-400" />
                  </div>
                  Dynamic Pricing Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pricingData.map((item, index) => (
                    <div key={index} className="group p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <h3 className="text-white font-medium mb-1">{item.product}</h3>
                          <p className="text-purple-200 text-sm">
                            Current: <span className="font-semibold text-red-300">${item.currentPrice}</span> → Suggested: <span className="font-semibold text-green-300">${item.suggestedPrice}</span>
                          </p>
                        </div>
                        <Badge className="bg-green-600/20 text-green-400 border-green-400/30 ml-4">
                          {item.impact} sales
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="p-2 bg-orange-500/10 rounded-lg mr-3">
                      <Target className="w-5 h-5 text-orange-400" />
                    </div>
                    AI Product Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productRecommendations.map((item, index) => (
                      <div key={index} className="group p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-white font-medium text-sm mb-1">{item.product}</h3>
                            <p className="text-purple-200 text-xs">
                              {item.category} • {item.brand} • <span className="font-semibold">${item.price}</span>
                            </p>
                            <p className="text-purple-300 text-xs mt-1">Season: {item.season}</p>
                          </div>
                          <Badge className={
                            item.probability > 0.8 ? 'bg-green-600/20 text-green-400 border-green-400/30' :
                            item.probability > 0.5 ? 'bg-yellow-600/20 text-yellow-400 border-yellow-400/30' : 'bg-red-600/20 text-red-400 border-red-400/30'
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

              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="p-2 bg-purple-500/10 rounded-lg mr-3">
                      <Activity className="w-5 h-5 text-purple-400" />
                    </div>
                    Recommendation Performance
                  </CardTitle>
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

          <TabsContent value="customers" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="p-2 bg-cyan-500/10 rounded-lg mr-3">
                      <UserCheck className="w-5 h-5 text-cyan-400" />
                    </div>
                    Customer Segments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerData.map((segment, index) => (
                      <div key={index} className="group p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h3 className="text-white font-medium">{segment.segment}</h3>
                            <p className="text-purple-200 text-sm">
                              <span className="font-semibold">{segment.count}</span> customers • Avg Order: <span className="font-semibold text-green-300">${segment.avgOrder}</span>
                            </p>
                            <p className="text-purple-300 text-xs mt-1">Primary Location: {segment.location}</p>
                          </div>
                          <Badge className="bg-blue-600/20 text-blue-400 border-blue-400/30">
                            ${segment.avgOrder}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="p-2 bg-emerald-500/10 rounded-lg mr-3">
                      <Users className="w-5 h-5 text-emerald-400" />
                    </div>
                    Customer Distribution by Location
                  </CardTitle>
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

            <Card className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-amber-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className="p-2 bg-amber-500/10 rounded-lg mr-3">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                  </div>
                  Average Order Value by Location
                </CardTitle>
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
