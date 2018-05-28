const rootElement = document.getElementById('app');

import React from 'react';
import {render} from 'react-dom';
import {getItemFromLocalStorage} from './initializeApp';
import RightAppComponent from './Components/RightAppComponent';
import SidebarComponent from './Components/SidebarComponent';

let plans = getItemFromLocalStorage('plans');

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            plans:props.plans
        }
    }

    render()
    {
        return(
            <div className="appContainer">
                <SidebarComponent />
                <RightAppComponent plans={this.state.plans}/>
            </div>
        )
    }
}


render(<App plans={plans}/>,rootElement);
