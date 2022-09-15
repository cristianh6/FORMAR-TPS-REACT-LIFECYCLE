import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import MovieList from './MovieList';
import NotFound from './NotFound';
import {Route, Routes} from 'react-router-dom'
function ContentWrapper(){
    return (
        <switch>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Routes>

                        <Route path='/' element={<ContentRowTop />}/>
                        <Route path='/movies' element={<MovieList />}/>
                        <Route path='*' element={<NotFound />}/>

                    </Routes>
                    <Footer />
                </div>
            </div>    
        </switch>
    )
}
export default ContentWrapper;