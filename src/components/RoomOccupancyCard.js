import React from 'react';
import { Card, CardContent, Typography,Grid } from '@mui/material';

function RoomOccupancyCard({ totalBeds, availableBeds, vacatingInDays, occupiedBeds }) {
  return (
    <Card sx={{
        backgroundColor: '#f5f5f5',
        marginTop: '25px',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
        border: '1px solid transparent',
        }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column',alignItems:'center', justifyContent: 'flex-start' }}>
          <Typography variant="body1"sx={{ fontWeight: 'bold', fontSize: '2.1rem', color: '#333' }}>{totalBeds}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize: '16px', color: '#333',textAlign:'center',fontWeight:'bold'}}>
              Total Beds
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column',alignItems:'center', justifyContent: 'flex-start' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '2.1rem', color: '#379017' }}>{availableBeds}</Typography>
            <Typography variant="body2" color="#379017" sx={{textAlign:'center',fontWeight:'bold'}}>
              Available Beds
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column',alignItems:'center', justifyContent: 'flex-start' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '2.1rem', color: '#D89A3D' }}>{vacatingInDays}</Typography>
            <Typography variant="body2" color="#D89A3D" sx={{textAlign:'center',fontWeight:'bold'}}>
              Vacating in 60 days
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column',alignItems:'center', justifyContent: 'flex-start' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '2.1rem', color: '#FF4B4B' }}>{occupiedBeds}</Typography>
            <Typography variant="body2" color="#FF4B4B" sx={{textAlign:'center',fontWeight:'bold'}}>
              Total Occupied Beds
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default RoomOccupancyCard;
