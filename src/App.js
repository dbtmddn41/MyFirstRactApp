import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Select from "./routes/Select"
import ToDoApp from "./routes/ToDoApp"
import CoinTracker from "./routes/CoinTracker"
import MovieApp from "./routes/MovieApp"
import MovieDetail from "./routes/MovieDetail"

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Select />} />
                <Route path='/todo' element={<ToDoApp />} />
                <Route path='/cointracker' element={<CoinTracker />} />
                <Route path='/movie' element={<MovieApp />} />
                <Route path='/movie/movie_detail/:id' element={<MovieDetail />} />
            </Routes>
        </Router>
    )
}

export default App;