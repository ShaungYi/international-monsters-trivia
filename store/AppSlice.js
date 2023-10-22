import { createSlice } from '@reduxjs/toolkit'



export const monsters = [
    {
        imgSrc: 'dokkebi.png',
        name: 'Dokkaebi',
        country: 'South Korea',
        description: 'Carries a big spiky magic club and plays tricks on people',
        funFact: 'Dokkaebi is the inspiration for the kdrama Dokkaebi',
        funFactImgSrc: 'dokkaebi-kdrama.jpg'
    },
    {
        imgSrc: 'krampus.jpeg',
        name: 'Krampus',
        country: 'Eastern Europe',
        description: 'Scares children on Christmas. He is the opposite of Santa',
        funFact: 'If you\'re not a good kid, Krampus will kidnap you in his backpack-basket',
        funFactImgSrc: 'krampus-basket.jpg'
    },
    {
        imgSrc: 'virgin-ghost.jpg',
        name: 'Virgin Ghost',
        country: 'South Korea',
        description: 'Died unfairly, so she\'s super mad',
        funFact: 'She wears Korean funeral clothes called Sobok (소복)',
        funFactImgSrc: 'sobok.jpg'
    },
    {
        imgSrc: 'banshee.jpeg',
        name: 'Banshee',
        country: 'Ireland',
        description: 'You can hear her screaming when a family member is about to die',
        funFact: 'Some people say Banshee has red hair',
        funFactImgSrc: 'redhead-banshee.jpeg'
    }
]


const initialState = {
    monsterIndex: 0,
    isNameVisible: false,
    isCountryVisible: false,
    isFunFactVisible: false,
    isHintVisible: false
}

const AppSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        incMonsterIndex(state, action) {
            if (state.monsterIndex < monsters.length - 1){
                state.monsterIndex++;
            }

        },
        decMonsterIndex(state, action){
            if (state.monsterIndex > 0){
                state.monsterIndex--;
            }
        },
        setIsNameVisible(state, action) {
            state.isNameVisible = action.payload
        },
        setIsCountryVisible(state, action) {
            state.isCountryVisible = action.payload
        },
        setIsFunFactVisible(state, action) {
            state.isFunFactVisible = action.payload
        },
        setIsHintVisible(state, action){
            state.isHintVisible = action.payload
        }
    }
})

export default AppSlice

