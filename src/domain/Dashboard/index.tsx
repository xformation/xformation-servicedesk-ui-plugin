import * as React from 'react';
export class Dashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const state = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                This is deshboard
            </div>
        );
    }
};