import React, { Component } from 'react'
import './index.scss'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [],
        }
    }

    inputOnChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    inputOnKeyDownHandle(e) {
        if (e.keyCode === 13) {
            let { list, inputValue } = this.state
            list = [inputValue, ...list]
            this.setState({
                list
            })
        }

    }
    render() {
        const { inputValue, list } = this.state
        return (
            <div className="home-wrapper">
                <div className="headline">React</div>
                <p className="illustration">用于构建用户界面的react框架</p>
                <div className="input-box">
                    <input
                        value={inputValue}
                        onChange={this.inputOnChange.bind(this)}
                        onKeyDown={this.inputOnKeyDownHandle.bind(this)}
                    />
                    <ul className="list">
                        {
                            list.length ? list.map((item, index) => (
                                <li className="list-item" key={index}>{item}</li>
                            )) : null
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

export default Home