import React, { useState } from 'react';
import { Users, Package, Truck, BarChart2, Plus, Edit, Trash } from 'lucide-react';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('users');

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Staff' },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: 'Router X1', category: 'Networking', price: 199.99, stock: 150 },
    { id: 2, name: 'Switch Y2', category: 'Networking', price: 149.99, stock: 75 },
    { id: 3, name: 'Fiber Optic Cable', category: 'Cabling', price: 2.99, stock: 500 },
  ]);

  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'TechNet Solutions', contact: 'Alice Brown', email: 'alice@technet.com' },
    { id: 2, name: 'Global Comm Supplies', contact: 'Charlie Davis', email: 'charlie@globalcomm.com' },
  ]);

  const renderUsersTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Users</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Plus size={18} className="inline mr-2" />
        Add User
      </button>
    </div>
  );

  const renderProductsTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Products</h3>
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
                  <button className="text-red-500 hover:text-red-700">
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Plus size={18} className="inline mr-2" />
        Add Product
      </button>
    </div>
  );

  const renderSuppliersTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Suppliers</h3>
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
                  <button className="text-red-500 hover:text-red-700">
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Plus size={18} className="inline mr-2" />
        Add Supplier
      </button>
    </div>
  );

  const renderStockTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Stock</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-left">Current Stock</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4">{product.name}</td>
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

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('users')}
        >
          <Users className="inline mr-2" />
          Users
        </button>
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
            activeTab === 'stock' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('stock')}
        >
          <BarChart2 className="inline mr-2" />
          Stock
        </button>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === 'users' && renderUsersTab()}
        {activeTab === 'products' && renderProductsTab()}
        {activeTab === 'suppliers' && renderSuppliersTab()}
        {activeTab === 'stock' && renderStockTab()}
      </div>
    </div>
  );
};

export default AdminPage;

