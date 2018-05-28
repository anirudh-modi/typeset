/**
 * Created by anirudhmodi on 28/05/18.
 */
import React from 'react';

export default class SidebarComponent extends React.Component
{
    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
        return(<div className="appSidebar">
            Plans & pricing
        </div>)
    }
}
