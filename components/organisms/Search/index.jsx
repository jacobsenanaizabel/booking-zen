import React, {useState } from 'react';
import { Button, Input } from '@components/atoms';

import {
  Container
} from './styles';

const Search = ({searchFreelancer}) => {

  const [search, setSearch] = useState();

  function onChangeSearching(evt){
    setSearch(evt.target.value)
  }

  const getFreelancers = (() =>{
    if(search !== undefined && search.length > 0){
      searchFreelancer(search)
    }
  })

  function onKeyDown(evt){
    if (evt.key === 'Enter') {
      searchFreelancer(evt.target.value)
    }
  }


  return(
    <>
        <Container>
          <Input
              name="search"
              onChange={onChangeSearching}
              onKeyDown={onKeyDown}
              placeholder="Find an expert by specialty or name" 
              type="text"
              value={search}
            />
          <Button text="Search" onClick={getFreelancers}/>
        </Container>
    </>
  )
};


export default Search;
