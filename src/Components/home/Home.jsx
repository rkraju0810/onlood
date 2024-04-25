import React from 'react'
import Header from './header/Header'
import ExplorePage from '../ExplorePage.jsx/ExplorePage'
import Exploremenu from '../exploremenu/Exploremenu'
import Moblieapp from '../mobileapp/Moblieapp'
import Footer from '../footer/Footer'

const Home = ({category,setCategory,foodlist}) => {
  return (
    <>
    <Header />
    <ExplorePage 
    category = {category}
    setCategory = {setCategory} 
    />
    <Exploremenu 
    category = {category}
    foodlist = {foodlist}
    setCategory = {setCategory} 
    />
    <Moblieapp />
    <Footer />
    </>
  )
}

export default Home

 {/* <div className="similar-products">
                        
                        {
                        // console.log(foodlist.filter((item,index) => item.category === category))
                          foodlist.filter((item)=> item.category == category && item != foodlist[desID]).map((item)=>
                        //
                          <div key={item._id} className='similar-item' >
                          <div className="similar-food-item-img-container">
                              <img src={item.image} alt="" className='similar-food-item-img' />
                              {itemCount[item._id] > 0 ?

                                  <div className="add-remove-icon">
                                      <img src={assets.remove_icon_red} alt="" className='remove-icon-red' onClick={() => handleRemove(item._id)} />
                                      <p>{itemCount[item._id] || 0}</p>
                                      <img src={assets.add_icon_green} alt="" className='add-icon-green' onClick={() => handleAdd(item._id)} />
                                  </div> : <img src={assets.add_icon_white} alt="" className='add-icon-white' onClick={() => handleAdd(item._id)} />
                              }


                          </div>
                          <div className="similar-food-item-info">
                              <div className="similar-food-item-name-ratings">
                                  <h4>{item.name}</h4>
                                  <img src={assets.rating_starts} alt="" className='similar-star-rating' />
                              </div>
                              <p className='similar-food-item-des'>{item.description}</p>
                              <p className='similar-food-item-price'>{"$ " + item.price}</p>
                          </div>
                      </div>
                        )
                        
                        }
                    </div> */}