// TODO

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      done: false
    }
    
  }
  
  onMouseEnter() {
    this.setState({
      done: true
    });
  }
  
  onMouseLeave() {
    this.setState({
      done: false
    });
  }

  render() {
    
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    //Change font weight for bolding effect?

    return (
      <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.item}</li>
    );
  }
}



var GroceryList = (props) => (
  <div>
  	<h2>
  	  Our Grocery List
  	</h2>
  	<ul>
  	  {props.groceryItems.map(item => 
  	  	<GroceryListItem item={item} /> 
  	  )}
  	</ul>
  </div>
);

ReactDOM.render(<GroceryList groceryItems = {['water', 'juice', 'soda', 'drink']} />, document.getElementById("app"));



// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return (
//       <li>{this.props.item}</li>
//     );
//   }
// }

// var GroceryList = (props) => (
//   <div>
//     <h2>
//       Our Grocery List
//     </h2>
//     <ul>
//       {props.groceryItems.map(item => 
//         <GroceryListItem item={item} /> 
//       )}
//     </ul>
//   </div>
// );

// ReactDOM.render(<GroceryList groceryItems = {['water', 'juice', 'soda', 'drink']} />, document.getElementById("app"));




/*
var GroceryList = (props) => (
  <div>
  	<h2>
  	  My Grocery List
  	</h2>
  	<ul>
  	  {props.groceryItems.map(item => GroceryListItem({item}) )}
  	</ul>
  </div>
);


var GroceryListItem = ({item}) => (
  <li> {item} </li>
);

ReactDOM.render(<GroceryList groceryItems = {['water', 'juice', 'soda', 'drink']} />, document.getElementById("app"));


*/


/*

var App = () => (
  <div>Some cliche salutation</div>
);

ReactDOM.render(<App />, document.getElementById("app"));


var GroceryList = () => (
  <div>
  	<h2>
  	  My Grocery List
  	</h2>
  	<GroceryListItem groceryItems = {['water', 'juice', 'soda']}/>
  </div>
);

var One = () => (
  <li>
    milk
  </li>
);

var Two = () => (
  <li>
    eggs
  </li>
);

var GroceryListItem = ({groceryItems}) => (
	
  <ul>
  {groceryItems.map(function(item) {return <li>{item}</li> })}
  </ul>
);

var GroceryListItem = ({groceryItems}) => (
  <ul>
    <li>{groceryItems[0]}</li>
    <li>{groceryItems[1]}</li>
    <li>{groceryItems[2]}</li>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

*/

