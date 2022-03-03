import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';


function SearchForm() {


    // need reducer for the value of the input ???
    const [searchParameter, setSearchParameter] = useState('');



    const history = useHistory();
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();

        // this is setting the state of the search reducer - Which has not been made yet... if we even need one
        dispatch({
            type: "SEARCH_GIF",
            payload: searchParameter
        })

    }

    
    return(
        <>
            <form onSubmit={handleSubmit} className="searchForm">
                <input 
                required
                type="text"
                placeholder="funny, mad, etc..."
                value={searchParameter}
                onChange={(event) => setSearchParameter(event.target.value)}
                />

                <button type="submit">Search</button>
            </form>
        </>
    )
}


export default SearchForm;