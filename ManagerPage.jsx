import React, { useState } from 'react';
import { Package, Truck, ClipboardList, Edit, Trash, Plus } from 'lucide-react';

const ManagerPage = () => {
  const [activeTab, setActiveTab] = useState('products');

  const [products, setProducts] = useState([
    { id: 1, name: 'Router X1', category: 'Networking', price: 199.99, stock: 150 },
    { id: 2, name: 'Switch Y2', category: 'Networking', price: 149.99, stock: 75 },
    { id: 3, name: 'Fiber Optic Cable', category: 'Cabling', price: 2.99, stock: 500 },
  ]);

  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'TechNet Solutions', contact: 'Alice Brown', email: 'alice@technet.com' },
    { id: 2, name: 'Global Comm Supplies', contact: 'Charlie Davis', email: 'charlie@globalcomm.com' },
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-05-15', product: 'Router X1', quantity: 10, type: 'Outbound' },
    { id: 2, date: '2023-05-14', product: 'Switch Y2', quantity: 25, type: 'Inbound' },
  ]);

  const renderProductsTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">View/Edit Products</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Stock</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4">{product.stock}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSuppliersTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">View/Edit Suppliers</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Contact Person</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="border-b">
                <td className="py-2 px-4">{supplier.name}</td>
                <td className="py-2 px-4">{supplier.contact}</td>
                <td className="py-2 px-4">{supplier.email}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody></table>
      </div>
    </div>
  );

  const renderTransactionsTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Stock Transactions</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Type</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="py-2 px-4">{transaction.date}</td>
                <td className="py-2 px-4">{transaction.product}</td>
                <td className="py-2 px-4">{transaction.quantity}</td>
                <td className="py-2 px-4">{transaction.type}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Plus size={18} className="inline mr-2" />
        Add Transaction
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manager Dashboard</h2>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('products')}
        >
          <Package className="inline mr-2" />
          Products
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'suppliers' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('suppliers')}
        >
          <Truck className="inline mr-2" />
          Suppliers
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'transactions' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('transactions')}
        >
          <ClipboardList className="inline mr-2" />
          Transactions
        </button>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === 'products' && renderProductsTab()}
        {activeTab === 'suppliers' && renderSuppliersTab()}
        {activeTab === 'transactions' && renderTransactionsTab()}
      </div>
    </div>
  );
};

export default ManagerPage;

