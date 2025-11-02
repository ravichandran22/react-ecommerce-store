import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/CartContext";
import DataTable from "react-data-table-component";
import { MdDelete, MdEdit, MdMenu } from "react-icons/md";

export const AdminDashboard = () => {
  const { products, loading, deleteProduct } = useAppContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  const columns = [
    { name: "S.No", selector: (row, index) => index + 1, width: "80px" },
    { name: "Product Title", selector: (row) => row.title, sortable: true, wrap: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    { name: "Price", selector: (row) => `$${row.price}`, sortable: true },
    { name: "Count", selector: (row) => row.rating.count, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center justify-center gap-3">
          <Link to={`/edit-product/${row.id}`} aria-label="Edit Product">
            <MdEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-700 transition" />
          </Link>
          <MdDelete
            className="text-xl text-red-500 cursor-pointer hover:text-red-700 transition"
            onClick={() => handleDelete(row.id)}
            aria-label="Delete Product"
          />
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Loading Products...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">OOPs! No products found!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-100 border-r p-5 fixed md:static z-20 h-full md:h-auto w-64 md:w-1/5 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h1 className="font-bold text-xl mb-4">Admin Dashboard</h1>
        <button
          className="md:hidden mb-4 bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => setSidebarOpen(false)}
        >
          Close Sidebar
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white md:ml-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-3">
  <div className="flex items-center gap-3 w-full md:w-auto">
    <button
      className="md:hidden bg-gray-200 p-2 rounded"
      onClick={() => setSidebarOpen(true)}
    >
      <MdMenu className="text-2xl" />
    </button>
    <h2 className="font-bold text-2xl md:text-3xl mb-0 truncate">
      All Products
    </h2>
  </div>
  <Link
    to="/add-product"
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold text-center w-full md:w-auto"
  >
    Add Products
  </Link>
</div>


        <DataTable
          columns={columns}
          data={products}
          pagination
          paginationPerPage={5}
          highlightOnHover
          striped
          responsive
          customStyles={{
            headCells: {
              style: {
                backgroundColor: "#000",
                fontWeight: 600,
                fontSize: "16px",
                padding: "10px",
                textTransform: "uppercase",
                color: "#fff",
                opacity: 0.7,
                justifyContent: "center",
                textAlign: "center",
              },
            },
            cells: {
              style: {
                fontWeight: 400,
                fontSize: "14px",
                padding: "10px",
                justifyContent: "center",
                textAlign: "center",
              },
            },
          }}
        />
      </main>
    </div>
  );
};
