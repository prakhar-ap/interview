import { Divider, Grid, Paper, makeStyles} from '@material-ui/core'

import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import Ratings from '../common/ratings/Ratings';


const useStyles = makeStyles(() => ({
    large: {
      maxWidth: '100%',
      height: '100%',
    },
    paper: {
        maxWidth: '900px',
        marginLeft: '55px',
        padding: '20px 20px',
    },
    divider: {
        height: '100%',
        margin: 2,
    },
  }));

const Details = ({ match }) => {
    const {
      params: { isbn13 },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const classes = useStyles();
  
    useEffect(() => {
        const getBook = async () => {
            const res = await axios(`/books/${isbn13}`);
            setData(res.data);
            setIsLoading(false);
        };

        getBook();
    }, [isbn13]);

    const additionalInfo = {
        description: data.desc,
        language: data.language,
        year: data.year,
        pages: data.pages,
        isbn10: data.isbn10,
        isbn13: data.isbn13,
    }

    const fieldNames = {
        description: 'Description',
        year: 'Year Published',
        pages: 'Pages',
        language: 'Language',
        isbn10: 'ISBN-10',
        isbn13: 'ISBN-13',
    }
  
    if (isLoading) {
        return (
            <div>Loading Data...</div>
        );
    }

    return (
        <div className={'Details'}>
            <Grid container spacing={3} item xs={12} className={'customerInfo'}>
                <Grid className={'details'} container spacing={2} item xs={12}>
                    <Grid>
                        <img src={data.image} className={classes.large} alt=""/>
                    </Grid>
                    <Grid className={'content'} item xs={8}>
                        <span className={'title'}>{data.title}</span><span className={'price'}>({data.price})</span>
                        <span className={'subtitle'}>{data.subtitle}</span>
                        <span className={'authors'}>by {data.authors} ({data.publisher})</span>
                        <div className={'rating'}><Ratings rating={parseInt(data.rating)} /></div>
                    </Grid>
                </Grid>
                <Paper elevation={4} className={classes.paper}>
                    <Grid container spacing={2}>
                        {Object.keys(additionalInfo).map((info) => (
                            <Grid className={'rest'} item xs={12} key={info}>
                                <span className={'title'}>{fieldNames[info]}: &nbsp;</span>
                                <Divider className={classes.divider} orientation="vertical" />
                                <span className={'description'}>{additionalInfo[info]}</span>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
};

export default Details;