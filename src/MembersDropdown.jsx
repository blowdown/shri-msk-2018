import React from 'react';
import Dropdown from './Dropdown';
import './members-dropdown.css';

const MemberOption = ({ selected, option: { key, name, floor } }) => (
    <div className={`members-dropdown__element ${selected ? 'members-dropdown__element--selected' : ''}`}>
        <div className="members-dropdown__avatar" style={{ backgroundImage: `url(https://randomuser.me/api/portraits/men/${key}.jpg)` }}></div>
        <div className="members-dropdown__name">{name}</div>
        <div className="members-dropdown__floor">· {floor} этаж</div>
    </div>
);

const MembersDropdown = ({ members, selected, onSelect }) => (
    <Dropdown
        placeholder='Например, Тор Одинович'
        selected={selected}
        optionComponent={MemberOption}
        options={members}
        onSelect={onSelect}
    />
);

export default MembersDropdown;
