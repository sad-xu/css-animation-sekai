<template>
  <div>
    <div class="rect"></div>
    <div class="round"></div>
    <div class="lines">
      <div></div><div></div>
      <div></div><div></div>
      <div></div><div></div>
      <div></div><div></div>
      <div></div><div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .rect {
    position: absolute;
    top: 50%;
    left: 14.5%;
    transform: translateY(-50%) rotate(15deg);
    width: 2.5%;
    height: 40%;
    background-color: $j-black;
  }
  .round {
    position: absolute;
    top: 50%;
    left: 26%;
    transform: translateY(-50%);
    width: 14%;
    height: $j-ratio * 14%;
    border-radius: 100%;
    background-color: $j-red;
  }

  .lines div {
    position: absolute;
    top: 0;
    height: 100%;
    width: 3.7%;
    &:before, &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $j-black;
    }
  }

  @for $i from 1 through 10 {
    .lines div:nth-child(#{$i}) {
      right: ($i - 1) * 6.2% - 0.4%;
      &:before {
        transform-origin: bottom;
        bottom: 50% - $i / 8;
        transform: rotate(-2deg * $i);
      }
      &:after {
        transform-origin: top;
        top: 50% - $i / 8;
        transform: rotate(2deg * $i);
      }
    }
  }

  // animation 272 - 349  77
  $bezier: cubic-bezier(0.01, 0.7, 0.99, 0.53);
  .rect {
    animation: rect-rotate 77 * 16ms linear forwards;
  }
  .round {
    animation: round-move 77 * 16ms $bezier forwards;
  }
  @for $i from 1 through 10 {
    .lines div:nth-child(#{$i}) {
      animation: line-#{$i}-move 77 * 16ms $bezier forwards;
      &:before {
        animation: line-#{$i}-before 77 * 16ms $bezier forwards;
      }
      &:after {
        animation: line-#{$i}-after 77 * 16ms $bezier forwards;
      }
    }
  }

  @keyframes rect-rotate {
    30% {
      transform: translateY(-50%) rotate(45deg);
    }
    90% {
      left: 45%;
      transform: translateY(-50%) rotate(60deg);
      opacity: 1;
    }
    91% {
      left: 45%;
      transform: translateY(-50%) rotate(60deg);
      opacity: 0;
    }
    100% {
      left: 45%;
      transform: translateY(-50%) rotate(60deg);
      opacity: 0;
    }
  }
  @keyframes round-move {
    100% {
      left: 65%;
    }
  }
  @for $i from 1 through 10 {
    @keyframes line-#{$i}-move {
      100% {
        @if $i > 5 {
          right: ($i - 1) * 2% + 6%;
        } @else {
          right: ($i - 1) * 3.8% - 2%;
        }
      }
    }
    @keyframes line-#{$i}-before {
      100% {
        bottom: 50% - $i / 3.5;
        transform: rotate(-5deg * $i); // translateX();
      }
    }
    @keyframes line-#{$i}-after {
      100% {
        top: 50% - $i / 3.5;
        transform: rotate(5deg * $i);
      }
    }
  }
</style>
