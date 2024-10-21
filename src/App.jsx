import Box from '@mui/material/Box';
import Container from "@mui/material/Container"
import HomeIcon from '@mui/icons-material/Home';
import { Portal, Typography } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Paper from '@mui/material/Paper';
import ThreeCards from './threecards';
import FourCrads from './fourcards';


function App() {


  return (
    <>
      <Container maxWidth="xl" className='w-full lg:max-w-7xl h-full'>

        <Box className="grid grid-cols-9" >

          {/* Black Container Section */}
          <Box className="bg-black  col-span-2  text-white flex flex-col justify-between pt-[40px] rounded-[0_16px_16px_0]">

            <Box>
            <h1 className='font-bold text-[30px] pl-[40px]'>finance </h1>

              <Box className='p-[24px_24px_0_0] mb-[24px]'>
                {/* overview section */}
                <Box className='flex p-[16px_32px] gap-4 bg-white text-black rounded-[0_12px_12px_0] border-l-4 border-[#277c78] shadow-sm '>
                  <HomeIcon></HomeIcon>
                  <Typography variant="h6 " fontWeight="700" fontSize='16px' >
                    Overview
                  </Typography>
                </Box>

                {/* Transactions Section */}
                <Box className='flex items-center  p-[16px_32px] gap-4  text-white rounded-[0_12px_12px_0]   shadow-sm'>
                  <ImportExportIcon></ImportExportIcon>
                  <Typography variant="h6 " fontWeight="700" fontSize='16px' >
                    Transactions
                  </Typography>
                </Box>

                {/* budgets Section*/}
                <Box className='flex p-[16px_32px] gap-4  text-white rounded-[0_12px_12px_0]   shadow-sm'>
                  <DonutSmallIcon></DonutSmallIcon>
                  <Typography variant="h6 " fontWeight="700" fontSize='16px' >
                    Budgets
                  </Typography>
                </Box>

                {/* Pots  Section*/}
                <Box className='flex p-[16px_32px] gap-4  text-white rounded-[0_12px_12px_0]   shadow-sm'>
                  <RequestQuoteIcon></RequestQuoteIcon>
                  <Typography variant="h6 " fontWeight="700" fontSize='16px' >
                    Pots
                  </Typography>
                </Box>

                {/* recurring-bills Section */}
                <Box className='flex p-[16px_32px] gap-4  text-white rounded-[0_12px_12px_0]   shadow-sm'>
                  <ReceiptIcon></ReceiptIcon>
                  <Typography variant="h6 " fontWeight="700" fontSize='16px' >
                    Recurring Bills
                  </Typography>
                </Box>

              </Box>




            </Box>

             {/* Minimize Menu section */}
             <Box className='flex p-[16px_32px] gap-4  text-white rounded-[0_12px_12px_0]   shadow-sm'>
                <MenuOpenIcon ></MenuOpenIcon>
                <Typography variant="h6 " fontWeight="700" fontSize='16px' >
                  Minimize Menu
                </Typography>
              </Box>

          </Box>


          {/* White Container Section */}

          <Box className="bg-[#F8F4F0] col-span-7 p-[32px_40px]">

            <Typography variant="h4" fontWeight="700" fontSize="32px">
              Overview
            </Typography>

            {/* Three Cards Section */}

            <Box><ThreeCards /></Box>

            {/* Four Cards Section */}

           <Box><FourCrads /></Box> 

            

          </Box>

        </Box>
      </Container>
    </>
  )
}

export default App
