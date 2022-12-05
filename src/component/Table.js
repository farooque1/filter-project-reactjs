import React from 'react'

function Table() {
    return (
        <section>
            <div className='container my-5'>
            <h5>Best Doctors for Hair Treatment in Mumbai</h5>
            <div className='row '>
                <div className='col-lg-6'>
                <table class="table table-bordered">
							<thead>
								<tr class="table-active">
									<th>Doctor's Name</th>
									<th>Clinic Fees</th>
									<th>Lybrate Rating</th>
								</tr>
							</thead>
							<tbody>
								<tr>
										<td>Dr.Sanjay Fernandes</td>
										<td>
											<span>₹</span>
											1000</td>
										<td>
											<span>86</span>%</td>
									</tr>
								<tr>
										<td>Dr.Jeetendra Khatuja</td>
										<td>
											<span>₹</span>
											1000</td>
										<td>
											<span>93</span>%</td>
									</tr>
								<tr>
										<td>Dr.Rameshwar Madhukar Rao Gutte</td>
										<td>
											<span>₹</span>
											500</td>
										<td>
											<span>93</span>%</td>
									</tr>
								<tr>
										<td>Dr.Ganesh Avhad</td>
										<td>
											<span>₹</span>
											500</td>
										<td>
											<span>91</span>%</td>
									</tr>
								<tr>
										<td>Dr.Anil Thombare</td>
										<td>
											<span>₹</span>
											1000</td>
										<td>
											<span>NA</span></td>
									</tr>
								<tr>
										<td>Dr.Shakti Raj</td>
										<td>
											<span>₹</span>
											500</td>
										<td>
											<span>85</span>%</td>
									</tr>
								<tr>
										<td>Dr.Ruchi A. Gupta</td>
										<td>
											<span>₹</span>
											700</td>
										<td>
											<span>93</span>%</td>
									</tr>
								<tr>
										<td>Batra'S Healthcare</td>
										<td>
											<span>₹</span>
											200</td>
										<td>
											<span>NA</span></td>
									</tr>
								<tr>
										<td>Dr.Shashikant G More</td>
										<td>
											<span>₹</span>
											500</td>
										<td>
											<span>NA</span></td>
									</tr>
								<tr>
										<td>Dr.Sushrut Save</td>
										<td>
											<span>₹</span>
											500</td>
										<td>
											<span>90</span>%</td>
									</tr>
								</tbody>
						</table>
                </div>
                </div>
            </div>
            
        </section>

    )
}

export default Table