import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Dashboard = () => {
    const [state, setState] = React.useState({

        series: [
            {
                name: "Series 1",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            }
        ],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: true
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            title: {
                text: 'Gradient Donut with custom Start-angle'
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    });


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 right_sidebar p-0">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div>
                                        <div id="chart">
                                            <ReactApexChart options={state.options} series={state.series[0].data} type="donut" width={380} />
                                        </div>
                                        <div id="html-dist"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard