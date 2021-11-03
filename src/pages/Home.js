import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import { getPosts } from '../actions/posts';
import useStyles from './styles';
import AppbarCustom from '../components/Appbar';
export default function Home() {

    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);


    return (
        <>
            <AppbarCustom />
            <div style={{ margin: "auto", maxWidth: "640px", marginTop: "20px" }}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                <Posts setCurrentId={setCurrentId} />

            </div>
        </>
    );
}
