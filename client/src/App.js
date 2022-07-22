import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/songs")
    .then((res) => res.json())
    .then((data) => setData(data.data.track_list[0].track.album_name));
  },[data]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Testing</p>
        <p>
          {data?data:"Loading..."}
        </p>
      </header>
    </div>
  );
}

export default App;
