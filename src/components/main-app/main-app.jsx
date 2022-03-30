import './main-app.css';
import SearchApp from './../search-app/search-app';

const MainApp = ()=>{
    return(
        <section className='container-lg'>
            <div>
                <SearchApp/>
            </div>
        </section>
    )
}

export default MainApp;