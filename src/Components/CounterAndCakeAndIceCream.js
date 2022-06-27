import HooksIceCream from './HooksIceCream';
import HooksCake from './HooksCake';
import Counter from "./Counter";
import React, { Component } from 'react'

export default class CounterAndCakeAndIceCream extends Component {
  render() {
    return (
        <div>
            <div>
                <Counter/>
            </div>
            <div>
                <HooksIceCream/>
            </div>
            <div>
                <HooksCake/>
            </div>
        </div>
    )
  }
}


