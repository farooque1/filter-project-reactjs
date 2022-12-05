import React, { useEffect, useState } from 'react'
import data from '../data';


function Main() {
    const [info ,setInfo]=useState([]);
    useEffect(()=>{
        setInfo(data);
    },[])
    
    return (
        <section>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                {
                        info.map((infos,key)=>
                        
                <div className="card main">
                <div class="row">
                    <div class="col-md-2">
                        <img src={infos.img} class="img-fluid rounded-circle p-1" width="100%" alt="..." />
                    </div>
                    <div class="col-md-5">
                        <div class="card-body">
                            <h5 class="card-title">{infos.Drname}</h5>
                            <p class="card-text">{infos.Education}</p>
                            <p class="card-text"><small class="text-muted">{infos.address} <br /><b>{infos.city}</b></small></p>
                            {/* <p class="card-text"><small class="text-muted">{infos.city}</small></p> */}
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body" style={{fontWeight:'500'}}>
                            <p class="card-title"><i class="fa fa-heart fa-1x" aria-hidden="true"></i> {infos.rating} Ratings</p>
                            <p class="card-title"><i class="fa fa-suitcase fa-1x" aria-hidden="true"></i> {infos.experience} Year Experience</p>
                            <p class="card-title"><i class="fa fa-money fa-1x" aria-hidden="true"></i> Rs.{infos.fees} at Clinic</p>
                            <p class="card-title"><i class="fa fa-file-text fa-1x" aria-hidden="true"></i> {infos.rating} Feedback(s)</p>
                        </div>
                    </div>
                    {/* <div class="card-footer">Footer</div> */}
                </div>
                <div class="card-footer">
                       <div className='row'>
                        <div className='col-lg-4'>
                            <h5><i class="fa fa-phone fa-1x" aria-hidden="true"></i> Call Doctor</h5>
                        </div>

                        <div className='col-lg-4'>
                            <h5><i class="fa fa-comments fa-1x" aria-hidden="true"></i> Send Enquire</h5>
                        </div>

                        <div className='col-lg-4 bg-success text-white'>
                            <h5>Book Appointment <span>No Booking Fee</span></h5>
                        </div>

                        </div> 
                </div>
            </div>  
                        )
                    }

            </div>
            </div>
        </section>
    )
}

export default Main