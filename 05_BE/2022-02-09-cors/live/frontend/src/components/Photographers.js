function Photographers({ photographers }) {
    function handleClickShowDetails(event) {
        event.preventDefault();

        alert('handleClickShowDetails() not implemented');
        
        console.log(event.currentTarget.id);
    };

    return (
        <ol>
        {photographers.map( p => {
            return (
                    <li key={p._id}>
                        <a id={p._id} href='/' onClick={handleClickShowDetails}>{p.name} ({p.email})</a>;
                    </li>
            );
        })}
        </ol>
    ); 
}

export default Photographers;
