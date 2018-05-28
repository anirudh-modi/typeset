/**
 * Created by anirudhmodi on 28/05/18.
 */

let plans = getItemFromLocalStorage('plans');

if(!plans)
{
    let planToStore = [
        {
            'name':'Bronze',
            'planId':'bps',
            'price':'20',
            'currency':'$',
            'offer':{
                'value':'10',
                /**
                 * 1 For exact value,
                 * 2 For discount in %
                 */
                'type':1
            }
        },
        {
            'name':'Silver',
            'planId':'sps',
            'price':'100',
            'currency':'$',
            'offer':{
                'value':'30',
                /**
                 * 1 For exact value,
                 * 2 For discount in %
                 */
                'type':2
            }
        },
        {
            'name':'Gold',
            'planId':'gps',
            'price':'200',
            'currency':'$'
        }
    ];

    setItemInLocalStorage('plans',planToStore)
}

export function getItemFromLocalStorage(key)
{
    return JSON.parse(localStorage.getItem(key));
}

export function setItemInLocalStorage(key,value)
{
    return (localStorage.setItem(key,JSON.stringify(value)));
}
