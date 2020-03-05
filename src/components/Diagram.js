import React from 'react';

function Diagram() {
  return (
   <section class="page-section" id="about">
   <div class="container">

     {/* <!-- Portfolio Section Heading --> */}
     <br />
     <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>

     {/* <!-- Icon Divider --> */}
     <div class="divider-custom">
       <div class="divider-custom-line"></div>
       <div class="divider-custom-icon">
         <i class="fas fa-paw"></i>
       </div>
       <div class="divider-custom-line"></div>
     </div>
     <p class="masthead-subheading font-weight-light mb-0 ">Toto Initiative is a service that enables anyone with the desire to make a difference in the world to become a driver for positive change. Whether you are a pet shelter staff member or a good-hearted volunteer, all you really need is a smartphone to change the life of an animal in need.<br/><br/></p>
     <br />
     {/* <!-- Portfolio Grid Items --> */}
     <div class="row">
       <div class="col-12">
        <h3 class="text-left text-uppercase text-secondary mb-0">Promoters</h3>
        <hr />
       </div>

       {/* <!-- Portfolio Item 1 --> */}
       <div class="col-md-6 col-lg-4">
         <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
           <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
             <div class="portfolio-item-caption-content text-center text-white">
             </div>
           </div>
           <img class="img-fluid" src="img/about/doggyselfie.jpeg" alt="" />
           <br />
           <br />
           <div class="timeline-panel">
               <div class="timeline-heading">
                 <h4 class="text-secondary">Take a Photo</h4>
                 <div class="subheading text-muted text-left">Use our app to easily capture and upload a photo of a pet in need of a forever home.</div>
               </div>
             </div>
         </div>
       </div>

       {/* <!-- Portfolio Item 2 --> */}
       <div class="col-md-6 col-lg-4">
         <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
           <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
             <div class="portfolio-item-caption-content text-center text-white">
             </div>
           </div>
           <img class="img-fluid" src="img/about/bluephone.jpg" alt="" />
           <br />
           <br />
           <div class="timeline-panel">
               <div class="timeline-heading">
                 <h4 class="text-secondary">Apply Filters</h4>
                 <div class="subheading text-muted text-left">Select traits that best fit the pet, such as: breed, age, and observed behavioral traits.</div>
               </div>
             </div>
         </div>
       </div>

       {/* <!-- Portfolio Item 3 --> */}
       <div class="col-md-6 col-lg-4">
         <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
           <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
             <div class="portfolio-item-caption-content text-center text-white">
             </div>
           </div>
           <img class="img-fluid" src="img/about/phonewhite.jpg" alt="" />
           <br />
           <br />
           <div class="timeline-panel">
               <div class="timeline-heading">
                 <h4 class="text-secondary">Add Location</h4>
                 <div class="subheading text-muted text-left">Help us locate the shelter you are posting from or fill out our address form.</div>
               </div>
             </div>
         </div>
       </div>

     </div>

     <div class="row mt-5">
       <div class="col-12">
        <h3 class="text-left text-uppercase text-secondary mb-0">Adopters</h3>
        <hr />
       </div>

       {/* <!-- Portfolio Item 4 --> */}
       <div class="col-md-6 col-lg-4">
         <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
           <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
             <div class="portfolio-item-caption-content text-center text-white">
             </div>
           </div>
           <img class="img-fluid" src="img/about/girl1.jpeg" alt="" />
           <br />
           <br />
           <div class="timeline-panel">
               <div class="timeline-heading">
                 <h4 class="text-secondary">Filter</h4>
                 <div class="subheading text-muted text-left">Aspiring adoptive parents select desired traits, such as: "senior", "couch potato", and browse.</div>
               </div>
             </div>
         </div>
       </div>

       {/* <!-- Portfolio Item 5 --> */}
       <div class="col-md-6 col-lg-4">
         <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
           <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
             <div class="portfolio-item-caption-content text-center text-white">
             </div>
           </div>
           <img class="img-fluid" src="img/about/girl2.jpeg" alt="" />
           <br />
           <br />
           <div class="timeline-panel">
               <div class="timeline-heading">
                 <h4 class="text-secondary">Reach Out</h4>
                 <div class="subheading text-muted text-left">See the availability right away and get in touch with the shelter.</div>
               </div>
             </div>
         </div>
       </div>

       {/* <!-- Portfolio Item 6 --> */}
       <div class="col-md-6 col-lg-4">
         <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
           <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
             <div class="portfolio-item-caption-content text-center text-white">
             </div>
           </div>
           <img class="img-fluid" src="img/about/doggygoinghome.jpeg" alt="" />
           <br />
           <br />
           <div class="timeline-panel">
               <div class="timeline-heading">
                 <h4 class="text-secondary">Make It Official</h4>
                 <div class="subheading text-muted text-left">Go get 'em and give them the love and the life they deserve!</div>
               </div>
             </div>
         </div>
       </div>

     </div>
     {/* <!-- /.row --> */}

   </div>
 </section>
   
  );
}

export default Diagram; 