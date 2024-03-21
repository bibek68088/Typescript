import { Table } from "antd"

const source = [
    {
        id: 1,
        Name: 'Ram',
        age: 22
    },
    {
        id: 2,
        Name: 'Shyam',
        age: 24,
    },
    {
        id: 3,
        Name: 'Hari',
        age: 25,
    },
];

const columns = [
    {
        title: '#',
        dataIndex: 'id',
        key: 'id',
        width: '6%',
    },
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'name',
        width: '36%',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'Age',
        width: '30%',
    },
];

const TableContents = () => {

  return (

        <Table
            dataSource = {source}
            columns = {columns}
            bordered 
            size ={'large'}
        />
  )
}

export default TableContents