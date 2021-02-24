import React, { Component } from "react";
import ReactPlayer from "react-player";
import { withStyles } from "@material-ui/core/styles";
import { relativeTimeRounding } from "moment";

const styles = (theme) => ({
  playerwrapper: {
    position: relativeTimeRounding,
    paddingTop: "56.25%",
  },

  reactplayer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

class ResponsivePlayer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.playerwrapper}>
        <ReactPlayer
          className={classes.reactplayer}
          url="https://www.youtube.com/watch?v=UW2QoShtHgE&t=158s&ab_channel=StrangeMusicInc"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsivePlayer);
