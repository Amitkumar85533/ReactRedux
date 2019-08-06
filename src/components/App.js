import React from 'react';
import SongList from './songList';
import SongDetail from './songDetail';
import ReducerInfo from './reducerInfo';
import { TimelineLite , CSSPlugin } from 'gsap/all';

class App extends React.Component {

    constructor(props){
        super(props);
        this.logoTl = new TimelineLite({ paused:false });
        this.content = null;
		this.leftComponent = null;
		this.rightComponent = null;
		this.reducerComp = null;
	//	this.description = null;
		this.icons = [];
    }

    componentDidMount(){
		// create logo tween
        this.logoTl
        .set(this.content, { autoAlpha: 1 })// show content div
     //   .from(this.leftComponent, 0.5, { left: 100, autoAlpha: 1 })
        .from(this.rightComponent, 0.5, { left: -100, autoAlpha: 1 }) // added -0.25 seconds prior to end this.of timeline
        .from(this.reducerComp, 0.5, { y: 100, autoAlpha: 1 }) // added 0.5 seconds after end of timeline
     //   .from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
        .staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 1 }, 0.1); //animate all icons with 0.1 second stagger


	}

    render(){
        return (
            <div className="ui container grid" ref= { div => this.content = div}>
                <div className="ui row"  >
                        <div className="column eight wide" ref= { div => this.leftComponent = div}>
                        <SongList />
                        </div>
    
                        <div className="column eight wide" ref= { div => this.rightComponent = div}>
                        <SongDetail />
                        </div>
                </div>

                <div className="ui row" >
                        <div className="column sixteen wide" ref= { div => this.reducerComp = div}>
                        <ReducerInfo />
                        </div>
    
                        {/* <div className="column eight wide" ref= { div => this.rightComponent = div}>
                        <SongDetail />
                        </div> */}
                </div>
                {/* <div className="ui row">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
						alt=""
						className="img-fluid logo"
						ref={ img => this.normalContainer = img }
					/>
				</div> */}

            </div>
        );
    }
}          

export default App; 