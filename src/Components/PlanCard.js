/**
 * Created by anirudhmodi on 28/05/18.
 */
import React from 'react';

export default class PlanCard extends React.Component
{

    shouldComponentUpdate(nextProps)
    {
        if(nextProps.selectedPlan!==this.props.selectedPlan)
        {
            return true;
        }

        return false;
    }

    handleOnClickPlan = () =>
    {
        this.props.handleOnClick(this.props.planId);
    }

    render()
    {
        let {name, currency, price, selectedPlan, planId, handleOnClick} = this.props;

        return(
            <div className= {selectedPlan==planId?'planCardContainer selectedPlan':'planCardContainer'} onClick={this.handleOnClickPlan}>
                <div>{name}</div>
                <div>{currency}{price}</div>
            </div>
        )
    }
}
