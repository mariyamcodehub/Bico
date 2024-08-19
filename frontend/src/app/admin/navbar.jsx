import React from 'react'
import Link from 'next/link';
const AdminNavbar = () => {
  return (
    <div className='bg-base-100'>
      <div className='flex flex-row justify-center '>
        <div className='p-10 '>
          <Link href={'/dashboard'}><button className='btn btn-outline  btn-sm mr-1'>dashboard</button></Link>
          <Link href={'/manageBrand'}><button className='btn btn-outline btn-sm mr-1'>Manage Brand</button></Link>
          <Link href={'/manageuser'}><button className='btn btn-outline btn-sm mr-1'>Manage User</button></Link>
          <Link href={'/managecampaign'}><button className='btn btn-outline btn-sm mr-1'>Manage Campaigns</button></Link>

        </div>
      </div>

    </div>
  )
}

export default AdminNavbar;