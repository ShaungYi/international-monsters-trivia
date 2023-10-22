'use client'
import './home.css'
import Header from './components/header'
import InfoCard from './components/InfoCard'
import { useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppSliceActions } from '@/store/store'
import { monsters } from '@/store/AppSlice'
import FunFact from './components/FunFact'




export default function Home() {


  const dispatch = useDispatch()
  const index = useSelector((state) => state.App.monsterIndex, shallowEqual)
  const [isNameVisible, isCountryVisible, isHintVisible, isFunFactVisible] = useSelector(state => [state.App.isNameVisible, state.App.isCountryVisible, state.App.isHintVisible, state.App.isFunFactVisible], shallowEqual)
  const monster = monsters[index]
  const [imgSrc, name, country, description, funFact, funFactImgSrc] = [monster.imgSrc, monster.name, monster.country, monster.description, monster.funFact, monster.funFactImgSrc]


  const [isInfoCardVisible, setIsInfoCardVisible] = useState(true)

  let allowed = useRef(true)


  function resetInfo(){
    dispatch(AppSliceActions.setIsNameVisible(false))
    dispatch(AppSliceActions.setIsCountryVisible(false))
    dispatch(AppSliceActions.setIsFunFactVisible(false))
    dispatch(AppSliceActions.setIsHintVisible(false))
  }

  const onKeyPress = (event) => {

    if (event.key === ' ') {

      if (isNameVisible && isCountryVisible) {

        if (!isHintVisible) {
          dispatch(AppSliceActions.setIsHintVisible(true))
        }
        else if (!isFunFactVisible) {
          dispatch(AppSliceActions.setIsFunFactVisible(true))
        }
        else if (
          allowed.current &&
          index < monsters.length - 1) {

          dispatch(AppSliceActions.incMonsterIndex())
          resetInfo()

          setIsInfoCardVisible(false)

        }
      }
      allowed.current = false
    }
    else if (event.key === 'n') {
      dispatch(AppSliceActions.setIsNameVisible(true))
    }
    else if (event.key === 'c') {
      dispatch(AppSliceActions.setIsCountryVisible(true))
    }
    else if (event.key === 'h'){
      dispatch(AppSliceActions.setIsHintVisible(true))
    }
    else if (event.keyCode === 37) {
      dispatch(AppSliceActions.decMonsterIndex())
      resetInfo()
    }
    else if (event.keyCode === 39) {
      dispatch(AppSliceActions.incMonsterIndex())
      resetInfo()
    }


  }


  useEffect(() => {setIsInfoCardVisible(true)})




  return (
    <main className="main"
      style={{ backgroundImage: `url(/images/${imgSrc})` }}
      tabIndex={0}
      onKeyDown={onKeyPress}
      onKeyUp={(event) => { allowed.current = true }}>
      <Header />
      {isFunFactVisible &&
        <FunFact
          funFact={funFact}
          funFactImgSrc={funFactImgSrc} />
      }
      {isInfoCardVisible &&
        <InfoCard
          name={name}
          country={country}
          description={description}
          isNameVisible={isNameVisible}
          isCountryVisible={isCountryVisible}
          isHintVisible={isHintVisible} />
      }

    </main>
  )
}
