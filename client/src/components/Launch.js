import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Slider from 'react-slick';
import styled from 'styled-components';
const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      links {
        article_link
        youtube_id
        flickr_images
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type },
              links: { article_link, youtube_id, flickr_images }
            } = data.launch;
            return (
              <div>
                <h1 className="display-4 my-5">
                  <span className="text-dark">Mission: </span>
                  {mission_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Flight Number: {flight_number}
                  </li>
                  <li className="list-group-item">
                    Launch Year: {launch_year}
                  </li>
                  <li className="list-group-item">
                    Launch Successful:{' '}
                    <span
                      className={classNames({
                        'text-success': launch_success === true,
                        'text-danger': launch_success === false,
                        'text-secondary': launch_success === null
                      })}
                    >
                      {launch_success ? 'Yes' : null}
                      {launch_success === false ? 'No' : null}
                      {launch_success === null ? 'Unknown' : null}
                    </span>
                  </li>
                </ul>
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">RocketID: {rocket_id}</li>
                  <li className="list-group-item">
                    Rocket Name: {rocket_name}
                  </li>
                  <li className="list-group-item">
                    Rocket Type: {rocket_type}
                  </li>
                </ul>
                <h4 className="my-3">Media </h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Images:
                    {flickr_images.length > 0 ? (
                      <Slider {...sliderSettings} className="my-3">
                        {flickr_images.map(image => (
                          <Container imageLink={image} />
                        ))}
                      </Slider>
                    ) : (
                      <span> No Images available at this time</span>
                    )}
                  </li>
                  <li className="list-group-item">
                    Video:
                    {youtube_id ? (
                      <div className="text-center">
                        <br />
                        <iframe
                          title="video"
                          className="my-3 "
                          width="100%"
                          height="450px"
                          src={`https://www.youtube.com/embed/${youtube_id}`}
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </div>
                    ) : (
                      <span>No Video available at this time</span>
                    )}
                  </li>
                  <li className="list-group-item">
                    Article :{' '}
                    {article_link ? (
                      <a
                        href={`${article_link}`}
                        className="btn btn-secondary mx-5"
                      >
                        Read More
                      </a>
                    ) : (
                      <span>
                        Sorry, there's no article available at this time
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            );
          }}
        </Query>
        <hr />
        <Link to="/" className="btn btn-primary my-5">
          Return Home
        </Link>
      </>
    );
  }
}

const Container = styled.div`
  background-image: url('${props => props.imageLink}');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  height: 60vh;
`;

export default Launch;
