import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';

const CartPage = () => {

  const cartItems = [
    { id: 1, name: "iPhone 15", price: 999, quantity: 1, image: "https://placehold.co/50" },
    { id: 2, name: "MacBook Air", price: 1299, quantity: 2, image: "https://placehold.co/50" },
  ];

  useEffect(() => {
	
		// Thêm thẻ meta để làm SEO
		document.title = "Giỏ hàng - FuniExpet";
		const metaDesc = document.querySelector('meta[name="description"]');
		if (metaDesc) {
			metaDesc.content = "Chung toi cung cap noi that gia re, phong cach Chau Au, ben gi";
		}
		else {
			const newMeta = document.createElement('meta');
			newMeta.name = "description";
			newMeta.content = "Chung toi cung cap noi that gia re, phong cach Chau Au, ben gi";
			document.head.appendChild(newMeta);
		}
		}, []);

  return (
    <Layout>
		<section className="mt-12 py-16">
			<div className="grid container max-w-[1280px] mx-auto px-4">
				<h2 className='text-3xl text-black mb-6'>Cart Page</h2>
					<div className="overflow-x-auto">
						<table className="w-full border border-gray-200 shadow-md rounded-lg">
							<thead className="border-b">
								<tr className="bg-gray-100 text-left text-gray-700">
								<th className="p-4">Product</th>
								<th className="p-4">Price</th>
								<th className="p-4">Quantity</th>
								<th className="p-4">Total</th>
								<th className="p-4 text-center">Actions</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-400 px-8">
								{cartItems.map((item) => (
								<tr key={item.id} className="border-t border-gray-300">
									<td className="p-4 flex items-center space-x-4 px-8">
										<img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
									<span>{item.name}</span>
									</td>
									<td className="p-4">${item.price}</td>
									<td className="p-4">
									<input
										type="number"
										min="1"
										value={item.quantity}
										className="w-12 border rounded p-1 text-center"
									/>
									</td>
									<td className="p-4 font-semibold">${item.price * item.quantity}</td>
									<td className="p-4 text-center">
									<button className="bg__primary text-white px-4 py-2 rounded hover:bg__vang_nhat hover:cursor-pointer text-base">
										Remove
									</button>
									</td>
								</tr>
								))}
							</tbody>
						</table>

						<div className='flex justify-start mt-8'>
							<button className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-500 hover:cursor-pointer">
								Checkout
							</button>
						</div>
					</div>
			</div>
		</section>
    </Layout>
  )
}

export default CartPage