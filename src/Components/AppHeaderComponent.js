/**
 * Created by anirudhmodi on 28/05/18.
 */
import React from 'react';

export default class AppHeaderComponent extends React.Component
{
    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
        return(<div className="appHeader"></div>)
    }
}