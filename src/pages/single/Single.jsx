import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { userRows } from '../../datatablesource';

const Single = () => {
  const { userId } = useParams();
  const [item, setitem] = useState({});
  useEffect(() => {
    let find = userRows.find((e) => e.id == userId);

    console.log(find)
    if (find)
      setitem(find);
  }, [userId]
  
  )


  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        

        <div className='top'>
          <div className='left'>

            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>

            <div className='item'>
              <img src={item.img} alt='' className='itemImg' />
              <div className="details">
                <h1 className="itemTitle">{item.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email</span>
                  <span className="itemValue">{item.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">{item.phone}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">{item.address}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">{item.country}</span>
                </div>



              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />

          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>

          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;