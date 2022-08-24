import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const RSMobileMenu = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [homeMultipage, setHomeMultipage] = useState(false)
      const [homeOnepage, setHomeOnepage] = useState(false)
      const [about, setAbout] = useState(false)
      const [services, setServices] = useState(false)
      const [blog, setBlog] = useState(false)
      const [pages, setPages] = useState(false)
      const [servicePages, setServicePages] = useState(false)
      const [caseStudies, setCaseStudies] = useState(false)
      const [shopPages, setShopPages] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(false)
          setServices(false)
          setBlog(false)
          setPages(false)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'homeMultipage'){
          setHome(true)
          setHomeMultipage(!homeMultipage)
          setHomeOnepage(false)
          setAbout(false)
          setServices(false)
          setBlog(false)
          setPages(false)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'homeOnepage'){
          setHome(true)
          setHomeMultipage(false)
          setHomeOnepage(!homeOnepage)
          setAbout(false)
          setServices(false)
          setBlog(false)
          setPages(false)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'about'){
          setHome(false)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(!about)
          setServices(false)
          setBlog(false)
          setPages(false)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'services'){
          setHome(false)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(false)
          setServices(!services)
          setBlog(false)
          setPages(false)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'blog'){
          setHome(false)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(false)
          setServices(false)
          setBlog(!blog)
          setPages(false)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'pages'){
          setHome(false)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(false)
          setServices(false)
          setBlog(false)
          setPages(!pages)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'servicePages'){
          setHome(false)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(false)
          setServices(false)
          setBlog(false)
          setPages(true)
          setServicePages(!servicePages)
          setCaseStudies(false)
          setShopPages(false)
        }
        else if( menu == 'caseStudies'){
          setHome(false)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(false)
          setServices(false)
          setBlog(false)
          setPages(true)
          setServicePages(false)
          setCaseStudies(!caseStudies)
          setShopPages(false)
        }
        else if( menu == 'shopPages'){
          setHome(false)
          setHomeMultipage(false)
          setHomeOnepage(false)
          setAbout(false)
          setServices(false)
          setBlog(false)
          setPages(true)
          setServicePages(false)
          setCaseStudies(false)
          setShopPages(!shopPages)
        }
      }; 

      return (
      <div className="container relative">
          <div className={menuOpen ? "mobile-menu-part open": "mobile-menu-part"}>
              <div className="mobile-menu">
                <ul className="nav-menu">
                  <li className={home ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                    <a onClick={() => { openMobileMenu('home'); }} className={router.pathname == "/" ? "active-menu" : ""}>Home</a>
                    <ul className={home ? "sub-menu current-menu" : "sub-menu"}>
                      <li className={homeMultipage ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                        <Link href="#" as="#"><a onClick={() => { openMobileMenu('homeMultipage'); }}>Multipages</a></Link>
                        <ul className={homeMultipage ? "sub-menu current-menu" : "sub-menu"}>
                          <li>
                            <Link href="/" as="/">
                              <a className={router.pathname == "/" ? "active-menu" : ""}>Main Demo</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-2" as="/home-2">
                              <a className={router.pathname == "/home-2" ? "active-menu" : ""}>Digital Agency 01</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-3" as="/home-3">
                              <a className={router.pathname == "/home-3" ? "active-menu" : ""}>IT Solution 01</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-4" as="/home-4">
                              <a className={router.pathname == "/home-4" ? "active-menu" : ""}>Digital Agency 02</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-5" as="/home-5">
                              <a className={router.pathname == "/home-5" ? "active-menu" : ""}>Software Solution</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-6" as="/home-6">
                              <a className={router.pathname == "/home-6" ? "active-menu" : ""}>Data Analysis</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-7" as="/home-7">
                              <a className={router.pathname == "/home-7" ? "active-menu" : ""}>IT Solution 02</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-8" as="/home-8">
                              <a className={router.pathname == "/home-8" ? "active-menu" : ""}>Gadgets Repairs</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-9" as="/home-9">
                              <a className={router.pathname == "/home-9" ? "active-menu" : ""}>Application Testing</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-10" as="/home-10">
                              <a className={router.pathname == "/home-10" ? "active-menu" : ""}>IT Solution 03</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-11" as="/home-11">
                              <a className={router.pathname == "/home-11" ? "active-menu" : ""}>Digital Agency Dark</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-12" as="/home-12">
                              <a className={router.pathname == "/home-12" ? "active-menu" : ""}>Web Design Agency</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-13" as="/home-13">
                              <a className={router.pathname == "/home-13" ? "active-menu" : ""}>Branding Agency</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={homeOnepage ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                        <Link href="#" as="#"><a onClick={() => { openMobileMenu('homeOnepage'); }}>Onepages</a></Link>
                        <ul className={homeOnepage ? "sub-menu current-menu" : "sub-menu"}>
                          <li>
                            <Link href="/" as="/">
                              <a className={router.pathname == "/onepage-1" ? "active-menu" : ""}>Main Demo</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-2" as="/onepage-2">
                              <a className={router.pathname == "/onepage-2" ? "active-menu" : ""}>Digital Agency 01</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-3" as="/onepage-3">
                              <a className={router.pathname == "/onepage-3" ? "active-menu" : ""}>IT Solution 01</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-4" as="/onepage-4">
                              <a className={router.pathname == "/onepage-4" ? "active-menu" : ""}>Digital Agency 02</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-5" as="/onepage-5">
                              <a className={router.pathname == "/onepage-5" ? "active-menu" : ""}>Software Solution</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-6" as="/onepage-6">
                              <a className={router.pathname == "/onepage-6" ? "active-menu" : ""}>Data Analysis</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-7" as="/onepage-7">
                              <a className={router.pathname == "/onepage-7" ? "active-menu" : ""}>IT Solution 02</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-8" as="/onepage-8">
                              <a className={router.pathname == "/onepage-8" ? "active-menu" : ""}>Gadgets Repairs</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-9" as="/onepage-9">
                              <a className={router.pathname == "/onepage-9" ? "active-menu" : ""}>Application Testing</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-10" as="/onepage-10">
                              <a className={router.pathname == "/onepage-10" ? "active-menu" : ""}>IT Solution 03</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-11" as="/onepage-11">
                              <a className={router.pathname == "/onepage-11" ? "active-menu" : ""}>Digital Agency Dark</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-12" as="/onepage-12">
                              <a className={router.pathname == "/onepage-12" ? "active-menu" : ""}>Web Design Agency</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/onepage-13" as="/onepage-13">
                              <a className={router.pathname == "/onepage-13" ? "active-menu" : ""}>Branding Agency</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/about" as="/about">
                      <a className={router.pathname == "/about" ? "active-menu" : ""}>About</a>
                    </Link>
                  </li>
                  <li className={services ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                    <a href="#" onClick={() => { openMobileMenu('services'); }}>Service</a>
                    <ul className={services ? "sub-menu current-menu" : "sub-menu"}>
                      <li>
                        <Link href="/service/software-development" as="/service/software-development">
                          <a className={router.pathname == "/service/software-development" ? "active-menu" : ""}>Software Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/web-development" as="/service/web-development">
                          <a className={router.pathname == "/service/web-development" ? "active-menu" : ""}>Web Development</a>
                        </Link> 
                      </li>
                      <li>
                        <Link href="/service/analytic-solutions" as="/service/analytic-solutions">
                          <a className={router.pathname == "/service/analytic-solutions" ? "active-menu" : ""}>Analytic Solutions</a>
                        </Link> 
                      </li>
                      <li>
                        <Link href="/service/cloud-and-devops" as="/service/cloud-and-devops">
                          <a className={router.pathname == "/service/cloud-and-devops" ? "active-menu" : ""}>Cloud and DevOps</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/project-design" as="/service/project-design">
                          <a className={router.pathname == "/service/project-design" ? "active-menu" : ""}>Project Design</a>
                        </Link> 
                      </li>
                      <li>
                        <Link href="/service/data-center" as="/service/data-center">
                          <a className={router.pathname == "/service/data-center" ? "active-menu" : ""}>Data Center</a>
                        </Link> 
                      </li>
                    </ul>
                  </li>
                  <li className={pages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                    <a href="#" onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                    <ul className={pages ? "sub-menu current-menu" : "sub-menu"}>
                      <li className={servicePages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                        <Link href="#" as="#">
                          <a onClick={() => { openMobileMenu('servicePages'); }}>Services</a>
                        </Link>
                        <ul className={servicePages ? "sub-menu current-menu" : "sub-menu"}>
                          <li>
                            <Link href="/service/service-1" as="/service/service-1">
                              <a className={router.pathname == "/service/service-1" ? "active-menu" : ""}>Service 1</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/service-2" as="/service/service-2">
                              <a className={router.pathname == "/service/service-2" ? "active-menu" : ""}>Service 2</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/service-3" as="/service/service-3">
                              <a className={router.pathname == "/service/service-3" ? "active-menu" : ""}>Service 3</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/team" as="/team">
                          <a className={router.pathname == "/team" ? "active-menu" : ""}>Our Team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team/team-1" as="/team/team-1">
                          <a className={router.pathname == "/team/team-1" ? "active-menu" : ""}>Single Team</a>
                        </Link>
                      </li>
                      <li className={caseStudies ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                        <Link href="#" as="#">
                          <a onClick={() => { openMobileMenu('caseStudies'); }}>Case Studies</a>
                        </Link>
                        <ul className={caseStudies ? "sub-menu current-menu" : "sub-menu"}>
                          <li>
                            <Link href="/case-study/style-1" as="/case-study/style-1">
                              <a className={router.pathname == "/case-study/style-1" ? "active-menu" : ""}>Case Studies Style 1</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-study/style-2" as="/case-study/style-2">
                              <a className={router.pathname == "/case-study/style-2" ? "active-menu" : ""}>Case Studies Style 2</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-study/style-3" as="/case-study/style-3">
                              <a className={router.pathname == "/case-study/style-3" ? "active-menu" : ""}>Case Studies Style 3</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-study/style-4" as="/case-study/style-4">
                              <a className={router.pathname == "/case-study/style-4" ? "active-menu" : ""}>Case Studies Style 4</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-study/style-5" as="/case-study/style-5">
                              <a className={router.pathname == "/case-study/style-5" ? "active-menu" : ""}>Case Studies Style 5</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-study/style-6" as="/case-study/style-6">
                              <a className={router.pathname == "/case-study/style-6" ? "active-menu" : ""}>Case Studies Style 6</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-study/style-7" as="/case-study/style-7">
                              <a className={router.pathname == "/case-study/style-7" ? "active-menu" : ""}>Case Studies Style 7</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={shopPages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                        <Link href="#" as="#">
                          <a onClick={() => { openMobileMenu('shopPages'); }}>Shop</a>
                        </Link>
                        <ul className={shopPages ? "sub-menu current-menu" : "sub-menu"}>
                          <li>
                            <Link href="/shop" as="/shop">
                              <a className={router.pathname == "/shop" ? "active-menu" : ""}>Shop</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/item-1" as="/shop/item-1">
                              <a className={router.pathname == "/shop/item-1" ? "active-menu" : ""}>Shop Single</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/cart" as="/shop/cart">
                              <a className={router.pathname == "/shop/cart" ? "active-menu" : ""}>Cart</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/checkout" as="/shop/checkout">
                              <a className={router.pathname == "/shop/checkout" ? "active-menu" : ""}>Checkout</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/my-account" as="/shop/my-account">
                              <a className={router.pathname == "/shop/my-account" ? "active-menu" : ""}>My Account</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/pricing" as="/pricing">
                          <a className={router.pathname == "/pricing" ? "active-menu" : ""}>Pricing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq" as="/faq">
                          <a className={router.pathname == "/faq" ? "active-menu" : ""}>Faq</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={blog ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
                    <a href="#" onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                    <ul className={blog ? "sub-menu current-menu" : "sub-menu"}>
                      <li>
                        <Link href="/blog" as="/blog">
                          <a className={router.pathname == "/blog" ? "active-menu" : ""}>Blog</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/blog-post-1" as="/blog/blog-post-1">
                          <a className={router.pathname == "/blog-post-1" ? "active-menu" : ""}>Blog details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact" as="/contact">
                      <a className={router.pathname == "/contact" ? "active-menu" : ""}>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
      </div>
    )
}

export default RSMobileMenu;