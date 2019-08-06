import React from 'react';
import { TimelineLite, CSSPlugin } from 'gsap/all'
import { connect } from 'react-redux';

class ReducerInfo extends React.Component {

    constructor(props) {
        super(props);
        this.cards = null;
        this.tl = new TimelineLite({ paused: false });
    }

    // componentDidMount(){
    // 	this.tl.staggerTo( this.cards , 1, { autoAlpha: 1, y: 200 }, 0.1);
    // }

    render() {
        // if (!this.props.song) {
        //     return <div>Select a Song</div>
        // }
        console.log(this.props, "propsssssss")
        return (
            <div className="ui container grid">
                <div className="eight wide column">
                    <div className="ui segment" ref={div => this.cards = div}>
                        <div className="ui internally celled grid">
                            <div className="six wide column">
                                <i className="massive database icon"></i>
                            </div>

                            <div className="ten wide column ui card">
                                <div class="header"> <h2>Reducer</h2></div>
                                <div class="meta">
                                    <span class="category">Players (Store)</span>
                                </div>
                                Hi! I have the list and duration.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="eight wide column">
                    <div className="ui segment" ref={div => this.cards = div}>
                    <div className="ui internally celled grid">
                            <div className="six wide column">
                                <i className="massive tasks icon"></i>
                            </div>

                            <div className="ten wide column ui card">
                                <div class="header"> <h2>Action</h2></div>
                                <div class="meta">
                                    <span class="category">Select Player</span>
                                </div>
                                Action is to Select a Player
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(ReducerInfo);
