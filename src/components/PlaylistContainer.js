import React from 'react'
import { Box, Grid, Skeleton, Toolbar, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// import { ConstructionOutlined, PlayArrow } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import SongTableRow from './SongTableRow';

const PlaylistContainer = () => {
    const playlist = useSelector((state) => state.playlist);
    

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3 }}>
            <Toolbar />
            <Typography variant='h3'>Playing Queue:</Typography>

            <TableContainer component={Paper} sx={{ mt: 6 }}>
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
                        {(playlist.length !== 0) ?
                            playlist.map((single_song, idx) => {
                                return <SongTableRow data={single_song} key={idx} index={idx} owner="favourite" />
                            })
                            :
                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
                                {Array.from(Array(3)).map((_, idx) => {
                                    return (
                                        <Box key={idx} sx={{ width: 300, ml: 3, mt: 3 }}>
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

export default PlaylistContainer;