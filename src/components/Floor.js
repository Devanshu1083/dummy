"use client"
import React from 'react';
import { useState,useEffect,useCallback} from 'react';
import { Card,Typography, Grid, Box, IconButton, Collapse, Hidden } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//dummy data for a floor
const data = {
    grid1: [
        { roomNumber: "GOO1", available: 2, occupied: 1, vacant: 0 },
        { roomNumber: "GOO2", available: 2, occupied: 1, vacant: 1 },
        { roomNumber: "GOO3", available: 1, occupied: 0, vacant: 0 },
        { roomNumber: "GOO4", available: 2, occupied: 1, vacant: 1 },
    ],
    grid2: [
        { roomNumber: "GOO5", available: 2, occupied: 1, vacant: 1 },
        { roomNumber: "GOO6", available: 0, occupied: 1, vacant: 0 },
        { roomNumber: "GOO7", available: 2, occupied: 0, vacant: 0 },
        { roomNumber: "GOO8", available: 1, occupied: 0, vacant: 0 },
    ],
    grid3: [
        { roomNumber: "GOO9", available: 2, occupied: 1, vacant: 1 },
        { roomNumber: "GO10", available: 2, occupied: 1, vacant: 1 },
    ]
};

function Floor({ floorno, vacating }) {

    //state for expanding of card
    const [expanded, setExpanded] = useState(true);

    //handling the number of logos
    const renderLogos = (available, occupied, vacant) => {
        const logos = [];
        for (let i = 0; i < available; i++) {
            logos.push(<img key={`available_${i}`} src="/Frame 327.jpg" alt="available" style={{ marginRight: '2rem', width: '24px', height: '24px' }} />);
        }
        for (let i = 0; i < occupied; i++) {
            logos.push(<img key={`occupied_${i}`} src="/Frame 328.jpg" alt="occupied" style={{ marginRight: '2rem', width: '24px', height: '24px' }} />);
        }
        for (let i = 0; i < vacant; i++) {
            logos.push(<img key={`vacant_${i}`} src="/Frame 497.jpg" alt="vacant" style={{ marginRight: '2rem', width: '24px', height: '24px' }} />);
        }
        return logos;
    };

    //expanding on click functionality
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);
      
        const updateTarget = useCallback((e) => {
          if (e.matches) {
            setTargetReached(true);
          } else {
            setTargetReached(false);
          }
        }, []);
      
        useEffect(() => {
          const media = window.matchMedia(`(max-width: ${width}px)`);
          media.addListener(updateTarget);
      
          // Check on mount (callback is not called until a change occurs)
          if (media.matches) {
            setTargetReached(true);
          }
      
          return () => media.removeListener(updateTarget);
        }, []);
      
        return targetReached;
      };


    return (
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div id='room_header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                <Card sx={{
                    height: '2.5rem', width: '10rem', marginLeft: '1rem', borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography sx={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold' }}>
                        {floorno}th Floor
                    </Typography>
                    <Hidden mdUp>
                        <IconButton
                            onClick={handleExpandClick}
                            sx={{ marginRight: '1rem' }}
                        >
                            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </Hidden>
                </Card>

                <Card sx={{
                    height: '2.5rem', width: '10rem', marginRight: '1rem', borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography sx={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color:'#D89A3D' }}>
                        {vacating}
                    </Typography>
                    <Box sx={{ textAlign: 'center', marginLeft: '1rem' }}>
                        <Typography sx={{ fontSize: '0.7rem', display: 'block', fontWeight: 'bold', color:'#D89A3D' }}>Beds vacating </Typography>
                        <Typography sx={{ fontSize: '0.7rem', display: 'block', fontWeight: 'bold', color:'#D89A3D' }}>in 60 days</Typography>
                    </Box>
                </Card>
            </div>





            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Card sx={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Grid container spacing={2}>
                        {/* Grid 1 */}
                        <Grid item xs={12} md={4} sx={{paddingBottom: useMediaQuery(960) ? '0px' : '2rem'}}>
                            <Grid container direction="column" spacing={2} >
                                <Grid item key={"room number"} sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                                    <Typography sx={{ marginLeft: '4rem', color: 'grey' }}>Room no.</Typography>
                                    <Typography sx={{ marginLeft: '4rem', color: 'grey' }}>Occupancy Availability</Typography>
                                </Grid>
                                {data.grid1.map(item => (
                                    <Grid item key={item.roomNumber} sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography sx={{ marginLeft: '4rem' }}>{item.roomNumber}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '4rem' }}>
                                            {renderLogos(item.available, item.occupied, item.vacant)}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Grid 2 */}
                        <Grid item xs={12} md={4} sx={{paddingBottom: useMediaQuery(960) ? '0px' : '2rem'}}>
                            <Grid container direction="column" spacing={2}>
                                <Hidden mdDown>
                                    <Grid item key={"room number"} sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                                        <Typography sx={{ marginLeft: '4rem', color: 'grey' }}>Room no.</Typography>
                                        <Typography sx={{ marginLeft: '4rem', color: 'grey' }}>Occupancy Availability</Typography>
                                    </Grid>
                                </Hidden>


                                {data.grid2.map(item => (
                                    <Grid item key={item.roomNumber} sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography sx={{ marginLeft: '4rem' }}>{item.roomNumber}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '4rem' }}>
                                            {renderLogos(item.available, item.occupied, item.vacant)}
                                        </Box>
                                    </Grid>
                                ))}

                            </Grid>
                        </Grid>

                        {/* Grid 3 */}
                        <Grid item xs={12} md={4} sx={{paddingBottom: '2rem'}}>
                            <Grid container direction="column" spacing={2}>
                                <Hidden mdDown>
                                    <Grid item key={"room number"} sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                                        <Typography sx={{ marginLeft: '4rem', color: 'grey' }}>Room no.</Typography>
                                        <Typography sx={{ marginLeft: '4rem', color: 'grey' }}>Occupancy Availability</Typography>
                                    </Grid>
                                </Hidden>

                                {data.grid3.map(item => (
                                    <Grid item key={item.roomNumber} sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography sx={{ marginLeft: '4rem' }}>{item.roomNumber}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '4rem' }}>
                                            {renderLogos(item.available, item.occupied, item.vacant)}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Collapse>
        </div>
    );
};

export default Floor;
