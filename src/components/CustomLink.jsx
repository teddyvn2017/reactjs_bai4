import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function CustomLink({ to, children }) {
    const location = useLocation();  // Lấy đường dẫn hiện tại
    const isActive = location.pathname === to;  // Kiểm tra nếu đường dẫn khớp

    return (
        <li className={`nav__link ${isActive ? 'active' : ''}`}>
            <Link to={to}>{children}</Link>  {/* Sử dụng Link từ React Router */}
        </li>
    );
}

export default CustomLink;