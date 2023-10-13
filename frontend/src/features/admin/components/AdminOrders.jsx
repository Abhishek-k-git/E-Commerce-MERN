import { useEffect, useState } from 'react';
import { ITEMS_PER_PAGE } from '../../../app/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
  updateOrderAsync,
} from '../../order/orderSlice';
import {
  PencilIcon,
  EyeIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  TicketIcon,
  CurrencyRupeeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Pagination from '../../common/Pagination';

function AdminOrders() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };
  const handleShow = () => {
    console.log('handleShow');
  };

  const handleOrderStatus = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handleOrderPaymentStatus = (e, order) => {
    const updatedOrder = { ...order, paymentStatus: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  const handleSort = (sortOption) => {
    const sort = { _sort: sortOption.sort, _order: sortOption.order };
    setSort(sort);
  };

  const chooseColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-purple-200 text-purple-700';
      case 'dispatched':
        return 'bg-yellow-200 text-yellow-700';
      case 'delivered':
        return 'bg-green-200 text-green-700';
      case 'received':
        return 'bg-green-200 text-green-700';
      case 'cancelled':
        return 'bg-red-200 text-red-700';
      default:
        return 'bg-purple-200 text-purple-700';
    }
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ sort, pagination }));
  }, [dispatch, page, sort]);

  return (
    <div className="my-2">
      <h1 className='my-6 text-lg lg:text-2xl font-bold'>All Orders</h1>
      {/* order details table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-2 border-blue-200">
              <thead className="border-b border-blue-300 bg-blue-50 text-blue-500 capitalize text-xs">
                <tr>
                  <th className="px-4 py-4 cursor-pointer"
                    onClick={(e) =>
                      handleSort({
                        sort: 'id',
                        order: sort?._order === 'asc' ? 'desc' : 'asc',
                      })
                    }><AdjustmentsHorizontalIcon className='w-4 h-4 inline'/>&nbsp;Order&nbsp; {sort._sort === 'id' &&
                      (sort._order === 'asc' ? (
                        <ChevronUpIcon className="w-4 h-4 inline"></ChevronUpIcon>
                      ) : (
                        <ChevronDownIcon className="w-4 h-4 inline"></ChevronDownIcon>
                    ))}
                  </th>
                  <th scope="col" className="px-4 py-4">Items</th>
                  <th className="px-4 py-4 cursor-pointer whitespace-nowrap"
                    onClick={(e) =>
                      handleSort({
                        sort: 'totalAmount',
                        order: sort?._order === 'asc' ? 'desc' : 'asc',
                      })
                    }>Total&nbsp; {sort._sort === 'totalAmount' &&
                      (sort._order === 'asc' ? (
                        <ChevronUpIcon className="w-4 h-4 inline"></ChevronUpIcon>
                      ) : (
                          <ChevronDownIcon className="w-4 h-4 inline"></ChevronDownIcon>
                      ))}
                  </th>
                  <th scope="col" className="px-4 py-4">Shipping Address</th>
                  <th scope="col" className="px-4 py-4">Order Status</th>
                  <th scope="col" className="px-4 py-4">Payment Method</th>
                  <th scope="col" className="px-4 py-4">Payment Status</th>
                  <th className="px-4 py-4 cursor-pointer"
                    onClick={(e) =>
                      handleSort({
                        sort: 'createdAt',
                        order: sort?._order === 'asc' ? 'desc' : 'asc',
                      })
                    }>Order Time{' '}
                    {sort._sort === 'createdAt' &&
                      (sort._order === 'asc' ? (
                        <ChevronUpIcon className="w-4 h-4 inline"></ChevronUpIcon>
                      ) : (
                        <ChevronDownIcon className="w-4 h-4 inline"></ChevronDownIcon>
                    ))}
                  </th>
                  <th className="px-4 py-4 cursor-pointer"
                    onClick={(e) =>
                      handleSort({
                        sort: 'updatedAt',
                        order: sort?._order === 'asc' ? 'desc' : 'asc',
                      })
                    }>Last Updated{' '}
                    {sort._sort === 'updatedAt' &&
                      (sort._order === 'asc' ? (
                        <ChevronUpIcon className="w-4 h-4 inline"></ChevronUpIcon>
                    ) : (
                        <ChevronDownIcon className="w-4 h-4 inline"></ChevronDownIcon>
                    ))}
                  </th>
                  <th className='px-4 py-4'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-300 text-xs">
                  <td className="whitespace-nowrap px-4 py-6 text-xs font-semibold text-gray-600">{order.id}</td>
                  <td className="whitespace-nowrap px-4 py-6 felx flex-col">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex flex-row my-2">
                        <div className="w-7">
                          <img className="w-6 h-6 rounded-full object-contain border-2 border-blue-400"
                            src={item.product.thumbnail}
                            alt={item.product.title}
                          />
                        </div>
                        <div className='flex items-center text-xs'>
                          <span className='truncate w-36'>{item.product.title}</span>
                          <TicketIcon className='w-4 h-4 inline ml-4 mt-0.5'/>{item.quantity} 
                          <CurrencyRupeeIcon className='w-4 h-4 inline ml-2 mt-0.5'/>{item.product.discountPrice}
                        </div>
                      </div>
                    ))}
                  </td>
                  <td className="whitespace-nowrap px-4 py-6 font-semibold text-green-600">₹{order.totalAmount}</td>
                  <td className="whitespace-nowrap px-4 py-6">
                    <div className="flex flex-col">
                      <p>
                        <strong className='text-gray-600 mr-2'>{order.selectedAddress.name}</strong>
                        <span>{order.selectedAddress.phone}</span>
                      </p>
                      <span>{order.selectedAddress.street},</span>
                      <p>
                        <span>{order.selectedAddress.city}</span>
                        <span className='mx-2'>{order.selectedAddress.state}</span>
                        <span>{order.selectedAddress.pinCode}</span>
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-6">
                    {order.id === editableOrderId ? (
                      <select onChange={(e) => handleOrderStatus(e, order)}>
                        <option value="pending">Pending</option>
                        <option value="dispatched">Dispatched</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    ) : (
                      <span className={`${chooseColor(order.status)} py-1 px-2 rounded-full text-xs`}>
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-6">{order.paymentMethod}</td>
                  <td className="whitespace-nowrap px-4 py-6">
                    {order.id === editableOrderId ? (
                      <select onChange={(e) => handleOrderPaymentStatus(e, order)}>
                        <option value="pending">Pending</option>
                        <option value="received">Received</option>
                      </select>
                    ) : (
                      <span className={`${chooseColor(order.paymentStatus)} py-1 px-2 rounded-full text-xs`}>
                        {order.paymentStatus}
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-6">
                    <ClockIcon className='w-4 h-4 inline mr-1'/>{order.createdAt? new Date(order.createdAt).toLocaleString():null }
                  </td>
                  <td className="whitespace-nowrap px-4 py-6">
                    <ClockIcon className='w-4 h-4 inline mr-1'/>{order.updatedAt? new Date(order.updatedAt).toLocaleString():null }
                  </td>
                  <td className='whitespace-nowrap px-4 py-6'>
                    <div className="flex item-center justify-center gap-x-2">
                      <div className="transform hover:text-purple-500 hover:scale-120 w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 text-blue-700 cursor-pointer">
                        <EyeIcon className="w-4 h-4" onClick={(e) => handleShow(order)}></EyeIcon>
                      </div>
                      <div className="transform hover:text-purple-500 hover:scale-120 w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 text-blue-700 cursor-pointer">
                        <PencilIcon className="w-4 h-4" onClick={(e) => handleEdit(order)}></PencilIcon>
                      </div>
                    </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        handlePage={handlePage}
        totalItems={totalOrders}
      ></Pagination>
    </div>
  );
}

export default AdminOrders;
