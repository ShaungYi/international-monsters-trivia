import './header.css'

export default function Header() {
    return (
        <header>
            <img src='/cof.png' className='logo-img' />
            <div className='logo-text'>
                <div className='cof-txt'>
                    CoF
                </div>
                <div className='game-name-txt'>
                    <div>
                        International Monsters
                    </div>
                    <div>
                        Trivia Night
                    </div>
                </div>

            </div>
        </header >
    )
}