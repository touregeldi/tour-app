import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTour } from '../../../redux/actions/tours';
import style from './Tour.module.scss';


const Tour = ({tour, dispatch}) => {
    const [show, setShow] = useState(false);

    const clickHandler = () => {
        dispatch(deleteTour(tour))
    }

    const showHandler = () => {
        setShow(!show)
    }

    return (
        <div className={style.box}>
            <div className={style.imgContainer}>
                <img alt='' src={tour.img}/>
                <span className={style.closeBtn } onClick={clickHandler}>
                    <i className="fas fa-window-close"/>
                </span>
            </div>
            
            <div className={style.information}>
                <h3 className={style.h3}>{tour.city.toUpperCase()}</h3>
                <p className={style.p}>{tour.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</p>
                <p>
                    Info{" "}
                    <span className={style.infoButton} onClick={showHandler}>
                        <i className="fas fa-caret-square-down"/>
                    </span>
                </p>
                {show ? <p>{tour.info}</p> : ''}
                
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Tour);