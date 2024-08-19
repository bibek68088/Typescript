import { Input, Table } from "antd"
import { useState } from "react";

interface DataSourceItem {
    id: number,
    name: string,
    age: number,
}

const dataSource: DataSourceItem[] = [
    {
        id: 1,
        name: 'Ram',
        age: 22
    },
    {
        id: 2,
        name: 'Shyam',
        age: 24,
    },
    {
        id: 3,
        name: 'Hari',
        age: 25,
    },
    {
        id: 4,
        name: 'Laxman',
        age: 20,
    },
];



const TableContents: React.FC = () => {
    const [source, setSource] = useState<DataSourceItem[]>(dataSource);


    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: '6%',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '36%',
            render: (_text: string, record: DataSourceItem) => {
                return (
                    <Input
                    type="text"
                    value = {record['name']}
                    onChange={e => handleChange(record.id, e.target.value)}
                    >

                    </Input>
                );
            },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'Age',
            width: '30%',
        },
    ];

    const handleChange = (id: number, value: string) => {
        const newSource = source.map(item => item.id === id ? {...item, name: value}: item);
        setSource(newSource);
    }

  return (

        <Table
            dataSource = {source}
            columns = {columns}
            bordered 
            size ={'large'}
            rowKey={'id'}
        />
  );
}

export default TableContents