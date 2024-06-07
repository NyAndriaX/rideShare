import { styled } from "styled-components";

export const StepProgressBarStyled = styled.div`
  width: 100%;
  text-align: center;
  color: #6D6875;
  margin-left:2rem;
  .steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    color: #929292;
    min-height: 3rem;
    height: auto;
    word-wrap: break-word;
    white-space: normal;
  }

  .step {
    position: relative;
    flex: 1 1 auto;
    text-align: left;
    font-size: 1rem;
    color: #6D6875;
    min-width: 100px;
    margin-bottom:6rem;
  }

  .step:before {
    content: attr(data-step);
    display: block;
    margin: 0;
    background: #ffffff;
    border: 2px solid #e6e6e6;
    color: #e6e6e6;
    width: 3rem;
    height: 3rem;
    text-align: center;
    margin-bottom: -5rem;
    line-height: 2.9rem;
    border-radius: 100%;
    position: relative;
    z-index: 1;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
  }

  .step:after {
    content: "";
    position: absolute;
    display: block;
    background: #e6e6e6;
    width: calc(100% - 3rem);
    height: 0.125rem;
    top: 1.3rem;
    left: 3rem;
  }

  .steps > .step:last-child:after {
    display: none;
  }

  .steps > .step.is-complete {
    color: #6D6875;
  }

  .steps > .step.is-complete:before {
    content: "✓";
    color: var(--color-white);
    background: var(--color-primary);
    border: 2px solid var(--color-light-grey);
  }

  .steps > .step.is-complete:after {
    background: var(--color-primary);
  }

  .steps > .step.is-active {
    font-size: 1rem;
  }

  .steps > .step.is-active:before {
    color: #FFF;
    border: 3px solid var(--color-light-grey);
    background: var(--color-primary);
    margin-bottom: -4.5rem;
  }

  @media screen and (min-width: 768px) {
    .step {
      flex-basis: calc(16.6% - 16px);
    }
    .step:nth-child(6n){
      flex-basis:5px !important;
    }
    .step:nth-child(6n):after {
      display:none;
    }
  }

  @media screen and (max-width: 767px) {
    .step {
      flex-basis: calc(33.3% - 16px);
    }
    .step:nth-child(3n){
      flex-basis:10px !important;
    }
    .step:nth-child(3n):after {
      display: none;
    }
  }

`;
