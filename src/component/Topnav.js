import React from 'react'
import logo from '../img/logo.png';

function Topnav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a  href="#"><img src={logo} class="navbar-brand" style={{width:'150px'}} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex">
                            <div className=''>
                                <ul class="navbar-nav" style={{ fontSize: '20px', fontWeight: '600' }}>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Shield360</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Ask a Question</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Consult Online</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Contact</a>
                                    </li>
                                </ul>


                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topnav