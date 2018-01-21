import React from 'react';
import Dropdown from './Dropdown';
import './members-dropdown.css';

const MemberOption = ({ selected, option: { login, homeFloor, avatarUrl } }) => (
    <div className={`members-dropdown__element ${selected ? 'members-dropdown__element--selected' : ''}`}>
        <div className="members-dropdown__avatar" style={{ backgroundImage: `url(${avatarUrl})` }} />
        <div className="members-dropdown__name">{login}</div>
        <div className="members-dropdown__floor">· {homeFloor} этаж</div>
    </div>
);

const MembersDropdown = ({ members, selected, onSelect }) => (
    <Dropdown
        placeholder='Например, Тор Одинович'
        closeOnSelect={true}
        selected={selected}
        optionComponent={MemberOption}
        options={members}
        onSelect={onSelect}
        getSuggestText={(option) => option.login}
    />
);

export default MembersDropdown;
