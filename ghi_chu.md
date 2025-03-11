

<p>
/* Định nghĩa styles mặc định */ 
<br />
@layer base {
  h1 {
    @apply text-3xl font-bold text-gray-900;
  }

  p {
    @apply text-gray-700 leading-7;
  }

  body {
    @apply bg-gray-100 text-gray-800;
  }

  a {
    @apply text-blue-500 hover:underline;
  }
}
    Sau đó trong file html chỉ cần gọi h1 là đủ không cần thêm class gì nữa, vì
    đã khai báo ở trên
</p>

<p>Đối với layer utilities thì giải thích như sau</p>
<p>Sử dụng @layer utilities khi bạn muốn tạo các class có thể sử dụng như Tailwind mặc định.</p>

<p>

Ví dụ khai báo: <br />

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .bg-gradient {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
  }

  .border-glow {
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
}

</p>

<p>
Cách dùng: gọi như class của tailwind <br />


<div className="text-shadow bg-gradient p-4 border-glow">
  Nội dung có hiệu ứng đẹp mắt
</div>

</p>