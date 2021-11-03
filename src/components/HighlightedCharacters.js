import React from 'react';
import '../App.css'
class HighlightedCharacters extends React.Component {

    render(){
        var locations = Object.keys(this.props.charactersLocation);
        locations.sort(function(x,y) {return x[1] - y[1]})
        var counts = Object.keys(this.props.charactersCount).map( key => [key, this.props.charactersCount[key]])
        counts.sort(function(x,y) {return y[1] - x[1]})
        if(counts.length > 5){
            counts = counts.slice(0, 5);
        }
        counts = counts.map(counts => counts[0])
        return (<div> {locations.map((key) => <li className={counts.includes(key) ? "highlighted" : ""}> {key} : {this.props.charactersCount[key]} </li>)} </div>)
    
        
    }
}

export default HighlightedCharacters;