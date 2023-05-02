import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='container footer py-2'>
            <div className="row">
                <div className="col">
                    <p className="mb-0 text-center">&copy;Copyrights {year}. All Rights Reserved.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="mb-0 text-center">Developed by <span id='name'>Adil Ashraf</span> </p>
                </div>
            </div>
        </div >
    )
}

export default Footer