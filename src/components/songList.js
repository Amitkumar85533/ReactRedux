import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import { TimelineLite, CSSPlugin } from 'gsap/all'

class SongList extends React.Component {

    constructor(props) {
        super(props);
        this.cards = [];
        this.tl = new TimelineLite({ paused: false });
		this.cardsTween = null;
    }

    componentDidMount(){
		this.tl.staggerTo( this.cards , 1, { autoAlpha: 1, y: 200 }, 0.1);
	}

    renderList() {
        return this.props.songs.map((song,index) => {
            return (
                <div className="item" key={song.title}  ref={div => this.cards[index] = div }>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        // this.props === {songs: state.songs}
      //  this.tl.kill().clear().pause(0);

        return (
        <div className="ui divided list ">
        {this.renderList()}
        </div>
        )
    }
}

//state contaings list of songs.
const mapStateToProps = (state) => {
    console.log(state, 'stateeee');
    return { songs: state.songs };
}

// it passes selectSong (ACTION CREATOR) as an PROP into component

export default connect(mapStateToProps, { selectSong })(SongList);