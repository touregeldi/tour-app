import React from 'react';
import {connect} from 'react-redux';
import style from './Tours.module.scss'
import Tour from './Tour/Tour';

const Tours = ({dispatch, tours}) => {
    return (
        <div className = {style.container}>
            {tours.map(tour => (<Tour key={tour.id} tour={tour}/>))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Tours);