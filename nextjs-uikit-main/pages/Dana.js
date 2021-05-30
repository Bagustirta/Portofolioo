import Head from "next/head"
import Image from "next/image"

export default function IndexPage() {
	return (
        <>
    
<body>
    
    <nav className="uk-padding uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="true">
    <div>
            <a className="uk-navbar-item uk-logo uk-flex-center" href=""><img src="8.png" alt="" width="50px" height="90px"></img><h4 className="uk-padding-small uk-light uk-align-center">Rp.</h4><h3 className="uk-light uk-align-center">100.000</h3></a>
        </div>
        <div className="uk-navbar-right">
            <ul className="uk-iconnav uk-navbar-nav">
               <span class="uk-light uk-margin-small-right" uk-icon="icon: mail" width="50"></span>
            </ul>
        </div>
    </nav>
    
    
    

    <div className="uk-container">
            <div className="uk-child-width-1-1 uk-grid" uk-grid="true">
                <div>
                    <div className="uk-padding uk-card uk-card-default">
                        <div className="uk-child-width-1-1 uk-child-width-1-2@m uk-grid" uk-grid="true">
                            <div>
                                <h3 className="hitam ">Pulsa</h3>
                                <h4 className="hitam ">Beli Pulsa Yuk!</h4>
                            </div>
                            <div>
                                <a href="/about"><button href="/about" className=" uk-button uk-button-danger">Kirim</button></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
       

      
     
    </body>
    </>
	);
}
