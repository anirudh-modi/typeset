/**
 * Created by anirudhmodi on 28/05/18.
 */
import AppHeaderComponent from './AppHeaderComponent';
import PlanListComponent from './PlanListComponent';
import React from 'react';

export default class RightAppComponent extends React.Component
{
    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
        return(
            <div className="rightAppContainer">
                <AppHeaderComponent />
                <div className="rightAppLoaderComponent">
                    <PlanListComponent plans={this.props.plans}/>
                </div>
            </div>
        )
    }
}
