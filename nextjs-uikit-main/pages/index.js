import Head from "next/head"
import Image from "next/image"

export default function IndexPage() {
	return (
        <>
    
<body>
    
    <nav className="uk-padding uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="true">
        <div className="uk-light uk-navbar-center">
            <ul className="uk-light uk-iconnav uk-navbar-nav">
                <li><a href="/"><span class="uk-margin-small-right" uk-icon="icon: home"></span>Home</a></li>
                <li><a href="about"><span class="uk-margin-small-right" uk-icon="icon: info"></span>About</a></li>
                <li><a href="product"><span class="uk-margin-small-right" uk-icon="icon: cart"></span>Product</a></li>
            </ul>
        </div>
    </nav>
    
    <div className="uk-align-center uk-text-center uk-flex-middle uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h3 className="uk-h3 uk-card-titles">--Welcome--</h3>
        <p className="uk-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="uk-padding uk-margin uk-flex uk-flex-center" uk-margin="true">
        <a href="/product"><button href="/product" class="uk-button uk-button-danger uk-align-left">Product</button></a>
            
        <a href="/about"><button href="/about" class="uk-button uk-button-danger uk-align-left">About Us</button></a>
        </p>

    </div>
     
    </body>
    </>
	);
}
