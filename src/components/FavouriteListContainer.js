import React from 'react'
import { Box,Grid, Skeleton, Toolbar, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// import { PlayArrow } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import SongTableRow from './SongTableRow';

const FavouriteListContainer = () => {
  const favourite_list = useSelector((state) => state.favourite_list);
  console.log(favourite_list);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3}}>
        <Toolbar />
        <Typography variant='h3'>My Favourite Songs:</Typography>

        <TableContainer component={Paper} sx={{mt: 6}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography variant='h5'>#</Typography></TableCell>
                        <TableCell><Typography variant='h5'>Name</Typography></TableCell>
                        <TableCell><Typography variant='h5'>Artist</Typography></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                {(Object.keys(favourite_list).length !== 0) ?
                            Object.keys(favourite_list).map((single_key, idx) => {
                                const single_favourite_song = favourite_list[single_key];
                                return <SongTableRow data={single_favourite_song} key={single_key} index={idx} owner="favourite" />
                            })
                            :
                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
                                {Array.from(Array(3)).map((_, idx) => {
                                    return (
                                        <Box key={idx} sx={{ width: 300, ml:4 ,mt:3 }}>
                                            <Skeleton />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation={false} />
                                        </Box>
                                    )
                                })}
                            </Grid>
    
                        }
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default FavouriteListContainer;