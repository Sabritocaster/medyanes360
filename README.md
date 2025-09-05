📝 Todo App (Next.js + Prisma + MongoDB + Zustand)

Modern ve kullanıcı dostu bir Todo Uygulaması.Bu full-stack uygulama, Next.js App Router, Prisma ORM, MongoDB ve Zustand kullanılarak geliştirilmiştir.

🚀 Özellikler

✅ Görev Ekleme: Başlık ve açıklama ile yeni görev oluşturma.

✏️ Görev Düzenleme: Inline düzenleme ile hızlı güncelleme.

🔄 Görev Tamamlama: Checkbox ile görev tamamlama/geri alma.

❌ Görev Silme: Anında UI ve veritabanından silme.

📦 Global State Yönetimi: Zustand ile hafif ve hızlı durum yönetimi.

🎨 Modern UI: TailwindCSS ile gri arka plan ve beyaz kart tasarımı.



🛠️ Teknoloji Seti

Next.js 15 (App Router) - Frontend ve backend framework.

Prisma ORM - Veritabanı işlemleri için ORM.

MongoDB Atlas - Bulut tabanlı NoSQL veritabanı.

Zustand - Hafif global state yönetimi.

Tailwind CSS - Stil ve tasarım için utility-first CSS framework.


⚙️ Kurulum

Repoyu Klonlayın:

git clone https://github.com/Sabritocaster/medyanes360.git

cd todo-app


Bağımlılıkları Yükleyin:
npm install


.env.local Dosyası Oluşturun:MongoDB bağlantı stringinizi ve API URL’nizi ekleyin:

DATABASE_URL="mongodb+srv://<kullanici>:<sifre>@cluster.mongodb.net/todos"

NEXT_PUBLIC_API_URL="http://localhost:3000"


Prisma’yı Ayarlayın:

npx prisma generate

npx prisma db push


Projeyi Çalıştırın:

npm run dev

Uygulama http://localhost:3000 adresinde çalışacaktır.




✨ Örnek Kullanım

Görev Ekle: “Alışveriş yap” başlıklı bir görev ekleyin.

Açıklama Ekle: “Süt, ekmek, yumurta” gibi detaylar girin.

Tamamlama: Checkbox ile görevi tamamlandı olarak işaretleyin (üzeri çizilir).

Düzenleme: ✏️ simgesiyle görevi düzenleyin.

Silme: ❌ simgesiyle görevi silin.


🌐 Deploy

https://medyanes360-p8rk.vercel.app/

https://medyanes360-p8rk.vercel.app/api/todos

