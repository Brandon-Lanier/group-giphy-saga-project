


function SearchForm() {


    // need reducer for the value of the input ???
    const [searchParameter, setSearchParameter] = useState('');




    const handleSubmit = () => {
        
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