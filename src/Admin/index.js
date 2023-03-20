import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { isLoggedInSelector } from '../redux/slices/authSlice';

import './index.scss';
import Categories from './pages/Categories';
import AddCategory from './pages/Categories/AddCategory';
import EditCategory from './pages/Categories/EditCategory';

import Users from './pages/Users';
import Logout from '../pages/Modals/Logout';
// import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';

function AdminPage() {
  const [modalAddCategory, setModalAddCategory] = useState(false);
  const [modalEditCategory, setModalEditCategory] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [editData, setEditData] = useState([]);
  const isUserLoggedIn = useSelector(isLoggedInSelector)
  return (
    <>
      {modalAddCategory && <AddCategory toggle={toggle} setToggle={setToggle} closeModal={setModalAddCategory} />}
      {modalEditCategory && <EditCategory toggle={toggle} setToggle={setToggle} key={editData.id} data={editData} closeModal={setModalEditCategory} />}
      <Routes>
        {
          isUserLoggedIn ?
            (<>
              <Route exact path="/" element={<Users />} />
              <Route exact path="/categories" element={<Categories openAddModal={setModalAddCategory} openEditModal={setModalEditCategory} setEditData={setEditData} toggle={toggle} setToggle={setToggle} />} />
            </>
            ) : (<>
              <Route path="logout" element={<Logout/>} />
              {/* <Route path="sign-up" element={<Signup/>} /> */}
              <Route path="sign-in" index element={<Signin/>} />
              <Route path="*" element={<Signin/>} />
            </>)
        }
        <Route></Route>

      </Routes>

    </>
  )
}

export default AdminPage;