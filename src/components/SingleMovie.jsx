import React from 'react'
import {Card} from "reactstrap"
import AddComments from "./AddComments"

class SingleMovie extends React.Component {
    constructor() {
        super();
        this.state = {
          movie: [],
        
        };
      }
    

    componentDidMount = async () => {
        var response = await fetch(
          "http://localhost:3005/movies/" + this.props.match.params._id  
        );
        
        var jSON = await response.json();
        
        
        // var jSON1=jSON.find(x=>x._id===this.props.match.params._id)
        // console.log(jSON1)
        // console.log("hello",jSON)
        this.setState({
            movie: jSON[0]
        });
        
      };

      
    render() { 
     
        return ( 
            <>
           {this.state.movie && (
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <Card>
                            {/* <CardBody>
                                // <CardTitle ><b>{this.props.selectedBook.title}</b></CardTitle>
                                // <CardSubtitle>Price : {this.props.showMovie.}</CardSubtitle>
                            </CardBody> */}
                            <img width="100%" src={this.state.movie.Poster} alt="" />
                        </Card>
                    </div>
                   
                    <div className="col-md-9">
                                <div className="row">
                                  <AddComments IMDBID={this.state.movie.imdbID }/>
                                </div>
                                {/* <div className="row my-4">
                                   <ShowComments asinId={this.props.selectedBook.asin} 
                                   handleComments={(loadeComments)=>this.setState({comments:loadeComments}) }  
                                   Comments={this.state.comments} />
                                </div> */}
                 </div>
                </div>
               </div>
                )}
              </>
         );
    }
}
 
export default SingleMovie; 
