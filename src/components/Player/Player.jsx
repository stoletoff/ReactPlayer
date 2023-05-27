import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';
export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      console.log('New URL');
    }
  }
  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;
    const showLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '100%' : 0;
    return (
      <>
        {showLoader && <h2>Загружаем видео...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            ></StyledPlayer>
          </PlayerWrapper>
        )}
      </>
    );
  }
}
