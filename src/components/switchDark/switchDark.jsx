import './switchDark.scss'
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { ContextApp } from '../../context/contextApp';

export default function SwitchDark (){

    const { darkState, switchDark } = useContext(ContextApp); 
    const SwitchIcon = darkState ? faCloudMoon : faCloudSun
    const darkModeSwitch = darkState ? 'darkSwitch' : 'lightSwitch'

    return (
        <div className={`switchContainer ${darkModeSwitch}`}>
            <div onClick={switchDark} >
                <FontAwesomeIcon icon={SwitchIcon}/>
            </div>
        </div>
    )
}