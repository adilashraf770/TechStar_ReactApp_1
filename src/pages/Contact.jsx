import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="row ">
                <div class="col-12 mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" />
                </div>
                <div class="col-12 mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                </div>
                <div class="col-12 mb-3">
                    <label for="Message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" placeholder="Message" />
                </div>
                <div class="col-12 mb-3">
                    <button className="btn btn-primary w-50">Send </button>
                </div>
            </div>
        </div>
    )
}

export default Contact