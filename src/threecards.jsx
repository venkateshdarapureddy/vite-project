import  Box  from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function ThreeCards() {
  return (
    <>
      <Box className='grid grid-cols-3 gap-6 m-[32px_0]' >

        <Box className="col-span-1">
          <Paper className='p-6 rounded-[12px] text-white grid gap-3 bg-black ' elevation={0} sx={{ background: "#000000", borderRadius: "12px", color: "white" }}>
            <Typography variant="h6" fontSize="14px">Current Balance</Typography>
            <Typography variant="h4" fontWeight="700" >$4,836.00</Typography>
          </Paper>
        </Box>

        <Box className="col-span-1 rounded-[16px] ">
          <Paper className='p-6 rounded-[12px] text-white grid gap-3 bg-black ' elevation={0} sx={{ borderRadius: "12px" }}>
            <Typography variant="h6" fontSize="14px">Income</Typography>
            <Typography variant="h4" fontWeight="700" >$3,814.25</Typography>
          </Paper>
        </Box>

        <Box className="col-span-1">
          <Paper className='p-6 rounded-[12px] text-white grid gap-3 bg-black ' elevation={0} sx={{ borderRadius: "12px" }}>
            <Typography variant="h6" fontSize="14px">Expenses</Typography>
            <Typography variant="h4" fontWeight="700">$1,700.50</Typography>
          </Paper>
        </Box>

      </Box>
    </>
  );
}
export default ThreeCards;
