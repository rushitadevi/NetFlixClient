import React from "react";
import { Link } from "react-router-dom";
import { CardImg } from "reactstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import React from "react";
import Slider from "react-slick";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount = async () => {
    var response = await fetch("http://localhost:3005/movies");
    if (response.ok) {
      console.log("hi");
      var jSon = await response.json();
      this.setState({
        movies: jSon
      });
    }
    console.log("hii", this.state.movies.Poster);
  };

  render() {
    // const responsive = {
    //  superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //    items: 5,
    //   },
    //   desktop: {
    //     breakpoint: { max: 5000, min: 1024 },
    //     items: 4,
    //   },
    //    tablet: {
    //      breakpoint: { max: 1024, min: 464 },
    //      items: 2,
    //    },
    //    mobile: {
    //      breakpoint: { max: 464, min: 0 },
    //      items: 1,
    //    },
    // };

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
<div className="container">
  {/* <Carousel centerMode={true} 
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-5-px"
>
 {this.state.movies &&
              this.state.movies.map((movie, id) => (
                <div className="col-md-2 mt-4">
                  
                <div className="card">
                  <Link to={"/SingleMovie/"+ movie.imdbID} key={movie.imdbID} >
                       <CardImg top src={movie.Poster}
                        style={{ cursor: "pointer" , height:"250px",width:"200px" }}
                        />
                        </Link>

                </div>
            </div>

            
              )).slice(0,10)
      }

</Carousel> */}

<Slider {...settings}>
{this.state.movies &&
              this.state.movies.map((movie, id) => (
                <div className="col-md-2 mt-4">
                  
                <div className="card">
                  <Link to={"/SingleMovie/"+ movie.imdbID} key={movie.imdbID} >
                       <CardImg top src={movie.Poster}
                        style={{ cursor: "pointer" , height:"250px",width:"200px" }}
                        />
                        </Link>

                </div>
            </div>

            
              )).slice(0,10)
              
      }

      </Slider>

      <Slider {...settings}>
{this.state.movies &&
              this.state.movies.map((movie, id) => (
                <div className="col-md-2 mt-4">
                  
                <div className="card">
                  <Link to={"/SingleMovie/"+ movie.imdbID} key={movie.imdbID} >
                       <CardImg top src={movie.Poster}
                        style={{ cursor: "pointer" , height:"250px",width:"200px" }}
                        />
                        </Link>

                </div>
            </div>

            
              ))
              
      }

      </Slider>
  
</div>


{/* <div className="container">
  <Carousel centerMode={true} 
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-5-px"
>
 {this.state.movies &&
              this.state.movies.map((movie, id) => (
                <div className="col-md-2 mt-4">
                  
                <div className="card">
                  <Link to={"/SingleMovie/"+ movie.imdbID} key={movie.imdbID} >
                       <CardImg top src={movie.Poster}
                        style={{ cursor: "pointer" , height:"250px",width:"200px" }}
                        />
                        </Link>

                </div>
            </div>

            
              )).slice(11,50)
      }

</Carousel>
  
</div> */}

     
     
      </>
    );
}
}
export default Home;
