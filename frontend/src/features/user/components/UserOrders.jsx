import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchLoggedInUserOrderAsync,
  selectUserInfo,
  selectUserInfoStatus,
  selectUserOrders,
} from '../userSlice';
import { ThreeDots } from 'react-loader-spinner';

export default function UserOrders() {
  const dispatch = useDispatch();
  const orders = useSelector(selectUserOrders);
  const status = useSelector(selectUserInfoStatus);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync());
  }, [dispatch]);

  return (
    <div className='my-6 min-h-screen bg-white'>
      {orders && orders.map((order) => (
        <div key={order.id}>
          <div>
            <div className="mx-auto mt-6 bg-white max-w-7xl ">
              <div className="border-t border-gray-200 py-4">
                <h1 className="text-base mt-2 font-semibold tracking-tight text-blue-600">
                  Order #{order.id}
                </h1>
                {(order.status==='delivered') ? 
                  <h3 className="text-sm mb-2 font-semibold tracking-tight text-green-600">
                    Order Status : {order.status}
                  </h3> :
                  <h3 className="text-sm mb-2 font-semibold tracking-tight text-red-600">
                    Order Status : {order.status}
                  </h3> 
                }
                
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="flex py-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.product.id}>{item.product.title}</a>
                              </h3>
                              <p className="ml-4">₹{item.product.discountPrice}</p>
                            </div>
                            <p className="text-sm text-gray-600">
                              {item.product.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty :{item.quantity}
                              </label>
                            </div>

                            <div className="flex"></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>₹ {order.totalAmount}</p>
                </div>
                <div className="flex justify-between my-1 text-sm font-medium text-gray-600">
                  <p>Total Items in Cart</p>
                  <p>{order.totalItems} items</p>
                </div>
                <p className="mt-6 mb-2 text-sm font-semibold text-gray-600">
                  Shipping Address :
                </p>
                <div className="flex justify-between gap-x-6 px-5 py-4 border-solid border-2 border-blue-400">
                  <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-blue-700">
                        {order.selectedAddress.name}
                      </p>
                      <p className="mt-1 truncate text-sm leading-4 text-gray-600">
                        {order.selectedAddress.street}
                      </p>
                      <p className="mt-1 truncate text-sm leading-4 text-gray-600">
                        {order.selectedAddress.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900 flex items-center gap-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-600 flex items-center gap-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {order.selectedAddress.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
       {status === 'loading' ? (
        <div className='w-screen h-screen fixed top-0 left-0 bg-white opacity-40 flex items-center justify-center'>
          <ThreeDots height="80" width="80" radius="9" color="blue" ariaLabel="three-dots-loading"
          wrapperStyle={{}} wrapperClassName="" visible={true}
          />
        </div>
      ) : null}
    </div>
  );
}
