import { FaStar } from "react-icons/fa";
import "./MovieCard.css";

const MovieCard = (props) => {
    return (
        <div className="movie-card">
          <img src={props.image} />
          <h4 className="rating">
          <FaStar color="yellow" className="star"/>
            {props.rating}
            </h4>

        </div>
    );
}
export default MovieCard;