import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';
const ContactUsPage = () => {

	useEffect(() => {
	
		// Thêm thẻ meta để làm SEO
		document.title = "Liên hệ với chúng tôi - FuniExpet";
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
			<h2 className='text-3xl text-black'>Contact Us</h2>
			</div>
		</section>    
    </Layout>
  )
}

export default ContactUsPage