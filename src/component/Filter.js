import data from '../data';
import React, { useEffect, useState } from 'react'

function Filter() {

    const [cat, setCat] = useState([]);
    console.log(cat)

   const filteraddress= cat.map((item) => item.address);
   const filtergender= cat.map((item) => item.gender);

   const faddress = ["All",...new Set(filteraddress)];
    const fgender = ["All", ...new Set(filtergender)];

    const [address, setAddress] = useState([]);
    console.log(address)

    useEffect(() => {
        setCat(data);        
        setAddress(address)
    }, [])




    return (

        <section>
            <div className='container-fluid'>
                <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow mt-5">
                    {/* <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a> */}
                    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation" 
                    style={{color: 'black',
                        /* float: right; */
                        opacity: 0.8,
                        right: 50,
                        bottom: 0,
                        top:-170}}>
                        <i class="fa fa-filter fa-2x" aria-hidden="true"></i>
                    </button>
                    {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <div class="navbar-nav">
                        <div class="nav-item text-nowrap">
                            <a class="nav-link px-3" href="#">Sign out</a>
                        </div>
                    </div> */}

                </header>

                <div className='container-fluid'>
                    <div class="row">
                        <nav id="sidebarMenu" class="col-md-12 col-lg-12 col-sm-12 d-md-block bg-light sidebar collapse">
                            <div class="position-sticky pt-3">
                                <h5 className='p-2'>Filter</h5>
                                <hr />
                                <ul class="nav flex-column">
                                    <p>SPECIALIZATION</p>
                                    {
                                        cat.map((cats, key) =>
                                            <li class="nav-item">
                                                <input type='checkbox' class="form-check-input me-2" />
                                                <label class="form-check-label" for="exampleCheck1">{cats.cat}</label>
                                            </li>
                                        )}

                                </ul>
                                <hr />
                                <p>LOCALITY</p>

                                <ul class="nav flex-column mb-2">
                                    {
                                        faddress.map((cats, key) =>

                                            <li class="nav-item">
                                                <input type='checkbox' class="form-check-input me-2" />
                                                <label class="form-check-label" for="exampleCheck1">{cats}</label>
                                            </li>
                                        )}
                                </ul>

                                <hr />
                                <p>GENDER</p>

                                <ul class="nav flex-column mb-2">
                                    {
                                        fgender.map((cats, key) =>
                                            <li class="nav-item">
                                                <input type='checkbox' class="form-check-input me-2" />
                                                <label class="form-check-label" for="exampleCheck1">{cats}</label>
                                            </li>
                                        )}
                                </ul>


                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Filter;