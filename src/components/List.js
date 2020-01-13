import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Table } from 'antd'
import { format } from 'date-fns'

import { modeToIcon, statusToIcon } from 'logixboard/helpers'
import { useApi } from 'logixboard/hooks'

const Icon = styled.div`
  font-size: 1.5em;
`

const Status = styled.div`
  font-size: 0.8em;
  line-height: 1.3em;
`

const List = () => {
  const api = useApi()
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const shipments = await api.shipments()
      setDataSource(shipments.map((shipment) => ({
        arrival: format(new Date(shipment['Estimated Arrival']), 'MMM d, yyyy'),
        destination: shipment.Destination,
        key: `PO-${shipment['Shipment ID'].slice(0, 7)}`,
        mode: <Icon>{modeToIcon(shipment.Mode)}</Icon>,
        origin: shipment.Origin,
        status: <Status><Icon>{statusToIcon(shipment.Status)}</Icon>{shipment.Status}</Status>
      })))
    }
    fetch()
  }, [])

  const columns = [
    {
      align: 'center',
      className: 'ant-table-id',
      dataIndex: 'key',
      title: 'ID'
    },
    {
      align: 'center',
      dataIndex: 'origin',
      ellipsis: true,
      title: 'Origin'
    },
    {
      align: 'center',
      className: 'ant-table-mode',
      dataIndex: 'mode',
      title: 'Mode'
    },
    {
      align: 'center',
      dataIndex: 'destination',
      ellipsis: true,
      title: 'Destination'
    },
    {
      align: 'center',
      className: 'ant-table-arrival',
      dataIndex: 'arrival',
      title: 'Arrival'
    },
    {
      align: 'center',
      className: 'ant-table-status',
      dataIndex: 'status',
      title: 'Status'
    }
  ]

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 20, position: 'top' }}
      scroll={{ y: 280 }}
      size='small'
    />
  )
}

export default List
