import React from 'react';
import blog from './blog.svg';


export default function ServicesSection() {
  return (
    <div className='row' id="services">
        <div className=''>
            <h2 className='text-center my-3'>Services</h2>
        </div>
        <div className='row'>
            <div className='col-md-4'>
                <div className="card">
                    <img src={blog} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-outline-danger">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card">
                    <img src={blog} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-outline-danger">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card">
                    <img src={blog} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-outline-danger">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

        
    </div>

  )
}
