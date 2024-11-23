import {Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const App = () => {
    return(
        <div className='Debug'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>            
        </div>

    );
}

export default App;