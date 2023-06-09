import React from 'react'
import "./product.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColums, userProducts } from '../../producttabelsorce';
import { Link } from "react-router-dom";
import { useState } from "react"

import Sidebar from '../../components/sidebar/Sidebar';




export const Products = () => {
    const [data, setData] = useState(userProducts)

  
    const actionColumn = [
        {

            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>

                        <Link to={`/users/${params.row.no}`} style={{ textDecoration: 'none' }}>
                            <div className='viewButton' >Details</div>
                        </Link>
                        
                    </div>

                );
            },
        },
    ];
    <Sidebar/>

    return (
        
        <div className="datatable">

            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColums.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection



            />



        </div>



    );
};


export default Products;