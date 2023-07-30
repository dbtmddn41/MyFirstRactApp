import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"

function ShowDetails({BackImg, CoverImg, title, rating, runtime, descript}) {
    return (
        <div>
            <h1
            style={{backgroundImage: `url(${BackImg})`, textShadow: "-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000",
            color: "beige"}}>
                {title} - {rating}
                </h1>
            <div>
                <img src={CoverImg} alt={title + '_coverimage'} />
            </div>
            <p>runtime: {runtime}</p>
            <p>{descript}</p>
        </div>
    )
}

ShowDetails.propTypes = {
    BackImg : PropTypes.string,
    CoverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number,
    descript: PropTypes.string.isRequired,
};

function MovieDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState()
    const getMovieDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {getMovieDetail();});
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
            <ShowDetails
            BackImg={detail.background_image}
            CoverImg={detail.large_cover_image}
            title={detail.title_long}
            rating={detail.rating}
            runtime={detail.runtime}
            descript={detail.description_full}
            />
            }
        </div>
    )
}

export default MovieDetail;