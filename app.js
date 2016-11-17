var StarWarsPage  = React.createClass ({
  loadPeopleFromServer: function(){
    $('.directions').css('display', 'none');
    $.ajax({
      method: "GET",
      url: "http://swapi.co/api/people/",
      success: function(data){
        console.log(data);
        this.setState({data: data.results});
        this.setState({selection: "Characters"});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(status, err.toString());
      }.bind(this)
    })
  },
  loadPlanetsFromServer: function(){
    $('.directions').css('display', 'none');
    $.ajax({
      method: "GET",
      url: "http://swapi.co/api/planets/",
      success: function(data){
        console.log(data);
        this.setState({data: data.results});
        this.setState({selection: "Planets"});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(status, err.toString());
      }.bind(this)
    })
  },
  loadSpeciesFromServer: function(){
    $('.directions').css('display', 'none');
    $.ajax({
      method: "GET",
      url: "http://swapi.co/api/species/",
      success: function(data){
        console.log(data);
        this.setState({data: data.results});
        this.setState({selection: "Species"});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(status, err.toString());
      }.bind(this)
    })
  },
  loadVehiclesFromServer: function(){
    $('.directions').css('display', 'none');
    $.ajax({
      method: "GET",
      url: "http://swapi.co/api/vehicles/",
      success: function(data){
        console.log(data);
        this.setState({data: data.results});
        this.setState({selection: "Vehicles"});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(status, err.toString());
      }.bind(this)
    })
  },
  loadStarshipsFromServer: function(){
    $('.directions').css('display', 'none');
    $.ajax({
      method: "GET",
      url: "http://swapi.co/api/starships/",
      success: function(data){
        console.log(data);
        this.setState({data: data.results});
        this.setState({selection: "Starships"});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(status, err.toString());
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {
      data: [],
      selection: ""
    };
  },
  render: function(){
    return (
      <div>
        <ul className="navbar">
          <li><button onClick={this.loadPeopleFromServer}>Characters</button></li>
          <li><button onClick={this.loadPlanetsFromServer}>Planets</button></li>
          <li><button onClick={this.loadSpeciesFromServer}>Species</button></li>
          <li><button onClick={this.loadVehiclesFromServer}>Vehicles</button></li>
          <li><button onClick={this.loadStarshipsFromServer}>Starships</button></li>
        </ul>
          <List data={this.state.data} selection={this.state.selection}/>
      </div>
    );
  }
});

var List = React.createClass ({
  render: function(){
    if (this.props.selection == "Characters"){
    var Nodes = this.props.data.map(function(person){
      return (
        <div className="dataWrapper">
          <h3>Name: {person.name}</h3>
          <h3>Height: {person.height}cm</h3>
          <h3>Hair Color: {person.hair_color}</h3>
          <h3>Skin Color: {person.skin_color}</h3>
          <h3>Eye Color: {person.eye_color}</h3>
          <h3>Birth Year: {person.birth_year}</h3>
          <h3>Gender: {person.gender}</h3>
        </div>
      );
    });
  } else if (this.props.selection == "Planets"){
    var Nodes = this.props.data.map(function(planet){
      return (
        <div className="dataWrapper">
          <h3>Name: {planet.name}</h3>
          <h3>Rotation Period: {planet.rotation_period}</h3>
          <h3>Orbital Period: {planet.orbital_period}</h3>
          <h3>Diameter: {planet.diameter}</h3>
          <h3>Climate: {planet.climate}</h3>
          <h3>Gravity: {planet.gravity}</h3>
          <h3>Terrain: {planet.terrain}</h3>
          <h3>Population: {planet.population}</h3>
        </div>
      );
    });
  } else if (this.props.selection == "Species"){
    var Nodes = this.props.data.map(function(species){
      return (
        <div className="dataWrapper">
          <h3>Name: {species.name}</h3>
          <h3>Classification: {species.classification}</h3>
          <h3>Designation: {species.designation}</h3>
          <h3>Average Height: {species.average_height}</h3>
          <h3>Skin Colors: {species.skin_colors}</h3>
          <h3>Hair Colors: {species.hair_colors}</h3>
          <h3>Eye Colors: {species.eye_colors}</h3>
          <h3>Average Life Span: {species.average_lifespan}</h3>
          <h3>Language: {species.language}</h3>
        </div>
      );
    });
  } else if (this.props.selection == "Vehicles"){
    var Nodes = this.props.data.map(function(vehicle){
      return (
        <div className="dataWrapper">
          <h3>Model: {vehicle.model}</h3>
          <h3>Manufacturer: {vehicle.manufacturer}</h3>
          <h3>Cost In Credits: {vehicle.cost_in_credits}</h3>
          <h3>Length: {vehicle.length}</h3>
          <h3>Max Atomsphering Speed: {vehicle.max_atmosphering_speed}</h3>
          <h3>Crew: {vehicle.crew}</h3>
          <h3>Passengers: {vehicle.passengers}</h3>
          <h3>Cargo Capacity: {vehicle.cargo_capacity}</h3>
          <h3>Vehicle Class: {vehicle.vehicle_class}</h3>
        </div>
      );
    });
  } else if (this.props.selection == "Starships"){
    var Nodes = this.props.data.map(function(starship){
      return (
        <div className="dataWrapper">
          <h3>Model: {starship.model}</h3>
          <h3>Manufacturer: {starship.manufacturer}</h3>
          <h3>Cost In Credits: {starship.cost_in_credits}</h3>
          <h3>Length: {starship.length}</h3>
          <h3>Max Atmosphering Speed: {starship.max_atmosphering_speed}</h3>
          <h3>Crew: {starship.crew}</h3>
          <h3>Passengers: {starship.passengers}</h3>
          <h3>Cargo Capacity: {starship.cargo_capacity}</h3>
          <h3>Hyperdrive Rating {starship.hyper_drive_rating}</h3>
          <h3>Starship Class: {starship.starship_class}</h3>
        </div>
      );
    });
  }
   return (
      <div>
        <h4 className="selection">{this.props.selection}</h4>
        <div className="infoContainer">
          <div className="directions">
            Select category from the menu above. Results will appear in this portal...
          </div>
          {Nodes}
        </div>
      </div>
      );
    }
  });

ReactDOM.render(
  <StarWarsPage/>,
  document.getElementById('content')
);
