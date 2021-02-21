import React, { Component } from 'react';

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  
        renderItems =()=>{
            const data = this.state.userData;
            const mapRows = data.map((item) => {
                return <React.Fragment key={item.id}>
                    <li className="list-elements">
                        {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                   </li>
                </React.Fragment>
            });
            return mapRows;
        };

        renderItemsBasedOnUserType = () =>{
            const data = this.state.userData;
            const mapRows =data.filter(
                item=>item.user_type=="Designer")
                .map(item=>{
                return <React.Fragment key={item.id}>
                    <li className="list-elements">
                        {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                   </li>
                </React.Fragment>
            });
            return mapRows;
        }

        renderItemsStartingJ = () =>{
            const data = this.state.userData;
            const mapRows =data.filter(
                item=>item.name[0]=='J')
                .map(item=>{
                return <React.Fragment key={item.id}>
                    <li className="list-elements">
                        {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                   </li>
                </React.Fragment>
            });
            return mapRows;
        }

        renderItemsBasedOnAge= ()=>{
            const data = this.state.userData;
            const mapRows =data.filter(
                item=>item.age>28 && item.age <=50)
                .map(item=>{
                return <React.Fragment key={item.id}>
                    <li className="list-elements">
                        {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                        <span>Id: {item.id} </span>
                        <span>Name : {item.name} </span>
                        <span>UserType: {item.user_type} </span>
                   </li>
                </React.Fragment>
            });
            return mapRows;
        }

        renderItemsBasedOnExperience = () =>{
            const data = this.state.userData;
            let sum=data.filter(item=>item.user_type=="Designer").reduce((total,item)=>
                total+=item.years,0
            );
               
            return <React.Fragment>
                {sum}
            </React.Fragment>;
        }

    render() {
        return (
            <React.Fragment>
                <h1>Display all items</h1>
                <div>
                    <ul>
                        {this.renderItems()}
                     </ul>
                </div>
                <h1>Display Based On UserType</h1>
                <div>
                    <ul>
                        {this.renderItemsBasedOnUserType()}
                    </ul>
                </div>
                <h1>Filter All data starting with J</h1>
                <div>
                    <ul>
                        {this.renderItemsStartingJ()}
                    </ul>
                </div>
                <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
                <div>
                    <ul>
                        {this.renderItemsBasedOnAge()}
                    </ul>
                </div>
                <h1>Find the total years of designers</h1>
                <div>
                    <ul>
                        {this.renderItemsBasedOnExperience()}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}