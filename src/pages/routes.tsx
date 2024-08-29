import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Restaurant from './Restaurant';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Navigate to='/'/>}/>
            <Route path='/restaurantes/:id' element={<Restaurant />}/>
        </Routes>
    );
}

export default Router;