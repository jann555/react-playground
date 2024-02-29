import { Component } from "react";

class Cardlist extends Component {

    render(){
        console.log(this.props.monsters)
        console.log('Render from CardList')
        const {monsters} = this.props;
        return (
        <div>
           { monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1> 
           ))}
        </div>
            );
    }
}

export default Cardlist;