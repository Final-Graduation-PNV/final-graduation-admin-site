import React, { useState, useEffect } from 'react';
import { getShopOwnerAccounts } from '../../../api/admin';
import DashboardHeader from '../../components/DashboardHeader';
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';


import all_orders from '../../constants/orders';
import { calculateRange, sliceData } from '../../utils/table-pagination';

import './styles.scss';

function Users() {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [valid_accounts, setValid_accounts] = useState([]);
    const [expired_accounts, setExpired_accounts] = useState([]);


    useEffect(() => {  //Get categories for shop owners
        const getAccount = async () => {
            try {
                const res = await getShopOwnerAccounts()
                setValid_accounts(res.data.valid_accounts)
                setExpired_accounts(res.data.expired_accounts)
            } catch (err) {
                console.log("Err get shop categories: ", err)
            }
        }
        getAccount()
    }, [toggle])
    console.log("vl: ", valid_accounts)
    console.log("ex: ", expired_accounts)

    useEffect(() => {
        setPagination(calculateRange(all_orders, 5));
        setOrders(sliceData(all_orders, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = orders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(all_orders, new_page, 5));
    }

    return (
<>
<div className='dashboard-container'>

<SideBar menu={sidebar_menu} />
<div className='dashboard-body'>
<div className='dashboard-content'>
    <DashboardHeader
        btnText="New User" />

    <div className='dashboard-content-container'>
        <div className='dashboard-content-header'>
            <h2>Valid Accounts</h2>
            {/* <div className='dashboard-content-search'>
                <input
                    type='text'
                    value={search}
                    placeholder='Search..'
                    className='dashboard-content-input'
                    onChange={e => __handleSearch(e)} />
            </div> */}
        </div>

        <table className='admin-table'>


            {valid_accounts.length !== 0 ?
                <tbody>
                    <tr>
                        <th>No.</th>
                        <th>SHOP ID</th>
                        <th>NAME</th>
                        <th>DATE USE</th>
                        <th>
                            DATE EXPIRES
                        </th>
                    </tr>
                    {valid_accounts.map((account, index) => (
                        <tr key={index}>
                            <td><span>{index + 1}</span></td>
                            <td><span>{account.shop_id}</span></td>
                            <td><span>{account.name}</span></td>
                            <td><span>{account.date_used}</span></td>
                            <td><span>{account.date_expires}</span></td>
                        </tr>
                    ))}
                </tbody>
                : null}
        </table>

        {/* {valid_accounts.length !== 0 ?
            <div className='dashboard-content-footer'>
                {pagination.map((item, index) => (
                    <span
                        key={index}
                        className={item === page ? 'active-pagination' : 'pagination'}
                        onClick={() => __handleChangePage(item)}>
                        {item}
                    </span>
                ))}
            </div>
            :
            <div className='dashboard-content-footer'>
                <span className='empty-table'>No data</span>
            </div>
        } */}
    </div>
</div>
</div>

</div>
</>
       

    )
}

export default Users;