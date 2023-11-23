import styled from "styled-components";


export const Container = styled.div`
margin-top: 10px;
`

export const List = styled.ul`
display: flex;
flex-direction: column;
    flex-wrap: wrap;
margin-top: 10px;
gap: 10px;

`
export const Item = styled.li`
display: flex;
gap: 10px;
`
export const Btn = styled.button`
-webkit-writing-mode: horizontal-tb !important;
    -webkit-appearance: button;
    border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    border-style: solid;
    border-width: 1px;
    padding: 1px 7px 2px;
    text-rendering: auto;
    color: initial;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 11px system-ui;
`