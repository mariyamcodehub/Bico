import React from 'react'
import Link from 'next/link';
const AdminNavbar = () => {
  return (
    <div className='bg-base-100'>
      <div className='flex flex-row justify-evenly p-3 my-3'>
        <div className=' '>
          <Link href={'/'}><button className='btn btn-outline  btn-sm mr-1'>Home</button></Link>
          <Link href={'/brands'}><button className='btn btn-outline btn-sm mr-1'>Brands</button></Link>
          <Link href={'/influencers'}><button className='btn btn-outline btn-sm mr-1'>Influencers</button></Link>
          <Link href={'/campaign'}><button className='btn btn-outline btn-sm mr-1'>Campaigns</button></Link>
          <Link href={'/campaignForm'}><button className='btn btn-outline btn-sm '>Campaign form</button></Link>
        </div>
        <div>
          <Link href={'/option'}><button className='btn btn-outline btn-sm mr-1'>SignUp</button></Link>
          <Link href={'/loginoption'}><button className='btn btn-outline btn-sm '>login</button></Link>
        </div>
      </div>

    </div>
  )
}

export default AdminNavbar;