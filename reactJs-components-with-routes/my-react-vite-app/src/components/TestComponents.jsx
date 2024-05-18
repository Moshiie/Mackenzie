import React from 'react'

function TestComponents() {
  return (
   <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sample Table</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">1</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">john.doe@example.com</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">jane.smith@example.com</td>
          </tr>
          { }
        </tbody>
      </table>
    </div>
  )
}

export default TestComponents