import "./Details.css";

function Details(props) {
  const { handleClick, activeShoe } = props;

  const generatePhotos = (photos) => {
    return photos.map((photo) => <img src={photo} alt="Jordans"></img>);
  };
  const photos = generatePhotos(activeShoe.Photos);
  return (
    <div className="details-overlay active">
      <div className="details active">
        <div className="slides">{photos}</div>
        <p className="card-name">Air Jordan 1s</p>
        <p className="card-description"></p>
        <p className="card-price"></p>
        <button onClick={(e) => handleClick(false)}>Click Me</button>
      </div>
    </div>
  );
}
export default Details;

// <form>
//   <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
//   <input type="radio" name="fancy" value="hearts" id="hearts" />
//   <input type="radio" name="fancy" value="spades" id="spades" />
//   <input type="radio" name="fancy" value="diamonds" id="diamonds" />
//   <label for="clubs">&#9827; Clubs</label>
//   <label for="hearts">&#9829; Hearts</label>
//   <label for="spades">&#9824; Spades</label>
//   <label for="diamonds">&#9830; Diamonds</label>

//   <div class="keys">Use left and right keys to navigate</div>
// </form>
