import { Table, TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Salary</TableCell>
                    </TableRow>      
                </TableHead>
               
            </Table>
        </TableContainer>

    </div>
  )
}

export default View