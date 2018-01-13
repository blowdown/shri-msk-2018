import React from 'react';
import Textbox from './Textbox';
import './dropdown.css';

export default class Dropdown extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { isPanelOpened: false };
        this._dropdownRoot = null;

        this._onDocumentMouseDown = this._onDocumentMouseDown.bind(this);
    }

    _onDocumentMouseDown(e) {
        if (this._dropdownRoot && !this._dropdownRoot.contains(e.target)) {
            this.setState({ isPanelOpened: false });
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this._onDocumentMouseDown);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this._onDocumentMouseDown);
    }

    render() {
        const Option = this.props.optionComponent;

        return (
            <div className={!this.state.isPanelOpened ? "dropdown" : "dropdown dropdown--shown"}
                ref={el => this._dropdownRoot = el}
            >
                <Textbox
                    placeholder={this.props.placeholder}
                    onFocus={() => this.setState({ isPanelOpened: true })}
                />

                <div className="dropdown__panel">
                    {this.props.options.map((option, index) => (
                        <div
                            className={`dropdown__element ${this.props.selected.indexOf(option) !== -1 ? 'dropdown__element--selected' : ''}`}
                            key={option.key || option.id}
                            onClick={() => this.props.onSelect(option)}
                        >
                            <Option option={option} selected={false} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
