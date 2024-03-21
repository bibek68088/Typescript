import React from 'react'
import { Table } from 'antd'

const TableFormat = (props) => {
  return (
    <div>
        <Table
            dataSource= {/**Table's content source */}
            columns = {/**Table's structure */}
            bordered {/**optional  */}
            size = {/**small, medium , large */}
            rowKey = {/**Musy be a unique key  */}
        />
        
    </div>
  )
}

export default TableFormat