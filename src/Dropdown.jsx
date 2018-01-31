import React from 'react';
import Textbox from './Textbox';
import './dropdown.css';

export default class Dropdown extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { isPanelOpened: false, filterText: '' };
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
        const {
            optionComponent: Option,
            getSuggestText,
            onSelect,
            closeOnSelect = false
        } = this.props;

        return (
            <div className={!this.state.isPanelOpened ? "dropdown" : "dropdown dropdown--shown"}
                ref={el => this._dropdownRoot = el}
            >
                <Textbox
                    placeholder={this.props.placeholder}
                    onFocus={() => this.setState({ isPanelOpened: true })}
                    onChange={(newText) => this.setState({ filterText: newText })}
                    value={this.state.filterText}
                    icon={this.state.isPanelOpened ? 'collapse' : null}
                    onIconClick={() => this.setState({ isPanelOpened: false })}
                />

                <div className="dropdown__panel">
                    {
                        this.props.options
                            .filter(option => {
                                if (!getSuggestText) {
                                    return true;
                                }

                                return getSuggestText(option).toLowerCase()
                                    .indexOf(this.state.filterText.toLowerCase()) >= 0;
                            })
                            .map((option, index) => (
                                <div key={option.key || option.id}
                                    className={
                                        `dropdown__element ${
                                            this.props.selected.indexOf(option) !== -1 ?
                                            'dropdown__element--selected' :
                                            ''
                                        }`
                                    }
                                    onClick={() => {
                                        onSelect(option);
                                        if (closeOnSelect) {
                                            this.setState({ isPanelOpened: false });
                                        }
                                    }}
                                >
                                    <Option option={option} selected={false} />
                                </div>
                            ))
                    }
                </div>
            </div>
        );
    }
}
