import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MySelect defaultValue="Sort by"
                      value= {filter.sort}
                      onChange=  {selectedSort => setFilter({...filter, sort: selectedSort})}
                      options={[ {value: "title", name: "Sort by title"}, {value: "body", name: "Sort by body"} ]}/>
            <MyInput placeholder="Search..."
                     value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}/>
        </div>
    );
};

export default PostFilter;