import { DataGrid } from '@mui/x-data-grid';


function Transactions(){
  const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'userIcon', headerName: 'User', width: 100},
    {field: 'userName', headerName: 'UserName', width: 100},
    {field: 'amount', headerName: 'Amount', width: 100},
    {field: 'date', headerName: 'Date', width: 100},
    {field: 'trans_id', headerName: 'Transaction ID', width: 100}
  ]

  const data = [
    {id: 1, userIcon: 'ticon', userName: 'Vineeth Moturi', amount: '20', date: '20/09/2024', trans_id: "TNXKCHKJL"}
  ]
  return(
    <div className='d-flex col-12'>
      <DataGrid
        columns={columns}
        rows={data}
        className='d-flex'
      >
      </DataGrid>
    </div>
  )
}
export default Transactions;
