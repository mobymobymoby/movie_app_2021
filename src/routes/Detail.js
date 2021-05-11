import React from 'react';
import Movie from '../components/Movie';
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div align='center' className="detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="detail__data">
                    <h3 className="detail__title">{location.state.title}</h3>
                    <h5 className="detail__year">{location.state.year}</h5>
                    <ul className="detail__genres">
                        {location.state.genres.map((genre, index) => { // map 함수의 두 번째 인자가 index 라고..
                            return <li key={index} className="movie__genre">{genre}</li>; // 원소가 여러개라 여기서도 key 안해주면 워닝뜸..
                        })}
                    </ul>
                    <p className="detail__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            // 새로 고침하면 return null 이 되고, 이후에 componentDidMount 가 호출되겠죠
            return null;
        }
    }
}

export default Detail;