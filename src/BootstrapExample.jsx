import react from "react";

export default function BootstrapExample(){
  const data=[
    {id:1, name:"product1",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p1.jpg" },
    {id:2, name:"product2",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p2.jpg" },
    {id:3, name:"product3",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p3.jpg" },
    {id:4, name:"product4",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p4.jpg" },
    {id:5, name:"product5",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p5.jpg" },
    {id:6, name:"product6",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p6.jpg" },
    {id:7, name:"product7",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p7.jpg" },
    {id:8, name:"product8",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p8.jpg" },
    {id:9, name:"product9",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p9.jpg" },
    {id:10, name:"product10",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p10.jpg" },
    {id:11, name:"product11",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p11.jpg" },
    {id:12, name:"product12",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p12.jpg" },
    {id:13, name:"product13",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p13.jpg" },
    {id:14,name:"product14",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p14.jpg" },
    {id:15,name:"product15",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p15.jpg" },
    {id:16, name:"product16",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p16.jpg" },
    {id:17, name:"product17",baseprice:2500,discount:50,finalprice:1250,pic:"/images/p17.jpg" },


  ]
    return(
        <>
        <nav className="navbar navbar-expand-lg  background">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">E-Commerce</a>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light" href="#">Shope</a>
        </li> <li className="nav-item">
          <a className="nav-link  text-light" href="#">ContactUs</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Service</a></li>
            <li><a className="dropdown-item" href="#">Features</a></li>
            <li><a className="dropdown-item" href="#">Testimonial</a></li>
            <li><a className="dropdown-item" href="#">Shipping Terms</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/banner1.jpg" height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/banner2.jpg"height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/banner3.jpg"height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/banner4.jpg"height={500} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/banner5.jpg" height={500} class="d-block w-100" alt="..."/>
    </div> 
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <div className="container-fluid">
      <h5 className="background text-light text-center  p-2 my-2">Lets Order</h5>
      </div>
     <div className="row">
     {data.map((item=>{
      return <div key={item.id}  className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
        <div class="card">
  <img src={item.pic} height={200} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text"> <del className="text-danger">&#8377;{item.baseprice}</del>&#8377;{item.finalprice} <sup className="text-success">{item.discount}%of</sup></p>
    <a href="#" class="btn btn-primary"><i className="bi bi-cart  fs-5"></i>Add To Card</a>
  </div>
</div>
      </div>
     }))}
     </div>

     <div className="row my-3">
        <div className="col-md-6">
          <img src="/images/banner0.jpg "  width={650} className="img-fluid-rounded" alt=""/>
        </div>
        <div className="col-md-6">
          <h5 className="background text-center text-light p-2 my-2"> Do Have Any Query</h5>
            <form action={''}>
          <div className="md -3">
            <label>Name*</label>
            <input type="text" name="name" id="name" placeholder="Enter The Name" className="form-control border-3 border-primary"/>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
                <label>Email*</label>
                <input type="email" name="email" placeholder="Email" className="form-control border-3 border-primary" />
            </div>
            <div className="col-md-6 mb-3">
                <label>Phone*</label>
                <input type="tel" name="phone" placeholder="Mobile" className="form-control border-3 border-primary" />
            </div>
          </div>
          <div className="md -3">
            <label>Subject</label>
            <input type="text" name="sub"  placeholder="Subject" className="form-control border-3 border-primary"/>
          </div>
          <div className="md -3">
            <label>Comment*</label>
            <textarea name="msg" rows={3} placeholder="Comment here" className="form-control border-3 border-primary"></textarea>

          </div>
          <button type="submit" className=" background btn btn-secondary  my-2 text-center text-light w-100 border-none">Submit</button>

          </form>
        </div>
     </div>

         </>
    )
}