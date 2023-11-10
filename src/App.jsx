import './App.css';
import soldTV from "./helpers/soldTV.js";
import {inventory} from "./constants/inventory.js";

function App() {
    return (
        <main className='page'>
            <h1>Tech it easy dashbord</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className='overzicht'>
                    <div className='soldTV'>
                        <h3>Aantalverkochte producten</h3>
                        {/*<p>{soldTV(inventory)}</p>*/}
                    </div>

                    <div className='inStock'>
                        <h3>Aantal ingekochte producten</h3>
                        {/*<p>{inStockTv(inventory)}</p>*/}
                    </div>

                    <div className='salesToMake'>
                        <h3>Aantal te verkopen producten</h3>
                        {/*<p>{calcSalesToMake(inStockCounter, tvCounter)}</p>*/}
                    </div>
                </div>
            </section>

            <h2>Best verkochte TV</h2>
            <section className='bestSoldTV'>

            </section>

        </main>
    )
}

export default App
