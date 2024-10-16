import { ChevronDown, FileText, Home, Package, PieChart, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const SideBar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
            NI
          </div>
          <span className="text-xl font-semibold">Nicolas IP</span>
        </div>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><Home className="mr-2" size={18} /> Dashboard</a></li>
            <li><a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><Package className="mr-2" size={18} /> Items</a></li>
            <li><a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><Users className="mr-2" size={18} /> Partners</a></li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 text-gray-700 hover:bg-gray-200 rounded">
                <span className="flex items-center"><ShoppingCart className="mr-2" size={18} /> Sales</span>
                <ChevronDown size={18} />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 text-gray-700 hover:bg-gray-200 rounded">
                <span className="flex items-center"><FileText className="mr-2" size={18} /> Purchases</span>
                <ChevronDown size={18} />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-2 text-gray-700 hover:bg-gray-200 rounded">
                <span className="flex items-center"><PieChart className="mr-2" size={18} /> Reports</span>
                <ChevronDown size={18} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideBar