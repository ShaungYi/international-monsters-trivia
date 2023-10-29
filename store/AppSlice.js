import { createSlice } from '@reduxjs/toolkit'




export const monsters = [
    {
        imgSrc: 'mongolian-death-worm.png',
        name: 'Mongolian Death Worm (olgoi-khorkhoi)',
        country: 'Mongolia',
        description: 'They are huge worms that live in the desert and their name means \'large-intestine worm\'',
        funFact: 'Some people say they kill prey with electric shocks, and that they are so poisonous that you die just by touching them',
        funFactImgSrc: 'death-worm-in-book.png'
    },
    {
        imgSrc: 'reaper.jpeg',
        name: 'Korean Grim Reaper (Jeosengsaja)',
        country: 'Korea',
        description: 'Their job is to bring dead souls to the underworld',
        funFact: 'A Jeosengsaja is also featured in the Kdrama Dokkaebi',
        funFactImgSrc: 'reaper_dokkaebi.jpg'
    },
    {
        imgSrc: 'grootslang.jpeg',
        name: 'Grootslang',
        country: 'South Africa',
        description: 'It is a huge half elephant half snake guys that live in a really really deep cave (64km deep)',
        funFact: 'The Grootslang\'s cave is is full of diamonds :)',
        funFactImgSrc: 'diamond_cave.jpg'
    },
    {
        imgSrc: 'adze.jpg',
        name: 'Adze',
        country: 'Ghana',
        description: 'They are vampires that turn into fireflies, get into homes, and bite people. People who get bitted get sick and die',
        funFact: 'The Adze in human form can turn people into witches',
        funFactImgSrc: 'adze-human.jpg'
    },
    {
        imgSrc: 'makara.jpeg',
        name: 'Makara',
        country: 'India',
        description: 'They are water gods that are part elephant, part crocodile, and part fish',
        funFact: 'Makara statues guard gates and entrances in Hindu temples',
        funFactImgSrc: 'makara_bust.jpeg'
    },
    {
        imgSrc: 'naga.jpg',
        name: 'Naga, Nagi, Nagini',
        country: 'India, Cambodia, Indonesia',
        description: 'Their favorite topics are water and fertility, and they are really wise',
        funFact: 'Voldmort\'s pet snake\'s name is Nagini (Harry Potter series)',
        funFactImgSrc: 'Voldemort-Nagini.jpg'
    },
    {
        imgSrc: 'gandaberunda.jpeg',
        name: 'Gandaberunda (original: Narasimha)',
        country: 'India',
        description: 'He was a dude with a lion\'s head before, but he leveled up into a two headed mega-bird and changed his name.',
        funFact: 'He is in the state emblem of Karnataka',
        funFactImgSrc: 'Karnataka.png'
    },
    {
        imgSrc: 'garuda.jpg',
        name: 'Garuda',
        country: 'China',
        description: 'He can make the earth, heaven, and hell stop spinning by flapping his wings really fast',
        funFact: 'He is Vishnu\'s car/driver. They sometimes do ride sharing',
        funFactImgSrc: 'garuda_sharing.jpeg'
    },
    {
        imgSrc: 'taotie.jpg',
        name: 'Taotie',
        country: 'China',
        description: 'They love eating and are always hungry. Their favorite food is us.',
        funFact: 'People make Taotie statues in front of buildings to keep out bad spirits',
        funFactImgSrc: 'taotie_statue.jpg'
    },
    {
        imgSrc: 'hiderigami.jpg',
        name: 'Hanba, Hinderigami',
        country: 'China, Japan',
        description: 'They can cause draught and are super hot (literally)',
        funFact: 'The chinese version, Hanba, is a goddess who got kicked out of heaven and turned into a demon',
        funFactImgSrc: 'hanba.jpg'
    },
    {
        imgSrc: 'gumiho.jpg',
        name: 'Nine-tailed Fox',
        country: 'China, Japan, Korea',
        description: 'They live for thousands of years',
        funFact: 'They can turn into girls to trick people',
        funFactImgSrc: 'gumiho_human.png'
    },
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
        imgSrc: 'aswang.jpg',
        name: 'Aswang',
        country: 'Philippines',
        description: 'They are shape-shifting part-human part-animal guys that want to eat your organs',
        funFact: 'They can be your friend and come to your parties. In fact, one could be in this party!',
        funFactImgSrc: 'halloween_party.jpeg'
    },
    {
        imgSrc: 'bull_demon_king.png',
        name: 'Bull Demon King',
        country: 'China',
        description: 'He is a supervillain who was sworn brothers with a monkey',
        funFact: 'He married Princess Iron Fan. Their son is Red Boy',
        funFactImgSrc: 'bull_demon_family.jpg'
    },
    {
        imgSrc: 'chupacabra.jpeg',
        name: 'Chupacabra',
        country: 'Latin America',
        description: 'They suck the blood of farm animals. Some people say they saw one, but know one knows if they exist',
        funFact: 'Some people think this guy is a Chupacabra',
        funFactImgSrc: 'puss.jpg'
    },
    {
        imgSrc: 'banshee.jpeg',
        name: 'Banshee',
        country: 'Ireland',
        description: 'You can hear her screaming when a family member is about to die',
        funFact: 'Some people say Banshee has red hair',
        funFactImgSrc: 'redhead-banshee.jpeg'
    },
    {
        imgSrc: 'migoi_grafitti.jpeg',
        name: 'Migoi or Migoe',
        country: 'Bhutan',
        description: 'They are said to be able to walk backwards up and down mountains, turn invisible, and cast strange magic',
        funFact: 'They have a really cool fan-made poster',
        funFactImgSrc: 'migoi_poster.jpeg'
    },
    {
        imgSrc: 'virgin-ghost.jpg',
        name: 'Virgin Ghost',
        country: 'South Korea',
        description: 'Died unfairly, so she\'s super mad',
        funFact: 'She wears Korean funeral clothes called Sobok (소복)',
        funFactImgSrc: 'sobok.jpg'
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

