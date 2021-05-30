        import Head from "next/head"
        import Image from "next/image"

        export default function IndexPage() {
            return (
                <>
            
        <body>

            <nav className=" uk-padding uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="true">
                <div className=" uk-navbar-center">
                    <ul className=" uk-iconnav uk-navbar-nav">
                        <li><a href="/"><span className="uk-margin-small-right" uk-icon="icon: home"></span>Home</a></li>
                        <li><a href="/"><span className="uk-margin-small-right" uk-icon="icon: info"></span>About</a></li>
                        <li><a href="product"><span className="uk-margin-small-right" uk-icon="icon: cart"></span>Product</a></li>
                    </ul>
                </div>
            </nav>

            <div className="uk-container">
            <div className=" uk-child-width-1-3@m uk-child-width-1-2 uk-child-width-1-1 uk-grid" uk-grid="true">
                <div>

                    <div className="uk-position-relative uk-slideshow" uk-slideshow="animation: fade">

                        <ul className="uk-slideshow-items">
                            <li className="uk-flex uk-flex-center">
                                <img src="2.jpg" alt="" width="300" height="350" uk-cover></img>
                            </li>
                            <li className="uk-flex uk-flex-center">
                                <img src="3.jpg" alt="" width="300" height="350" uk-cover></img>
                            </li>
                            <li className="uk-flex uk-flex-center">
                                <img src="4.jpg" alt="" width="300" height="350" uk-cover></img>
                            </li>
                        </ul>
                    
                        <div className="uk-position-bottom-center thumbslide">
                            <ul className="uk-thumbnav">
                                <li uk-slideshow-item="0"><a href="#"><img src="2.jpg" width="60" alt=""></img></a></li>
                                <li uk-slideshow-item="1"><a href="#"><img src="3.jpg" width="60" alt=""></img></a></li>
                                <li uk-slideshow-item="2"><a href="#"><img src="4.jpg" width="60" alt=""></img></a></li>
                            </ul>
                        </div>    

                    </div>

                </div>
                <div>
                    <p className="">Laptop Lenovo ThinkPad X100e - 11.6" -AMD Athlon Neo - Second Termurah - 4 gb, HDD 160GB</p>
                    <div className="auto">
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                    <h5 className="">Rp. 1.200.000</h5>
                    
                    
                <a href="/product1"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                    
                    
                </div>

                <fieldset>
                    <h3 className="uk-card-title">Pilih Varian</h3>
                <div className="uk-grid" uk-grid="true">

                    <div className=" uk-margin-left ">
                        <div className="uk-margin">
                            <select className="uk-select uk-form-width-smalll" type="text" placeholder="Pilih Warna"></select>
                        </div>
                        <div className="uk-margin">
                            <select className="uk-select uk-form-width-smalll" type="email" placeholder="Masukkan Email"></select>
                        </div>
                        <div>
                            <button className="uk-button uk-button-default">Send</button>
                        </div>

                    </div>
                </div>
                </fieldset>

            </div>
        </div>
        

        </body>
        
            </>
            );
        }
