import React from "react";
import './Home.css';
import HandlerCategory from "./HandlerCategory";

const Gallery = () => {
    return(
        <div>
            <div className="wrapper">
                <div className="modal">
                    <div className="modal-content">
                        <h3>I am a modal</h3>
                    </div>
                </div>
            </div>
            
        <div 
         className="ui raised very padded text  segment"
         style={{marginTop: '80px'}}
        
        >
            <h1 className="ui header">Our Gallery</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo a dignissim volutpat.</h4>
            <HandlerCategory />
        
        </div>
        <footer class="bg-dark py-4 mt-auto">
    <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Photo Gallery 2023</div></div>
            <div class="col-auto">
                <a class="link-light small" href="#!">Privacy</a>
                <span class="text-white mx-1">&middot;</span>
                <a class="link-light small" href="#!">Terms</a>
                <span class="text-white mx-1">&middot;</span>
                <a class="link-light small" href="#!">Contact</a>
            </div>
        </div>
    </div>
</footer>
        </div>
        
    )
}

export default Gallery;