import React, {useState} from "react";
import styles from './SearchBar.module.css'
function SearchBar(){
    const [text, setText] = useState('');
     function handleUserInput(e) {
        setText(e.target.value);
     }
  

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <>
        <form onSubmit={handleSubmit} action="" className={styles.form}>
            <input onChange={handleUserInput} value={text} className={styles.searchBar} type="text"/>
            <button type="submit">Search!</button>
        </form>
        </>
    )
}
export default SearchBar;