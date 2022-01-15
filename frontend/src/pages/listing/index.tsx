import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    // teste de requisição - inadequado
    let url = BASE_URL + "/movies?size=12&page=0";
    axios.get(url).then(
        response => {
            console.log(response.data);
        }
    );
    

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Listing;
