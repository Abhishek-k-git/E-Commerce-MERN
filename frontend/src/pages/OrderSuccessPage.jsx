import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { resetOrder } from "../features/order/orderSlice";

function OrderSuccessPage() {
   const params = useParams() 
   const dispatch = useDispatch();
   
   useEffect(()=>{
    // reset cart
    dispatch(resetCartAsync())
    // reset currentOrder
    dispatch(resetOrder())
   },[dispatch])
   
  return (
    <>
    {!params.id &&  <Navigate to='/' replace={true}></Navigate>}
    <main className="w-screen h-screen bg-white flex items-center justify-center">
    <div class="bg-white p-6 shadow-xl rounded-xl flex justify-center items-center flex-col">
      <div className=""><img className="h-16 w-16" src="https://img.icons8.com/color/28/000000/check--v2.gif" /></div>
      <div class="text-center">
          <h3 class="md:text-base text-xs text-green-600 font-semibold text-center">Order Placed Successfully</h3>
          <h2 className="text-gray-700 my-2 font-semibold text-base">Order Number #{params?.id}</h2>
          <p class="text-gray-600 my-2">Thank you for completing your order</p>
          <div class="py-10 text-center">
              <Link to='/' class="px-8 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2 rounded-md">
                  GO BACK 
              </Link>
          </div>
      </div>
    </div>
    </main>
    </>
  );
}

export default OrderSuccessPage;
