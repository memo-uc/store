/**
 * متجر الأجهزة الذكية - ملف الوظائف الرئيسي
 * تاريخ الإنشاء: 8 أبريل 2025
 */

// ===== الوظائف العامة =====

// تهيئة الموقع عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل القائمة المتجاوبة للهواتف المحمولة
    initMobileNav();
    
    // تفعيل وظائف الصفحة الحالية بناءً على المسار
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'register.html' || currentPage === 'register') {
        initRegisterForm();
    } else if (currentPage === 'login.html' || currentPage === 'login') {
        initLoginForm();
    } else if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
        initHomePage();
    } else if (currentPage.includes('product-details.html') || currentPage.includes('product-details')) {
        initProductDetails();
    }
    
    // تفعيل وظائف مشتركة
    initPasswordToggle();
});

// تهيئة القائمة المتجاوبة للهواتف المحمولة
function initMobileNav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger && nav) {
        burger.addEventListener('click', function() {
            // تبديل حالة القائمة
            nav.classList.toggle('nav-active');
            
            // تحريك أيقونة القائمة
            burger.classList.toggle('toggle');
        });
    }
}







// ===== وظائف الصفحة الرئيسية =====

function initHomePage() {
    // تفعيل تصفية المنتجات حسب الفئة
    initCategoryFilter();
    
    // تفعيل زر عرض المزيد من المنتجات
    const viewMoreBtn = document.querySelector('.view-more button');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            loadMoreProducts();
        });
    }
    
}

// تفعيل تصفية المنتجات حسب الفئة
function initCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterButtons.length && productCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة الفئة النشطة من جميع الأزرار
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // إضافة الفئة النشطة للزر المحدد
                this.classList.add('active');
                
                // الحصول على فئة التصفية
                const filterCategory = this.getAttribute('data-category');
                
                // تصفية المنتجات
                productCards.forEach(card => {
                    if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}
