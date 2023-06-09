export const userColums = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="celling" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,



    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>


            );

        },
    },


];


export const userRows = [

    {
        id: 1,
        username: "Raghul",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "active",
        email: "raghul@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    },

    {
        id: 2,
        username: "Samar",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "passive",
        email: "samar@gmail.com",
        age: 25,
        phone: 32948202848,
        address: "Los Angeles, Newyork",
        country: "America",
    },

    {
        id: 3,
        username: "Ranjan",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "pending",
        email: "ranjan@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    },

    {
        id: 4,
        username: "Gokul",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "active",
        email: "gokul@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    },

    {
        id: 5,
        username: "Poovarasan",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "pending",
        email: "poovarasan@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    },
    {
        id: 6,
        username: "akash",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "active",
        email: "akash@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    },
    {
        id: 7,
        username: "hari",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "passive",
        email: "harin@gmail.com",
        age: 25,
    },
    {
        id: 8,
        username: "vasanth",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "pending",
        email: "vasanth@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    },
    {
        id: 9,
        username: "sathish",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "active",
        email: "sathish@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    },
    {
        id: 10,
        username: "dinesh",
        img: "https://img.mensxp.com/media/content/2020/Dec/Coolest-Gadgets-We-Can-Look-Forward-To-In-2021-1400x653_5fed6bafc9c77.jpeg?w=820&h=540&cc=1",
        status: "passive",
        email: "dinesh@gmail.com",
        age: 25,
        phone: 9067543928,
        address: "Anna Nager, Chennai",
        country: "India",
    }

];








