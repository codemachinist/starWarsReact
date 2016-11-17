<!-- <img src="http://montanacodeschool.com/wp-content/uploads/2016/08/MCS_LOGO_v1-1.png" width="200" align="right"/>

##Star Wars API

##Purpose
The purpose of this day project is to introduce students to performing API requests using React by creating a Star Wars informational application.

##Directions

###Setup -->
<!--
* Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub. -->
<!--
* Create the files necessary to build your React app. Be sure to include index.html and app.js. -->
<!--
* Starting with your index.html, be sure to call in all of the CDN's for each of the following libraries (React, React-DOM, Babel-Browser, and jQuery). We need jQuery this time, because we will be using an AJAX API request.

```
https://unpkg.com/react@15.3.1/dist/react.js
https://unpkg.com/react-dom@15.3.1/dist/react-dom.js
https://unpkg.com/babel-core@5.8.38/browser.min.js
https://unpkg.com/jquery@3.1.0/dist/jquery.min.js
``` -->

<!-- * Call in the app.js file as a script tag. Include an empty div within your body with an ID. -->

<!-- * In your app.js file, go ahead and create a Component for the Page Itself and for the List you are trying to create using the following syntax. Make sure the List falls inside the Page component as a tag.

```
var StarWarsPage = React.createClass({
  render: function() {
    return (
      <div>
        This is a Star Wars Page.
        <List/>
      </div>
    );
  }
}); -->
<!-- ```

* After that go ahead and set up your ReactDOM rendering using this syntax. Remember to call the ID that you selected for you empty div on your index.html file. When you are done, test the files by opening live-server. The phrase, "This is a Star Wars Page.", should pop up if you copied the code above.

``` -->
<!-- ReactDOM.render(
  <StarWarsPage />,
  document.getElementById('content')
);
``` -->

###Get the Data

* Take a look at the Star Wars API docs [here](https://swapi.co) and look through all of the requirements and things you can do.

* The first thing we should do is setup our API request and the necessary functions to prompt that. In my application, I set it up so that if you click a button for each data set you get that specific data. You can do it this way or you can just have your app retrieve the data on page load.

* If you want a button to activate the API request, you will need to place a button in the render method of your StarWarsPage component. Inside the button tag you will need to specify an onClick event that runs a new method in your component. It should look like this ``onClick={this.loadPeopleFromServer}``.

* If you do it the other way, you will need to create a new method called 'componentDidMount'. This is a React specific method. This method will run once as soon as the page loads. Inside the method call another method called 'loadPeopleFromServer'. This is where we will run the API request. You code should look like this.

```
componentDidMount: function(){
  this.loadPeopleFromServer();
},
```

* Because you've called a new method, we have to create the new method called 'loadPeopleFromServer'. In the function description, you will need to set up an AJAX GET request. The url for the Star Wars API is "http://swapi.co/api/people". On success, we need to set the value of a component state variable to the array that is received in the API request. Before we can do that, we need to set an initial state.

* In the StarWarsPage component, create a new method called 'getInitialState'. This is also a React specific method that sets the initial state of any component variables. Inside the function description, just have it return an object with data as a key and an empty array as it's value. It should look like this.

```
getInitialState: function() {
  return {
    data: []
  };
},
```

* Now that we have a variable set, we can set the value equal to the response on a successful API request. Using the following syntax, set the state of the variable 'data' to be equal to the results key of the response object. ``this.setState({data: response.results});`` After this is set, log the value of this.state.data to verify that you are getting appropriate data. If you are, let's keep going. If you are not, make the adjustments necessary to get an appropriate value.

###Display the Data

* Now that we have the data, let's display the data. In order to pass on the data into the list component, we will have to set it as a property variable. In the List tag in the render method, set the variable data equal to the state variable that we just set up. It should look like this. ``<List data={this.state.data}/>``

* In the same way as we mapped data in the past, we will do so again. Inside the List component render method, set a variable equal to ``this.props.data.map(function(person){})``. Inside the map function return a new component tag called 'Person'. Inside that component tag set any new variables you would like to use when defining the Person component.

* Finish off the List component by returning the variable that you set equal to the map function. If you set it up correctly, it should look something like this.

```
render: function() {
  var PersonNodes = this.props.data.map(function(person) {
    return (
      <Person
        name={person.name}
        height={person.height}
        mass={person.mass}
        haircolor={person.hair_color}
        skincolor={person.skin_color}
        eyecolor={person.eye_color}
        birthyear={person.birth_year}
        gender={person.gender}
      />
    );
  });
  return (
    <div>
      {PersonNodes}
    </div>
  );
}
```

* The last thing that needs to be completed is to set up the Person component. Create a new component named Person and render the JSX that you would like to display for each person. If you want to use any of the set variables, use the following syntax ``{this.props.varname}``. When you are done, run live-server to verify that everything is displaying accordingly.

<!-- ###Final Touches

* If you have done everything correctly, you should have a fairly crude rendering of each person. If this is the case, go ahead and add some styles. Try to get all of the other things in the Star Wars API like species, vehicles, starships, etc. May the force be with you. -->
