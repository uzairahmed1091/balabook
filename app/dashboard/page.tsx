import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Nicolas IP's Dashboard</h1>
        <Button><Plus className="mr-2" size={18} />Quick Add</Button>
      </header>

      {/* Invoices & Expenses Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Invoices & Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#8884d8" />
                <Bar dataKey="expenses" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer> */}
        </CardContent>
      </Card>

      {/* Money Coming In & Going Out */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Money Coming In</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Coming Due (1-30 days)</h3>
                <p className="text-2xl font-bold">€0.00</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Coming Due (31-60 days)</h3>
                <p className="text-2xl font-bold">€0.00</p>
              </div>
              <div className="bg-red-100 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Overdue</h3>
                <p className="text-2xl font-bold text-red-600">€0.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Money Going Out</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Coming Due (1-30 days)</h3>
                <p className="text-2xl font-bold">€0.00</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Coming Due (31-60 days)</h3>
                <p className="text-2xl font-bold">€0.00</p>
              </div>
              <div className="bg-red-100 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Overdue</h3>
                <p className="text-2xl font-bold text-red-600">€0.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Expenses */}
      <Card>
        <CardHeader>
          <CardTitle>Top Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
              Wages and Salaries
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-400 rounded-full mr-2"></span>
              Utilities
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-gray-400 rounded-full mr-2"></span>
              Travelling Expenses
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-blue-400 rounded-full mr-2"></span>
              Telephone & Internet
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-purple-400 rounded-full mr-2"></span>
              Repairs and Maintenance
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  )
}

export default Dashboard