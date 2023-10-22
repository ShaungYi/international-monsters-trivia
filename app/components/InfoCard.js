'use client'
import { useState } from 'react'
import './info-card.css'
import { useSelector } from 'react-redux'



export default function InfoCard(props) {


    const [nameTxt, nameStyleClass] = props.isNameVisible ?
        [props.name, 'info-card-content-revealed'] : ['???', 'info-card-content-hidden']

    const [countryTxt, countryStyleClass] = props.isCountryVisible ?
        [props.country, 'info-card-content-revealed'] : ['???', 'info-card-content-hidden']



    return (
        <section className='info-card fade-in'>
            <div>
                <span className='info-card-title'>Name: </span>
                <span className={nameStyleClass}>{nameTxt}</span>
            </div>
            <div>
                <span className='info-card-title'>Country or Region: </span>
                <span className={countryStyleClass}>{countryTxt}</span>
            </div>
            <div>
                {props.isHintVisible ?
                    <>
                        <span className='info-card-title'>Facts: </span>
                        <span className='hint'>
                            {props.description}
                        </span>
                    </>
                    :
                    <>
                        <span className='info-card-title'>Hints: </span>
                        <span>Need a hint?</span>
                    </>


                }
            </div>
        </section>
    )
}