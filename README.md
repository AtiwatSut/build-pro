# ช่างตี๋รับเหมา - Web Profile (Static & PWA Ready)

เว็บไซต์หน้าโปรไฟล์รับเหมาก่อสร้างสำหรับช่างตี๋ ออกแบบตรงตามตัวอย่างอ้างอิง รองรับการเปิดบนทุกอุปกรณ์ (Responsive Mobile, Tablet, Desktop) และรองรับการติดตั้งเป็น Progressive Web App (PWA)

## 📁 โครงสร้างไฟล์ในโปรเจกต์
```
web-profile/
├── index.html              # ไฟล์หน้าเว็บหลัก (Semantic HTML5)
├── css/
│   └── style.css           # สไตล์ชีท ตกแต่งตามแบบอ้างอิง 100%
├── js/
│   └── app.js              # สคริปต์ Lightbox, Navigation, และ PWA Service Worker
├── manifest.json           # การตั้งค่า PWA ติดตั้งเป็นแอปบนมือถือได้
├── sw.js                   # Service Worker สำหรับ Offline Caching & โหลดเร็ว
├── assets/
│   ├── icons/              # ไอคอน PWA และ Favicon (32px, 180px, 192px, 512px, SVG)
│   └── images/             # รูปภาพประกอบคุณภาพสูงทุกส่วน
└── README.md
```

## 🚀 วิธีการนำขึ้น GitHub Pages

### วิธีที่ 1: Deploy โฟลเดอร์ `web-profile` ผ่าน GitHub Repository
1. นำไฟล์ทั้งหมดในโฟลเดอร์นี้ (`web-profile/*`) ไปไว้ที่ Root ของ Repository บน GitHub หรือ Push กิ่ง `main` / `gh-pages`
2. ไปที่หน้า GitHub Repository -> **Settings** -> **Pages**
3. ที่หัวข้อ **Build and deployment** ให้เลือก:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (หรือกิ่งที่ต้องการ) และโฟลเดอร์ `/ (root)`
4. กด **Save** รอประมาณ 1-2 นาที คุณจะได้ลิงก์เว็บไซต์พร้อมใช้งาน เช่น `https://<username>.github.io/<repo-name>/`

---

## ✨ จุดเด่นและฟีเจอร์ของหน้าเว็บ
- **ดีไซน์ระดับมืออาชีพ**: ใช้ฟอนต์ Prompt, โทนสีทอง/เทาเข้มหรูหรา น่าเชื่อถือ
- **เน้นโปรไฟล์ช่างตัวจริง**: ดูแลงานเองทุกขั้นตอน คุยง่าย ไม่ผ่านคนกลาง
- **ผลงานและบริการครบครัน**: มีรูปภาพผลงานจริง พร้อมระบบ Lightbox คลิกดูภาพขยายคมชัด
- **ปุ่มติดต่อรวดเร็ว**: รองรับการกดโทรออกทันที (`tel:0987654321`), ลิงก์ LINE, และ Facebook
- **Mobile Floating Action Bar**: ปุ่มโทรและทักไลน์ติดขอบล่างหน้าจอเมื่อเปิดบนสมาร์ทโฟน
- **PWA Ready**: สามารถ "Add to Home Screen" ติดตั้งลงหน้าจอมือถือได้เหมือนแอปพลิเคชัน
