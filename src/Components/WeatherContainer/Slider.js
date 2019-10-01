import React from "react";
import "../../scss/main.css";
import slider2 from "react-slick";



export default class Slider extends React.Component {

    constructor(props){
        super();
        this.state= {
            images:props.images,
            currentImgIndex:0,// текущий индекс
            isCycleMode: false,
            canGoPrev: false,
            canGoNext: true,
        }
    }
    nextSliderHandler=(e)=> {
        let newIndex=this.state.currentImgIndex;
        if (e.currentTarget.dataset.direction==='next'){
            if(newIndex<this.state.images.length-1) {
                newIndex = this.state.currentImgIndex + 1;
            }
        }
        else {
            if (newIndex > 0) {
                newIndex = this.state.currentImgIndex - 1;
            }
        }
        this.setState({currentImgIndex: newIndex});
    }

    render() {
        return (
            <div className="Slider">
                <button  className="prev"
                         disabled={this.state.currentImgIndex > 0 ? false : true}
                         data-direction="prev" onClick={this.nextSliderHandler}>prev</button>
                <img className="img" src={this.state.images[this.state.currentImgIndex]} alt=""/>
                <button className="next"
                        disabled={this.state.currentImgIndex < this.state.images.length-1 ? false : true}
                        data-direction="next" onClick={this.nextSliderHandler}>next</button>


            <slider2>

            </slider2>







            </div>




        )
    }
}




