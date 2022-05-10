import { Grid } from "@mui/material";

export const Hero = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      style={{backgroundColor: "#5ABDB5", borderRadius:" 0 0 50% 50%"}}
    >
      <Grid item textAlign={"center"}>
        <h1 style={{textAlign:"center", color:"#fff", maxWidth:"375px", fontSize:"36px", marginTop: "40px"}}>Discounted Secondhand Books</h1>
        <p style={{textAlign:"center", color:"#fff", maxWidth:"375px", fontSize:"16px"}}>Used and near new secondhand books at great</p>
        <img src="/img/hero.png" height={"300px"} alt=""/>
      </Grid>
    </Grid>
  );
};
