import NowPlaying from "./componats/NowPlaying";
import Header from "./componats/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <NowPlaying />
      <div>Search</div>
      <div>Popular Movies</div>
      <div>footer</div>
    </div>
  )
}
export default App;