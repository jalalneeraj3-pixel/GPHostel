import React from 'react'
import ReactApexChart from 'react-apexcharts';
import Registration from '../Component/Registration';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 right_sidebar p-0">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div>
                                        {/* <div id="chart">
                                            <ReactApexChart options={state.options} series={state.series[0].data} type="donut" width={380} />
                                        </div> */}
                                        <div id="html-dist"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <link rel="stylesheet" href="Registration" />
                </div>
                <div className="row">
                    <div className="col-lg-6 bg-light">
                        <img src="https://gpbhimtal.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-15-at-11.07.43-AM-r0c309ft49eklgzhww7jsc7o11bg34s2ooj6zjq5ww.jpeg" alt="" height={600} width={700}  />
                    </div>
                    <div className="col-lg-6 bg-light">
                       <p>
                         Welcome to Government Polytechnic, Bhimtal (Nainital)
                        It was established in the year 2014 for bringing about industrial and technological development to the region. It was established with just one branch of Civil Engineering.
                        </p><br/><br/>  

                        Bhimtal, named after the mythological Bhima of the Mahabharat, is close to Nainital in Uttarakhand. The town has come up around one of a group of many natural lakes in Nainital, the Lake District in the state. The small green town at an altitude of 1370 meters in the Kumaon Hills in the lesser Himalayas, is at a lower elevation than Nainital, but is a pleasant all the year round destination. In summer it can get hot and the winters are not as cold at the hill stations. As it is closer to Delhi than Nainital, it is fast becoming a popular weekend getaway from the city.
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://gpbhimtal.org.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-03-at-2.30.32-PM-1024x906.jpeg" alt="" height={400} width={450}/>
                        
                    </div>
                    <div className="col-lg-6">
                        <img src="https://gpbhimtal.org.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-03-at-2.30.32-PM-1024x906.jpeg" alt=""  height={400} width={450} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard