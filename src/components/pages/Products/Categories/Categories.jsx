import Button from '../../../common/Button'
import './Categories.css';

const Categories = ({updateToggle}) => {

  return (
    <section className="container my-5">
      <h3 className="font-semibold text-xl md:text-2xl text-center pb-3">
      Categories
      </h3>
      <div className="grid place-items-center gap-1 grid-cols-2 sm:grid-cols-2 sm:gap-5 md:grid-cols-4 sm:mx-4 my-3 p-3">
        <div className="card col-span-1 my-3 mx-4 sm:mx-0 border rounded-full  bg-white">
            <img
              className="resized-image rounded-full"
              src="https://www.jiomart.com/images/product/original/rvvfqj1tmm/red-chief-half-sleeves-regular-fit-poly-cotton-sea-green-solid-casual-t-shirt-for-men-product-images-rvvfqj1tmm-0-202301031210.jpg?im=Resize=(600,750)"
              alt="product image"
            />
            <Button onClick={() =>updateToggle(1) } className="shop-now bg-white-500 text-black  p-2 rounded">
              Men
            </Button>
        </div>
        <div className="card col-span-1 my-3 mx-4 sm:mx-0 border rounded-full  bg-white">
            <img
              className="resized-image rounded-full"
              src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_320,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2BJhMYveQMpBfa53y4Dobc/2"
              alt="product image"
            />
            <Button onClick={()=>updateToggle(2)} className="shop-now bg-white-500 text-black  p-2 rounded">
              Women
            </Button>
        </div>
        <div className="card col-span-1 my-3 mx-4 sm:mx-0 border rounded-full  bg-white">
            <img
              className="resized-image rounded-full  "
              src="https://www.jiomart.com/images/product/original/rvkk6nidzx/fabflee-cotton-printed-short-sleeves-t-shirt-for-girls-pack-of-2-product-images-rvkk6nidzx-0-202302141448.jpg?im=Resize=(600,750)"
              alt="product image"
            />
            <Button onClick={()=>updateToggle(3)} className="shop-now bg-white-500 text-black  p-2 rounded">
              Kids
            </Button>
        </div>
        <div className="card col-span-1 my-3 mx-4 sm:mx-0 border rounded-full  bg-white">
            <img
              className="resized-image rounded-full"
              src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_320,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4m06i00nyG7hX1TKisMak3/2"
              alt="product image"
            />
            <Button onClick={()=>updateToggle(4)} className="shop-now bg-white-500 text-black  p-2 rounded">
              View All
            </Button>
        </div>
        
        </div>
    </section>
  )
}

export default Categories