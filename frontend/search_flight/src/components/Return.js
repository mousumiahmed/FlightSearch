import React from "react";
import axios from "axios";


export default class Return extends React.Component{
    constructor(props){
        super(props);
        this.state={
            originCity:"",
            destinationCity:"",
            departureDate:"",
            order:0,
            result:[]

        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    Change=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      
      }
      componentDidMount(){
        axios.get(`http://localhost:5000/flightdetails?order=${this.state.order}&originCity=${this.state.originCity}&destinationCity=${this.state.destinationCity}`)
		.then((response) =>{
			console.log(response.data)
           this.setState({
				result:response.data               
            });	
        })        
		.catch((err) => alert(err))

      }
    
  
    onSubmit(e) {     
     //console.log(this.state.originCity , this.state.order ,this.state.destinationCity)
     axios.get(`http://localhost:5000/flightdetails?order=${this.state.order}&originCity=${this.state.originCity}&destinationCity=${this.state.destinationCity}&departureDate=${this.state.departureDate}`)
		.then((response) =>{
			console.log(response.data)
           this.setState({
				result:response.data               
            });	
           // console.log(response);                   
        })
        
		.catch((err) => alert(err))
        e.preventDefault();  
    }

    render(){
        //console.log(this.state.originCity)
        //console.log(this.state.destinationCity)
        //console.log(this.state.result)
        //console.log(this.state.departureDate)
        return(
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <div class="row">
                        <div className="col">
                            <label>Current</label>
                            <input type="text" class="form-control" placeholder="From" name="originCity" value={this.state.originCity} onChange={this.Change}/>
                        </div>
                        <div className="col">
                            <label>Destination </label>
                            <input type="text" class="form-control" placeholder="To" name="destinationCity" value={this.state.destinationCity} onChange={this.Change}/>
                        </div>
                        <div className="col">
                            <label>DepartureDate</label>
                            <input type="text" class="form-control" placeholder="dd/mm/yyyy" name="departureDate" value={this.state.departureDate} onChange={this.Change}/>
                        </div>
                        <div className="col">
                            <label>Price</label>
                            <select name="order" value={this.state.order} onChange={this.Change}>
                                <option>Select Price</option>
                                <option value="1">Price Low to high</option>
                                <option value="-1">Price high to low</option>
                            </select>
                        </div>
                        <div className="col mt-4">
                        <input type="submit"  className="btn btn-primary"/>
                        </div>
                      </div>
                    </div>
                </form>
                <div className = "row">    
                {this.state.result.map((value,index) => {
                    //console.log(value.subject);                  
                        return(
                            <div key={index} className = "col">
                                 <div className="card" style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                        <div className="card-body">
                                            <h4 className="card-title text-primary text-center ">{value.name}</h4>
                                            <hr></hr>
                                            <div className="row justify-content-center">
                                            <div class="col-6 text-center border bg-light">
                                            <h6 className="card-title text-primary text-center mb-3 ">{value.originCity}<i class="fa fa-forward m-3"></i>{value.destinationCity}</h6>
                                                <p class="card-text text-info">Price : {value.price}<br></br>
                                                DepartureDate : {value.departureDate}<br></br>
                                                DepartureTime : {value.departureTime}</p>
                                            </div>
                                            <div class="col-4 border bg-info">-
                                            <img src="/f.jpeg" ></img><br></br>
                                            <button className="text-center btn-block btn-secondary my-1">Book Now</button>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )                       
                    })}
                </div>
            </React.Fragment>
        )
    }
}