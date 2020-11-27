import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    

    <div className="App">
      <Nav />
      <Banner />
    
      
      
      <Row 
      isLargeRow={true}
      title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row  title="Top Rated" fetchUrl={requests.fetchtopRated}/>
      <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row  title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row  title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row  title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row  title="Action" fetchUrl={requests.fetchActionMovies}/>
      
      


       
    </div>
  );
}

export default App;
