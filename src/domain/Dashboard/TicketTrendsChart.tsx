import * as React from 'react';
import { Line } from 'react-chartjs-2';

export class TicketTrendsChart extends React.Component<any, any> {
    chart: any;
    constructor(props: any) {
        super(props);
        this.state = {
            datasets: [
                {
                    label: "Hours",
                    lineTension: 0.4,
                    fill: false,
                    borderColor: "rgba(0, 170, 240, 1)",
                    data: [10, 0, 30, 50, 40, 20, 50]
                },
            ],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            legends: []
        };
        this.chart = null;
    }

    componentDidMount() {
        if (this.chart) {
            this.setState({
                legends: this.chart.chartInstance.legend.legendItems
            });
        }
    }

    render() {
        return (
            <div className="d-block width-100" style={{height: "100%"}}>
                <Line
                    ref={ref => (this.chart = ref)}
                    data={this.state}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    stepSize: 10,
                                    beginAtZero: true
                                }
                            }],
                        },
                        legend: {
                            display: false,
                            position: 'bottom'
                        }
                    }}
                />
                <div className="d-block text-center p-t-5 hours-text">Hours</div>
            </div>
        );
    }

};