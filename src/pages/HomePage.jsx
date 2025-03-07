import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Craft from '../components/Craft';
import Why from '../components/Why';
import Help from '../components/Help';
import Three from '../components/Three';
import Testimonial from '../components/Testimonial';
import Recent from '../components/Recent';
import Layout from '../layouts/Layout';

const HomePage = () => {

	useEffect(() => {
		
			// Thêm thẻ meta để làm SEO
			document.title = "Trang chủ - FuniExpet";
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
		<Hero />
		<Craft />
		<Why />
		<Help />
		<Three />
		<Testimonial />
		<Recent />      
    </Layout>
  );
};

export default HomePage;