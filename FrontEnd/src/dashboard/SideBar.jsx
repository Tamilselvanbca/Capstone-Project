import React from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
         <Sidebar.Logo  className='gap-2 text-5xl'>
        Book.io
      </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiViewBoards}>
          Upload Books
        </Sidebar.Item>
        <Sidebar.Item href="http://localhost:5173/admin/dashboard/manage" icon={HiInbox}>
          Manage Books
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/editbooks/:id" icon={HiUser}>
         Edit Books
        </Sidebar.Item>
        <Sidebar.Item href="/allBooks" icon={HiShoppingBag}>
          Products
        </Sidebar.Item>
        <Sidebar.Item href="/" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiTable}>
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Upgrade to Pro
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiViewBoards}>
          Documentation
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={BiBuoy}>
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default SideBar