import Head from "next/head"
import Image from "next/image"

export default function IndexPage() {
    return (
        <>
    
<body>

    <nav className="uk-light uk-padding uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="true">
        <div className="uk-light uk-navbar-center">
            <ul className="uk-light uk-iconnav uk-navbar-nav">
                <li><a href="/"><span class="uk-margin-small-right" uk-icon="icon: home"></span>Home</a></li>
                <li><a href="about"><span class="uk-margin-small-right" uk-icon="icon: info"></span>About</a></li>
                <li><a href="product"><span class="uk-margin-small-right" uk-icon="icon: cart"></span>Product</a></li>
            </ul>
        </div>
    </nav>

    <div className="uk-container">
    <div className=" uk-child-width-1-2@m uk-child-width-1-1 uk-grid" uk-grid="true">
        <div>

            <div className="uk-flex uk-flex-middle uk-inline">
                <img src="6.jpg" alt=""></img>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                        <h2>General Information</h2>
                        <p><span class="uk-margin-small-right" uk-icon="icon: user"></span>Name : Bagus Tirta</p>
                        <p><span class="uk-margin-small-right" uk-icon="icon: location"></span>location : Bali</p>
                        <p><span class="uk-margin-small-right" uk-icon="icon: calendar"></span>Date of birth :
                            04-10-2004</p>
                    </div>
            </div>

        </div>
        <div>
                <span class="uk-light uk-padding uk-text-top">
                    <h3>Description :</h3>
                </span>
                <span class="uk-light uk-padding uk-text-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.</span>
                <span class="uk-light uk-padding uk-text-top">
                    <p>My Social Media :</p>
                </span>
                <a href="https://www.instagram.com/bagustirta_" class="uk-icon-button uk-margin-small-right"
                    uk-icon="instagram"></a>
                <a href="https://www.facebook.com?Bagus Tirta" class="uk-icon-button  uk-margin-small-right"
                    uk-icon="facebook"></a>
                <a href="https://api.whatsapp.com/send?phone=+6281913842931&text=Nomor Wa Gua Nih Boss!!"
                    class="uk-icon-button" uk-icon="whatsapp"></a>
        </div>
    </div>
</div>

</body>

    </>
    );
}
