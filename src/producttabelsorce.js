export const userColums = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "productname",
        headerName: "Product Name",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="celling" src={params.row.img} alt="avatar" />
                    {params.row.productname}
                </div>
            );
        },
    },
    {
        field: "available",
        headerName: "Available",
        width: 230,



    },
    {
        field: "price",
        headerName: "Price",
        width: 100,
    },
    

];


export const userProducts = [

    {
        id: 242345,
        productname: "Realme 10 Pro ",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        available:5,
        price: "12,000",
    },

 


];








