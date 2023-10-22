import './fun-fact.css'
import './info-card.css'



export default function FunFact(props){
    return(
        <section className='fun-fact fade-in'>
            <img src={`images/${props.funFactImgSrc}`} className='fun-fact-img'/>
            <section className='info-card fun-fact-card'>
                <span className='info-card-title'>Fun Fact: </span> <span className='info-card-content'>{props.funFact}</span>
            </section>
        </section>
    )
}