import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import countries from '../constants/countries';
import newsTypes, { TOP_HEADLINES } from '../constants/newsTypes';
import './FiltersBar.css';

function FiltersBar(props) {
  return (
    <div className="FiltersBar">
      <Dropdown
        className="FiltersBar-dropdown"
        placeholder="Select a Country"
        selection
        options={countries}
        onChange={props.onCountryChange}
      />
      <Dropdown
        className="FiltersBar-dropdown"
        defaultValue={TOP_HEADLINES.value}
        selection
        options={newsTypes}
        onChange={props.onNewsTypeChange}
      />
      <Input
        className="FiltersBar-input"
        action={{
          icon: 'search',
          onClick: props.onSearchClick
        }}
        placeholder="Search article..."
        onChange={props.onQueryChange}
      />
    </div>
  );
}

export default FiltersBar;