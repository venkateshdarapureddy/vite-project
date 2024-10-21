import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PieChartWithCenterLabel from './piechart';
import { Avatar } from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

function FourCrads() {
    return (
        <>
            <Box className='grid grid-cols-4  gap-6 font-venky'>

                {/* post Section */}

                <Box className='col-span-2 row-span-1  p-8 shadow-sm bg-white rounded-[12px]'>

                    <Box className="flex justify-between">
                        {/* posts  */}
                        <Box>
                            <Typography variant="h6" fontWeight="bold"> Posts </Typography>
                        </Box>

                        <Box className="flex justify-center">
                            <Typography variant="subtitle1" fontSize="14px" className='text-gray-700' fontFamily="pulic-sans">
                                See Details
                            </Typography>
                            <ArrowRightIcon></ArrowRightIcon>

                        </Box>

                    </Box>

                    {/* total Saved Section  */}

                    <Box className="flex gap-5 mt-[20px]  ">

                        <Box className='flex justify-start items-center p-4 w-[50%]  bg-[#F8F4F0] shadow-none rounded-[12px]'>

                            <Box>
                                <LocalAtmIcon sx={{ fontSize: "40px", color: "#277c78" }}></LocalAtmIcon>
                            </Box>

                            <Box className="flex flex-col  pl-[16px]">
                                <Typography variant="subtitle1" fontWeight="300" fontSize="14px" className='text-[#696868]' fontFamily="pulic-sans">
                                    Total Saved
                                </Typography>
                                <Typography variant="h6" fontWeight="700" fontSize="32px" fontFamily="pulic-sans">
                                    $850
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="grid grid-cols-2 gap-5">

                            <Box className="border-l-4 border-[#277C78] pl-3 rounded-[2px] " >
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700'>
                                    Savings
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black ' fontFamily="pulic-sans">
                                    $159
                                </Typography>

                            </Box>

                            <Box className="border-l-4 border-[#F2CDAC] pl-3 rounded-[2px] ">
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700'>
                                    git
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black'>
                                    $40
                                </Typography>

                            </Box>


                            <Box className="border-l-4 border-[#82C9D7] pl-3 rounded-[2px] ">
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700'>
                                    Correct Ticket
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black'>
                                    $110
                                </Typography>

                            </Box>

                            <Box className="border-l-4 border-[#82C9D7] pl-3 rounded-[2px] ">
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700'>
                                    New Laptop
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black '>
                                    $10
                                </Typography>

                            </Box>

                        </Box>

                    </Box>


                </Box>

                {/* Budgets Section */}

                <Box className='col-span-2 row-span-2 p-8 shadow-sm bg-white rounded-[12px] '>
                    <Box className="flex justify-between">
                        {/* posts  */}
                        <Box>
                            <Typography variant="h6" fontWeight="bold"> Budgets </Typography>
                        </Box>

                        <Box className="flex justify-center">
                            <Typography variant="subtitle1" fontSize="14px" className='text-gray-700' fontFamily="pulic-sans">
                                See Details
                            </Typography>
                            <ArrowRightIcon></ArrowRightIcon>

                        </Box>



                    </Box>

                    <Box className="flex gap-5 mt-[20px] justify-center items-center ">

                        <Box >

                            <Box className="w-[50%] ">
                            <PieChartWithCenterLabel />
                            </Box>

                            
                        </Box>

                        <Box className="grid  gap-3">

                            <Box className="border-l-4 border-[#134a47] pl-3 rounded-[2px] " >
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700'>
                                    Entertainment
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black ' fontFamily="pulic-sans">
                                    $50.00
                                </Typography>

                            </Box>

                            <Box className="border-l-4 border-[#69949f] pl-3 rounded-[2px] ">
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700' sx={{marginBottom:0}}>
                                Billis
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black'>
                                    $750.00
                                </Typography>

                            </Box>


                            <Box className="border-l-4 border-[#ccab3d] pl-3 rounded-[2px] ">
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700'>
                                    Dining Out
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black'>
                                    $75.00
                                </Typography>

                            </Box>

                            <Box className="border-l-4 border-[#263336] pl-3 rounded-[2px] ">
                                <Typography variant="subtitle1" gutterBottom fontSize="12px" className='text-gray-700'>
                                    Personal Care
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom fontSize="14px" fontWeight="bold" className='text-black '>
                                    $100.00
                                </Typography>

                            </Box>

                        </Box>

                    </Box>

                </Box>

                {/* Tractions Section  */}
                <Box className='col-span-2 row-span-2 p-10 shadow-sm bg-white rounded-[12px]'>
                <Box className="flex justify-between">
                        {/* Transactions  */}
                        <Box>
                            <Typography variant="h6" fontWeight="bold">Transactions </Typography>
                        </Box>

                        <Box className="flex justify-center">
                            <Typography variant="subtitle1" fontSize="14px" className='text-gray-700' fontFamily="pulic-sans">
                               View All
                            </Typography>
                            <ArrowRightIcon></ArrowRightIcon>

                        </Box>



                </Box>

                <Box className="mt-[32px]">
                
                <Box className="flex justify-between pb-5 border-b-2">
                    <Box className="flex gap-[16px] justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/assets/11.jpg" /> 
                    <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black' fontFamily="pulic-sans">
                    Emma Richardson
                   </Typography>
                    </Box>
                 
                   
                  <Box>
                    
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#277C78]' fontFamily="pulic-sans">
                    +$75.50
                   </Typography>

                   <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                   19 Aug 2024
                   </Typography>

                    </Box>

                </Box>


                <Box className="flex justify-between pb-5 pt-5 border-b-2">
                    <Box className="flex gap-[16px] justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/assets/12.jpg" /> 
                    <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black' fontFamily="pulic-sans">
                    Savory Bites Bistro
                   </Typography>
                    </Box>
                 
                   
                  <Box>
                    
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#000]' fontFamily="pulic-sans">
                    -$55.50
                   </Typography>

                   <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                   19 Aug 2024
                   </Typography>

                    </Box>

                </Box>

                <Box className="flex justify-between pb-5 pt-5 border-b-2">
                    <Box className="flex gap-[16px] justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/assets/11.jpg" /> 
                    <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black' fontFamily="pulic-sans">
                    Daniel Carter
                   </Typography>
                    </Box>
                 
                   
                  <Box>
                    
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#000]' fontFamily="pulic-sans">
                    -$42.30
                   </Typography>

                   <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                   18 Aug 2024
                   </Typography>

                    </Box>

                </Box>


                <Box className="flex justify-between pb-5 pt-5 border-b-2">
                    <Box className="flex gap-[16px] justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/assets/12.jpg" /> 
                    <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black' fontFamily="pulic-sans">
                  Sun Park
                   </Typography>
                    </Box>
                 
                   
                  <Box>
                    
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#277C78]' fontFamily="pulic-sans">
                    +$120.00
                   </Typography>

                   <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                   17 Aug 2024
                   </Typography>

                    </Box>

                </Box>


                 <Box className="flex justify-between pb-5 pt-5 border-b-2">
                    <Box className="flex gap-[16px] justify-center items-center">
                    <Avatar alt="Remy Sharp" src="/assets/11.jpg" /> 
                    <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black' fontFamily="pulic-sans">
                    Urban Services Hub
                   </Typography>
                    </Box>
                 
                   
                  <Box>
                    
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#000]' fontFamily="pulic-sans">
                    -$65.00
                   </Typography>

                   <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                   17 Aug 2024
                   </Typography>

                    </Box>

                </Box>

                </Box>
                  
                  
                 
                </Box>

                {/* Requring Bills Section */}
                <Box className='col-span-2 row-span-1 p-10 shadow-sm bg-white rounded-[12px]' >
                <Box className="flex justify-between">
                        {/* Recurring Bills  */}
                        <Box>
                            <Typography variant="h6" fontWeight="bold">Recurring Bills </Typography>
                        </Box>

                        <Box className="flex justify-center">
                            <Typography variant="subtitle1" fontSize="14px" className='text-gray-700' fontFamily="pulic-sans">
                                See Details
                            </Typography>
                            <ArrowRightIcon></ArrowRightIcon>

                        </Box>



                </Box>

                <Box className="flex flex-col gap-[12px] mt-[32px]">
                    <Box className="flex justify-between bg-[#F8F4F0] p-[20px_16px] rounded-[8px] border-l-4 border-[#206978]">
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#696868]' >
                    Paid Bills
                   </Typography>

                   <Typography variant="" fontWeight="700" fontSize="14px" className='text-black' >
                   $190.00
                   </Typography>
                    </Box>

                    <Box className="flex justify-between bg-[#F8F4F0] p-[20px_16px] rounded-[8px] border-l-4 border-[#e3bb65]">
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#696868]' >
                    Total Upcoming
                   </Typography>

                   <Typography variant="" fontWeight="700" fontSize="14px" className='text-black' >
                   $194.98
                   </Typography>
                    </Box>


                    <Box className="flex justify-between bg-[#F8F4F0] p-[20px_16px] rounded-[8px] border-l-4 border-[#a0dae8]">
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#696868]' >
                    Due soon
                   </Typography>

                   <Typography variant="" fontWeight="700" fontSize="14px" className='text-black' >
                   $59.98
                   </Typography>
                    </Box>
                </Box>

                </Box>

            </Box>
        </>
    )
}
export default FourCrads;