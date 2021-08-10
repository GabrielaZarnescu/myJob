import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import JobCard from './JobCard/JobCard';
import NewJobModel from './JobCard/NewJobModel';
import jobData from './dummyData';

export default () =>{

    return(
        <ThemeProvider theme={theme}>
            <Header></Header>
            <NewJobModel></NewJobModel>
            <Grid container justify='center'>
              <Grid items xs={10}>
                  <SearchBar>   
                  </SearchBar>
                  {jobData.map(job =><JobCard key={job.id} {...job}/>)}
                  <JobCard></JobCard>
                  <JobCard></JobCard>
                  <JobCard></JobCard>
                  </Grid>  
            </Grid>
        </ThemeProvider>
    );
};