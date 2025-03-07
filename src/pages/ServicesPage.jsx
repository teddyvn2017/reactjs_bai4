import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';

const ServicesPage = () => {

  	useEffect(() => {
    
		// Thêm thẻ meta để làm SEO
		document.title = "Dịch vụ cung cấp nội thất nhanh chóng, uy tín, giá rẻ - FuniExpet";
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
				<div className="grid container max-w-[1280px] mx-auto">
					<h2 className='text-3xl text-black'>Dịch vụ của chúng tôi</h2>
				</div>
			</section>
		</Layout>
		
	)
}

export default ServicesPage