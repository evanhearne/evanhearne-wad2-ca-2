import PopularHeader from "../headerPopular";
import PopularList from "../popularList";
import Grid from "@mui/material/Grid";

function PopularListPageTemplate({ popular, title, action }) {

    return (
        <Grid container sx={{ padding: '20px' }}>
        <Grid item xs={12}>
            <PopularHeader title={title} />
        </Grid>
        <Grid item container spacing={5}>
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
            </Grid>
            <PopularList action={action} popular={popular}></PopularList>
        </Grid>
        </Grid>
    );
    }
    export default PopularListPageTemplate;