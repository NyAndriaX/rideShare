import {styled} from "styled-components"

export const StepProgressBarStyled = styled.div`
  text-align: center;
  color: #6D6875;
  .steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: table;
    table-layout: fixed;
    width: 100%;
    color: #929292;
    height: 3rem;
  }
  .steps > .step {
    position: relative;
    display: table-cell;
    text-align: center;
    font-size: 1rem;
    color: #6D6875;
  }
  .steps > .step:before {
    content: attr(data-step);
    display: block;
    margin: 0 auto;
    background: #ffffff;
    border: 2px solid #e6e6e6;
    color: #e6e6e6;
    width: 3rem;
    height: 3rem;
    text-align: center;
    margin-bottom: -4.5rem;
    line-height: 2.9rem;
    border-radius: 100%;
    position: relative;
    z-index: 1;
    font-weight: 700;
    font-size: 1rem;
    cursor:pointer
  }
  .steps > .step:after {
    content: "";
    position: absolute;
    display: block;
    background: #e6e6e6;
    width: 100%;
    height: 0.125rem;
    top: 1.3rem;
    left: 50%;
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

  /**
   * Some Generic Styling
   */
  *, *:after, *:before {
    box-sizing: border-box;
  }


`