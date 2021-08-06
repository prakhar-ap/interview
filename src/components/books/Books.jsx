import { Grid, IconButton, InputBase, Paper, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from '../../axios';
import React, {useState} from 'react';
import Book from '../book/Book';

const useStyles = makeStyles(() => ({
    root: {
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      margin: '20px 20px',
    },
    input: {
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));

const Books = () => {
    const [title, setTitle]= useState('');
    const [books, setBooks] = useState([]);

    const classes = useStyles();

    const handleSearch = async (e) => {
        e.preventDefault();
        const res = await axios.get(`/book/${title}`);
        setBooks(res.data.books);
    }
    return (
        <div className={'Books'}>
            <Grid className={'search'} container spacing={4}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={classes.input}
                        placeholder="Search Title"
                        inputProps={{ 'aria-label': 'seach title' }}
                    />
                    <IconButton type="submit" onClick={handleSearch} className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
            <Grid className={'content'}>
                {books.map((b) => (
                    <React.Fragment key={b.isbn13}>
                        <Book data={b} />
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
};

export default Books;