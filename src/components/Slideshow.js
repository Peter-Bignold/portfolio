import React from 'react';

import '../styles/style_text.css';
import '../styles/style_button.css';
import '../styles/style_container.css';
import '../styles/style_slideshow.css';
import '../styles/style_anims.css';

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.slides = [
            "bmw1",
            "harley1",
            "mclaren1",
            "ninja1",
            "ferrari1",
            "mazda1",
            "civic1",
            "stingray1"
        ];
        this.captions = [
            "BMW E30 M3",
            "Harley Davidson Fatboy",
            "Mclaren MP4-6",
            "Kawasaki Ninja",
            "Ferrari 330-P4",
            "Maxda RX-7",
            "Honda Civic Si",
            "Chevrolet Corvette"
        ];
        this.state = {
            index: 0
        };
    }

    setSlide(n){
        if (n > this.slides.length - 1) n = 0;
        else if (n < 0) n = this.slides.length - 1;

        this.setState({
            index: n
        });

        let dots = document.getElementsByClassName("slideshow_dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            if (dots[i].id === n.toString()){
                dots[i].className += " active";
            }
        }
    }

    render() { return (
        <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%"}}>
            <div className="slideshow_container">
                <div className="slideshow_slide">
                    <img className="slideshow_img anim_fadeInHalf" alt="Gallery" src={require(`../images/artwork/${this.slides[this.state.index]}.jpg`)}></img>
                    <div class="caption"> {this.captions[this.state.index]} </div>
                </div>
                <div class="prev" onClick={() => this.setSlide(this.state.index - 1)}>&#10094;</div>
                <div class="next" onClick={() => this.setSlide(this.state.index + 1)}>&#10095;</div>
            </div>
            <div class="flex_MH" style={{marginTop: "20px"}}>
                <span class="slideshow_dot active" id="0" onClick={() => this.setSlide(0)}></span>
                <span class="slideshow_dot" id="1" onClick={() => this.setSlide(1)}></span>
                <span class="slideshow_dot" id="2" onClick={() => this.setSlide(2)}></span>
                <span class="slideshow_dot" id="3" onClick={() => this.setSlide(3)}></span>
                <span class="slideshow_dot" id="4" onClick={() => this.setSlide(4)}></span>
                <span class="slideshow_dot" id="5" onClick={() => this.setSlide(5)}></span>
                <span class="slideshow_dot" id="6" onClick={() => this.setSlide(6)}></span>
                <span class="slideshow_dot" id="7" onClick={() => this.setSlide(7)}></span>
            </div>
        </div>
    )}
}

export default Slideshow;