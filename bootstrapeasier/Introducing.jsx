import React from "react";
import './web.css'

export default () => {
    const elementi = []
    const elements = [{
        url: 'https://www.myfreewalls.com/public/uploads/preview/ultra-hd-uzumaki-naruto-anime-4k-wallpaper-11623716222tku0ameou5.jpg',naslov:'Naruto Uzumaki'},        
        { url: 'https://www.otaquest.com/wp-content/uploads/2021/07/eren-yeager-feature-image-1024x576.png', naslov:'Eren Yeager' },
        { url: 'https://wallpaperaccess.com/full/386762.jpg',naslov:'Monkey D Luffy'}]

    elementi.push(<div key={Math.random()} onClick={(eleme) => { removeActive(eleme); eleme.target.classList.add('active'); }} className="img active text-light h3" style={{ backgroundImage: `url(https://recommendmeanime.com/wp-content/uploads/2022/02/baki-anime.jpg)` }}><h3>Baki</h3></div>)
    

    elements.map((item, index) => (
        
        elementi.push(<div key={index} className='img' style={{ backgroundImage: `url(${item.url})` }} onClick={(eleme) => { removeActive(eleme); eleme.target.classList.add('active'); }}><h3>{item.naslov}</h3></div>)
    ))
        ;
    var clas = 'active'
    let saklasom = document.getElementsByClassName(clas)
    
    function removeActive(e) {
        for (let el of saklasom) {
            el.classList.remove('active')
        }
        }
    


    return (
        <div className="bg-primary pb-5" style={{paddingTop:150}}>
            <div className="container shadow">
                <h1 className="mt-4 text-white">This is list of my favorite <span className="text-warning">anime</span> characters</h1>
                <hr className="mb-4" />
                <div className="phot-changer d-flex container py-5" id="anime-page">
                    {/* To make img remove actives */}
                    {elementi}
                    
                    
                </div>
            </div>
        </div>
        
    )
}