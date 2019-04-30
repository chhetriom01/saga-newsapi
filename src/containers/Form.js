import React from 'react';
import { connect } from 'react-redux';
import {getNews} from '../actions'

let Button = ({getNews}) => (
    <button onClick = {getNews}>Press to See news</button>

    <div>
        <form>
            <input  type='text' value/>
        </form>
    </div>
)

const mapDispatchToprops = {
    getNews : getNews
}

Button = connect(null,mapDispatchToprops)(Button);
export default Button;