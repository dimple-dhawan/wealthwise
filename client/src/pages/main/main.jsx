import './Main.scss';



export default function Main () {

    return (
        <main>
        <h1 className='header-main'>Monthly Tracker</h1>
        <form action="submit" className='form'>
            <button className='form__button'>Add Budget</button>
            <input type="text" className='form__input' />
        </form>
        <div></div>
        </main>


    )
}