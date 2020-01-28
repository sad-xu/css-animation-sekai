<template>
  <div>
    <!-- 序幕 -->
    <div class="prologue">
      <div class="word-1">
        <div>
          <p>A</p>
        </div>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>C</p>
        </div>
        <div>
          <p>D</p>
        </div>
      </div>
      <div class="word-2">
        <div>
          <p>E</p>
        </div>
        <div>
          <p>F</p>
        </div>
        <div>
          <p>G</p>
        </div>
      </div>
      <div class="connect-line">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="point point-1"></div>
        <div class="point point-2"></div>
        <div class="point point-3"></div>
      </div>
    </div>
    <!-- 插曲 -->
    <div class="episode">
      <div class="message-panel">
        <div class="message">
          <p class="char">
            A
          </p>
          <p class="char">
            B
          </p>
          <p class="char">
            C
          </p>
          <small class="text">aaabbbccc</small>
        </div>
        <div class="message">
          <p class="char">
            D
          </p>
          <p class="char">
            E
          </p>
          <p class="char">
            F
          </p>
          <small class="text">dddeeefff</small>
        </div>
        <div class="message">
          <p class="char">
            G
          </p>
          <p class="char">
            H
          </p>
          <p class="char">
            I
          </p>
          <small class="text">ggghhhiii</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .prologue {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    // word
    .word-1, .word-2 {
      position: absolute;
      top: calc(50% - 60px);
      height: 120px;
      // &:after {
      //   content: '';
      //   display: block;
      //   clear: both;
      // }
      div {
        float: left;
        width: 120px;
        height: 120px;
        border: 1px dashed #888;
        border-right: 0;
        &:last-child {
          border-right: 1px dashed #888;
        }
      }
      p {
        width: 100%;
        height: 100%;
        font-size: 80px;
        color: #777;
        text-align: center;
        line-height: 120px;
        opacity: 0;
      }
    }
    .word-1 {
      left: calc(25% - 240px);
    }
    .word-2 {
      right: 80px;
    }
    // line
    .connect-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .line {
        position: absolute;
        top: calc(50% + 99px);
        height: 1px;
        overflow: hidden;
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #666;
          transform: translateX(-100%);
        }
      }
      .line-1 {
        left: calc(25% - 240px);
        width: 480px;
      }
      .line-2 {
        right: 80px;
        width: calc(((50% - 480px) / 2) + (50% - 80px));
      }
      .point {
        position: absolute;
        top: calc(50% + 90px);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #666;
      }
      .point-1 {
        left: calc(25% - 250px);
      }
      .point-2 {
        left: calc(25% + 230px);
      }
      .point-3 {
        right: 70px;
        transform: scale(0);
      }
    }
  }
  .episode {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .message-panel {
      position: absolute;
      top: calc(50% - 180px);
      right: 80px;
      width: 360px;
      height: 360px;
      transform: rotate(90deg);
      .message {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 15px;
          height: 100%;
          background-color: #5D97BD;
          opacity: 0;
        }
        .char {
          float: left;
          width: 170px;
          height: 170px;
          font-size: 150px;
          color: #333;
          text-align: center;
          line-height: 170px;
          opacity: 0;
          &:nth-child(1), &:nth-child(2) {
            margin-bottom: 20px;
          }
          &:nth-child(2n - 1) {
            margin-left: 20px;
          }
        }
        .text {
          position: absolute;
          top: 165px;
          left: 40px;
          width: 320px;
          height: 30px;
          display: block;
          font-size: 14px;
          color: #555;
          line-height: 30px;
          opacity: 0;
        }
      }
    }
  }

  // prologue animation
  .prologue .word-1 div {
    &:nth-child(1) p {
      animation: show-word 0.6s ease-out 0s forwards;
    }
    &:nth-child(2) p {
      animation: show-word 0.6s ease-out 0.2s forwards;
    }
    &:nth-child(3) p {
      animation: show-word 0.6s ease-out 0.4s forwards;
    }
    &:nth-child(4) p {
      animation: show-word 0.6s ease-out 0.6s forwards;
    }
  }
  .prologue .connect-line .line-1:after {
    animation: draw-line 1.2s ease 0s forwards;
  }
  .prologue {
    animation: move-prologue 0.8s ease 1.2s forwards;
  }
  .prologue .connect-line .line-2:after {
    animation: slash-line 1.6s ease 1.2s forwards;
  }
  .prologue .connect-line .point-3 {
    animation: put-point 1s ease-out 2s forwards;
  }
  .prologue .word-2 div {
    &:nth-child(1) p {
      animation: show-word 0.6s ease-out 1.6s forwards;
    }
    &:nth-child(2) p {
      animation: show-word 0.6s ease-out 1.8s forwards;
    }
    &:nth-child(3) p {
      animation: show-word 0.6s ease-out 2s forwards;
    }
  }
  .prologue .word-2 {
    animation: rotate-word-2 0.4s ease 2.6s forwards;
  }

  @keyframes show-word {
    0%   { transform: scale(0.4); opacity: 0; }
    70%  { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes draw-line {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }
  @keyframes slash-line {
    0%   { transform: translateX(-100%); }
    50%  { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }
  @keyframes move-prologue {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes put-point {
    0%   { transform: scale(0); }
    70%  { transform: scale(2); }
    100% { transform: scale(0); }
  }
  @keyframes rotate-word-2 {
    0%   { transform: rotate(0deg); opacity: 1; }
    100% { transform: rotate(-90deg); opacity: 0; }
  }

  // episode animation
  .episode .message-panel {
    animation: rotate-message-panel 0.7s ease 2.6s forwards,
      move-left-message-panel 0.5s ease 3.6s forwards,
      move-right-message-panel 0.5s ease 4.7s forwards;
  }
  .episode .message-panel .message:nth-child(1) {
    animation: fadeout 0.5s ease 3.6s forwards;
    &:after {
      animation: show-bar 0.5s ease 2.8s forwards;
    }
    .char {
      &:nth-child(1) {
        animation: show-char 0.35s ease 2.8s forwards;
      }
      &:nth-child(2) {
        animation: show-char 0.35s ease 2.9s forwards;
      }
      &:nth-child(3) {
        animation: show-char 0.35s ease 3.0s forwards;
      }
    }
    .text {
      animation: show-text 0.5s ease 3.1s forwards;
    }
  }
  .episode .message-panel .message:nth-child(2) {
    animation: fadeout 0.5s ease 4.7s forwards;
    &:after {
      animation: show-bar 0.5s ease 3.8s forwards;
    }
    .char {
      &:nth-child(1) {
        animation: show-char 0.35s ease 3.8s forwards;
      }
      &:nth-child(2) {
        animation: show-char 0.35s ease 3.9s forwards;
      }
      &:nth-child(3) {
        animation: show-char 0.35s ease 4.0s forwards;
      }
      &:nth-child(4) {
        animation: show-char 0.35s ease 4.1s forwards;
      }
    }
    .text {
      animation: show-text 0.5s ease 4.2s forwards;
    }
  }
  .episode .message-panel .message:nth-child(3) {
    // animation: fadeout 0.5s ease 4.7s forwards;
    &:after {
      animation: show-bar 0.5s ease 4.9s forwards;
    }
    .char {
      &:nth-child(1) {
        animation: show-char 0.35s ease 4.9s forwards;
      }
      &:nth-child(2) {
        animation: show-char 0.35s ease 5.0s forwards;
      }
      &:nth-child(3) {
        animation: show-char 0.35s ease 5.1s forwards;
      }
      &:nth-child(4) {
        animation: show-char 0.35s ease 5.2s forwards;
      }
    }
    .text {
      animation: show-text 0.5s ease 5.3s forwards;
    }
  }

  @keyframes fadeout {
    0%   { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes rotate-message-panel {
    0%   { transform: rotate(90deg); }
    60%  { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }
  @keyframes show-char {
    0%   { transform: translateX(100px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes show-text {
    0%   { transform: translateX(-100px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes show-bar {
    0%   { width: 300px; opacity: 0; }
    100% { width: 15px; opacity: 1; }
  }
  @keyframes move-left-message-panel {
    0%   { right: 80px; }
    100% { right: calc(100% - 450px); }
  }
  @keyframes move-right-message-panel {
    0%   { right: calc(100% - 450px); }
    100% { right: 80px; }
  }
</style>
