

/*

let djangodata = 
"pixels": {
  {
      "x": 1,
      "y": 1,
      "color": 22222
  },
  {
      "x": 1,
      "y": 2,
      "color": 12354
  },
  {
      "x": 1,
      "y": 3,
      "color": 12354
  },
  {
      "x": 1,
      "y": 4,
      "color": 12352
  },
  {
      "x": 1,
      "y": 5,
      "color": 12352
  }
}*/

// component to display the title, description, and instructions
const Banner = ({ header }) => {
    return (
      <div class='title-group'>
        <h1 class='title-t'>{ header.title }</h1>
        <h2 class='title-d'>{ header.description }</h2>
        <div class='rect-i'>
          <h4 class='title-i'>{ header.instructions }</h4>
        </div>
      </div>
    );
  };
  
  // component to display the location and color data of each pixel
  const Grid = ({ pixels }) => (
    <div class='grid'>
    { Object.values(pixels).map(pixel => <Pixel pixel={ pixel } />) }
    </div>
  );
  
  // update database with new color
  const setColor = async (pixel, newColor) => {
    if (newColor && window.confirm(`Change ${pixel.color} to ${newColor}?`)) {
      try {
        await setData(`/pixels/${pixel.id}/color`, newColor);
      } catch (error) {
        alert(error);
      }
    }
  };
  
  // // prompt user to input new color
  const getNewColor = pixel => {
    const newColor = prompt('Enter new hex color value', pixel.color);
    return newColor;
  };
  
  // update database with new id
  const setId = async (pixel, newId) => {
    if (newId && window.confirm(`Change ${pixel.id} to ${newId}?`)) {
      try {
        await setData(`/pixels/${pixel.id}/id`, newId);
      } catch (error) {
        alert(error);
      }
    }
  };
  
  // // prompt user to input new id
  const getNewId = pixel => {
    const newId = prompt('Enter new location', pixel.id);
    return newId;
  };
  
  
  const Pixel = ({ pixel }) => {
    return (
      <div>
        <div>
          location: { pixel.id } ; color: { pixel.color }
        </div>
        <button onClick={() => setColor(pixel, getNewColor(pixel))}>Change color</button>
        <button onClick={() => setId(pixel, getNewId(pixel))}>Change id</button>
      </div>
    );
  };
  
  // use django database
  
  const Grid2 = ({ pixels }) => (
    <div class='grid'>
    { Object.values(pixels).map(pixel => <Pixel2 pixel={ pixel } />) }
    </div>
  );
  
  const Pixel2 = ({ pixel }) => {
    return (
      <div>
        <div>
          x: { pixel.x } ; y: { pixel.y }; color: { pixel.color }
        </div>
      </div>
    );
  };
  
  const App = () =>  {
    const [djangoData, setDjangoData] = React.useState();
    const [data, loading, error] = useData('/'); 
    
    if (error) return <h1>{error}</h1>;
    if (loading) return <h1>Loading NU/Place</h1>;
  
    
    axios
        .get("http://127.0.0.1:8000/pixels/1/")
        .then((res) => setDjangoData(res[0]))
        .catch((err) => console.log(err));
  
    console.log(djangoData);
  
    /*
    function componentDidMount() {
      this.refreshList();
    }
    
    refreshList = () => {
      axios
        .get("/pixels/")
        .then((res) => setDjangoData(res))
        .catch((err) => console.log(err));
    };
    */
  
    // use the django database
    //const djangodata = axios.get("http://127.0.0.1:8000/pixels/");
    //console.log(djangodata);
    /*
    axios.get("/pixels/")
        .then((res) => djangodata)
        .catch((err) => console.log(err));
        */
  
    return (
      <>
        <div classname="top-container">
          <div classname="logo">
            <Banner header={ data }/>
          </div>
          <button className="sign-in-btn">Sign In</button>
        </div>
        <Grid pixels={ data.pixels }/>
        
        <Grid pixels={ data.pixels }/>
      </>
    )
  };
  
  export default App;
  
  
  
  /*
  
  <Grid2 pixels={ djangoData }/>
  const header = {
    title: "NU/Place",
    description: "NORTHWESTERN'S VIRTUAL ROCK",
    instructions: "Click on a square to paint it. You can paint one square every 5 minutes."
  };
  
  const database = {
    "pixels": {
      "0,0" : {
        "x" : "0",
        "y" : "0",
        "r" : "70",
        "g" : "122",
        "b" : "167"
      },
      "0,1" : {
        "x" : "0",
        "y" : "1",
        "r" : "244",
        "g" : "190",
        "b" : "215"
      },
      "1,0" : {
        "x" : "1",
        "y" : "0",
        "r" : "254",
        "g" : "188",
        "b" : "67"
      },
      "1,1" : {
        "x" : "1",
        "y" : "1",
        "r" : "238",
        "g" : "212",
        "b" : "255"
      }
    }
  };
  */
  
  /*
  // displays one pixel
  const Pixel = ({ pixel }) => {
    const style = { display: "inline-block",
                    width: "100px",
                    height: "100px",
                    background: `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`};
    return (
      //<div classname="rectangle" style={style}></div>
      <div>hi</div>
    );
  };
  
  // displays grid of pixels
  const Grid = ({ pixels }) => {
    // goes inside div
    // { Object.values(pixels).map(pixel => <Pixel pixel={ pixel }/>)}
    <div>
      <h1>hi</h1>
    </div>
  };
  */