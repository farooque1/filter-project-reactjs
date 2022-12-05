import React, { useEffect, useState } from 'react'
import data from '../tip';

function Tips() {

    const [Tip, setTip] = useState([]);

    useEffect(() => {

        setTip(data);

    }, [])


    return (
        <section>
            <div className='container mt-5'>

                <div class="card ">
                    <h5 class="card-title text-center p-2">TOP HEALTH TIPS</h5>
                    <hr className='mx-5' />
                    {
                            Tip.map((tips, key) =>
                        
                    <div class="row g-0" key={tips.id}>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{tips.title}</h5>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={tips.img} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <hr className='my-2' />
                    </div>
                    
                    )}
                </div>

            </div>
        </section>
    )
}

export default Tips