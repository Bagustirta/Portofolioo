import Head from "next/head"
import Image from "next/image"

export default function IndexPage() {
	return (
        <>
    
    <body>
    
        <nav className="uk-padding uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="true">
            <div className="uk-light uk-navbar-center">
                <ul className="uk-light uk-iconnav uk-navbar-nav">
                    <li><a href="/"><span className="uk-margin-small-right uk-icon" uk-icon="icon: home"></span>Home</a></li>
                    <li><a href="about"><span className="uk-margin-small-right uk-icon" uk-icon="icon: info"></span>About</a></li>
                    <li><a href="product"><span className="uk-margin-small-right uk-icon" uk-icon="icon: cart"></span>Product</a></li>
                </ul>
            </div>
        </nav>

        <div className="uk-container">
            <div className="uk-grid uk-grid-stack uk-padding" uk-grid="true">
                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h4 className="uk-card-title">Nama Produk</h4>
                                <p>Keterangan: ...</p>
                                    <a href="/product1"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/product1" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="6.jpg" alt=""></img>
                        </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Nama Produk</h3>
                                <p>Keterangan: ...</p>
                                    <a href="/product"><button href="/product" className="uk-button uk-ijo uk-align-left">Buy</button></a>
                            </div>
                    </div>
                </div>

            </div>        
        </div>

    </body>
        </>
	    );
    }
