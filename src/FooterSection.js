import React from 'react';

export default function FooterSection() {
  return (
    // <div className='row justify-content-center bg-secondary mt-md-5 mt-3'>
    //   <div className='d-flex col-10 col-md-5 mt-md-5 mt-3 border-bottom border-2 pb-3'>
    //     <div className='px-3 px-md-5'><a href='#home' className='text-white-50'>Home</a></div>
    //     <div className='px-3 px-md-5'><a href='#about' className='text-white-50'>About</a></div>
    //     <div className='px-3 px-md-5'><a href='#services' className='text-white-50'>Services</a></div>
    //     <div className='px-3 px-md-5'><a href='#' className='text-white-50'>FQA</a></div>
    //   </div>
    //   <div className='col-12 d-flex justify-content-center m-3'>
    //       <h4 className='text-white-50'>
    //         © 2024 Company, Inc
    //       </h4>
    //   </div>
    // </div>

    <div className='row'>
      <div class="container my-5">

         <footer class="text-center text-lg-start text-white bg-secondary">
            <section class="d-flex justify-content-between p-4 " style={{ background:"#e45416" }}>
            <div class="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Company name</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"/>
                  <p> Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur    adipisicingelit.
                  </p>
                </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold">Products</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"/>
                <p>
                <a href="#!" class="text-white">MDBootstrap</a>
                </p>
                <p>
                <a href="#!" class="text-white">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" class="text-white">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Bootstrap Angular</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"/>
                <p>
                  <a href="#!" class="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Help</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    />
                <p><i class="fas fa-home mr-3"></i> Myanmar</p>
                <p><i class="fas fa-envelope mr-3"></i> example@example.com</p>
                <p><i class="fas fa-phone mr-3"></i> +95 9123 123 123</p>
                <p><i class="fas fa-print mr-3"></i> +95 9345 456 687</p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        </footer>
    </div>
  </div>
  )
}
