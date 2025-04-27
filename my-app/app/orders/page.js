// pages/orders/index.js
"use client";

import { FaShippingFast } from "react-icons/fa";

const Orders = () => {
  const orders = [
    { id: "001", customer: "John Doe", status: "Pending", amount: "$100" },
    { id: "002", customer: "Jane Smith", status: "Shipped", amount: "$250" },
    { id: "003", customer: "Bob Johnson", status: "Delivered", amount: "$75" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex items-center mb-6">
        <FaShippingFast className="text-gray-600 text-3xl mr-3" />
        <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
      </header>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="px-6 py-4 text-gray-700">{o.id}</td>
                <td className="px-6 py-4 text-gray-700">{o.customer}</td>
                <td className={`px-6 py-4 font-medium ${
                  o.status === "Pending"   ? "text-yellow-600" :
                  o.status === "Shipped"   ? "text-blue-600" :
                  o.status === "Delivered" ? "text-green-600" : ""
                }`}>
                  {o.status}
                </td>
                <td className="px-6 py-4 text-right font-bold text-gray-800">{o.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
