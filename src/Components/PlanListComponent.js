/**
 * Created by anirudhmodi on 28/05/18.
 */
import React from 'react';
import PlanCard from './PlanCard';

export default class PlanListComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            selectedPlan:''
        }
    }

    handleOnClick = (planToSet) =>
    {
        if(this.state.selectedPlan!==planToSet)
        {
            this.setState({
                selectedPlan:planToSet
            });
        }
    }

    getPlanList()
    {
        return this.props.plans.map(plan => <PlanCard {...plan} key={plan.planId} selectedPlan={this.state.selectedPlan} handleOnClick={this.handleOnClick}/>);
    }

    getSelectedPlanOffers()
    {
        if(this.state.selectedPlan)
        {
            let selectPlanDetail = this.props.plans.filter(plan => plan.planId==this.state.selectedPlan);

            if(selectPlanDetail && selectPlanDetail.length && selectPlanDetail[0].offer)
            {
                let planSel = selectPlanDetail[0];

                let offerPrice = 0;

                let offerInDiscount = null;

                if(planSel.offer.type==1)
                {
                    offerPrice = planSel.offer.value;
                }
                else if(planSel.price)
                {
                    offerPrice = planSel.price - (planSel.price*planSel.offer.value/100);

                    offerInDiscount = <div>{planSel.offer.value}% off on your original price</div>
                }

                return (<div className="offer">
                    Offer for {planSel.name}
                    <div>{planSel.currency}{offerPrice}</div>
                    {offerInDiscount}
                </div>)
            }

            return null

        }

        return null
    }

    render()
    {
        return(
            <div>
                <div className="planListContainer">
                    {this.getPlanList()}
                </div>
                {this.getSelectedPlanOffers()}
            </div>)
    }
}
