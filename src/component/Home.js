import React from 'react'
import Filter from './Filter';
import Tips from './Tips';
import Main from './Main';

function Home() {
    return (
        <section>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 col-md-4'>
                    <Filter />
                </div>
                <div className='col-lg-6 col-md-8'>
                    <Main />
                </div>
                <div className='col-lg-3 col-md-12'>
                    <Tips />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Home