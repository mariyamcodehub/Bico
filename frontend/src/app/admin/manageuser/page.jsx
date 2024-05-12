'use client';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

  const [user, setUser] = useState([]);

  const getUser = async () => {

    const res = await fetch("http://localhost:5000/user/getall")
    console.log(res.status);
    const data = await res.json()
    console.log(data);
    setUser(data);
  }

  useEffect(() => {
    getUser()
  }, [])

  //delete user
  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    }

    );
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar("User Deleted Successfully", { variant: "success" })
      getUser();
    } else {
      enqueueSnackbar("Somthing went Wrong", { variant: "warning" })
    }
  }

  //delete user

  const displayuser = () => {
    return (
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="bg-gray-50 dark:bg-neutral-700">
          <tr>
            <th scope="col" className="py-3 ps-4">
              <div className="flex items-center h-5">
                <input
                  id="hs-table-checkbox-all"
                  type="checkbox"
                  className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
                <label htmlFor="hs-table-checkbox-all" className="sr-only">
                  Checkbox
                </label>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
            >
              Password
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
            >
              Action
            </th>
          </tr>
        </thead>
        {
          user.map((a) => {
            return (
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr>
                  <td className="py-3 ps-4">
                    <div className="flex items-center h-5">
                      <input
                        id="hs-table-checkbox-1"
                        type="checkbox"
                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                      <label htmlFor="hs-table-checkbox-1" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                    {a.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    {a.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    {a.password}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      onClick={(e) => {
                        deleteUser(a._id)
                      }}
                      type="button"
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>

              </tbody>
            )
          })
        }

      </table>
    )
  }


  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
              {
                displayuser()
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ManageUser;