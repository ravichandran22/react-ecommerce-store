import { Link } from "react-router-dom";
import { useAppContext } from "../../context/CartContext";
import DataTable from "react-data-table-component";
import { MdDelete, MdEdit } from "react-icons/md";

export const AdminDashboard = () => {
  const { products, loading, deleteProduct } = useAppContext();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      width: "80px",
    },
    {
      name: "Product Title",
      selector: (row) => row.title,
      sortable: true,
      wrap: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Count",
      selector: (row) => row.rating.count,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center justify-center gap-3">
          <Link to={`/edit-product/${row.id}`} title="Edit">
            <MdEdit
              className="text-xl text-blue-500 cursor-pointer hover:text-blue-700 transition"
              title="Edit"
            />
          </Link>


          <MdDelete
            className="text-xl text-red-500 cursor-pointer hover:text-red-700 transition"
            onClick={() => handleDelete(row.id)}
            title="Delete"
          />
        </div>
      ),
      ignoreRowClick: true
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading Products....
        </p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-gray-500 text-lg'>OOPs No products found!</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/5 bg-gray-100 border-r p-5">
        <h1 className='font-bold text-xl mb-4'>Admin Dashboard</h1>
      </aside>
      <main className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold text-3xl mb-0">All Products</h2>
          <Link to='/add-product' className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-bold">Add Products</Link>
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
                fontWeight: "600",
                fontSize: "16px",
                marginTop: "30px",
                padding: "10px",
                textTransform: "uppercase",
                color: '#fff',
                opacity: 0.7,
                justifyContent: "center",
                textAlign: "center",
              },
            },
            cells: {
              style: {
                fontWeight: "400",
                fontSize: "14px",
                padding: "10px",
                justifyContent: "center",
                textAlign: "center",
              }
            }
          }}
        />
      </main>
    </div>
  )
}
