import { useState, useEffect } from 'react';

// Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// Types
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: string;
  category: string;
  image?: string;
  popular?: boolean;
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

// Menu Data
const menuItems: MenuItem[] = [
  // Завтраки
  { id: 1, name: 'Английский завтрак', description: 'Яйца, бекон, колбаски, томаты, грибы, фасоль, тост', price: 4600, weight: '450г', category: 'Завтраки', popular: true },
  { id: 2, name: 'Турецкий завтрак', description: 'Брынза, оливки, помидоры, огурцы, яйца, лаваш', price: 6800, weight: '400г', category: 'Завтраки' },
  { id: 3, name: 'Яйца Бенедикт', description: 'Яйца пашот, бекон, голландский соус, тост', price: 3100, weight: '280г', category: 'Завтраки' },
  { id: 4, name: 'Сырники с ягодами', description: 'Панкейки, свежие ягоды, кленовый сироп, сливки', price: 3650, weight: '300г', category: 'Завтраки' },

  // Салаты
  { id: 5, name: 'Цезарь с курицей', description: 'Романо, курица гриль, пармезан, соус цезарь, croutons', price: 3350, weight: '250г', category: 'Салаты', popular: true },
  { id: 6, name: 'Греческий салат', description: 'Огурцы, помидоры, перец, оливки, фета, оливковое масло', price: 3450, weight: '280г', category: 'Салаты' },
  { id: 7, name: 'Кобб', description: 'Соус Кобб, айсберг, черри, яйцо, клубника, куриное филе', price: 3450, weight: '350г', category: 'Салаты', popular: true },
  { id: 8, name: 'Тропик', description: 'Мороженое, яблоко, груша, манго, грейпфрут, мак', price: 3750, weight: '220г', category: 'Салаты' },

  // Супы
  { id: 9, name: 'Том-Ям', description: 'Креветки, мидии, грибы, лемонграсс, кокосовое молоко', price: 4850, weight: '400мл', category: 'Супы', popular: true },
  { id: 10, name: 'Крем-суп из тыквы', description: 'Тыква, сливки, специи, тыквенные семечки', price: 2200, weight: '350мл', category: 'Супы' },
  { id: 11, name: 'Финский суп с лососем', description: 'Лосось, картофель, морковь, кинза, плавленный сыр', price: 3800, weight: '400мл', category: 'Супы' },
  { id: 12, name: 'Рамен', description: 'Лапша, бульон, свинина чашу, яйцо, бамбук, нори', price: 4100, weight: '500мл', category: 'Супы', popular: true },

  // Паста
  { id: 13, name: 'Паста Карбонара', description: 'Спагетти, бекон, пармезан, сливочный соус', price: 3200, weight: '250г', category: 'Паста', popular: true },
  { id: 14, name: 'Паста с морепродуктами', description: 'Пенне, креветки, мидии, белое вино, чеснок', price: 4350, weight: '350г', category: 'Паста' },
  { id: 15, name: 'Паста с индейкой и страчателлой', description: 'Паста, индейка, страчателла, трюфельное масло', price: 4100, weight: '250г', category: 'Паста' },
  { id: 16, name: 'Паста Альфредо', description: 'Шампиньон, микрозелень, пенне паста, сыр пармезан', price: 4100, weight: '280г', category: 'Паста' },

  // Пицца
  { id: 17, name: 'Маргарита', description: 'Томатный соус, моцарелла, базилик', price: 2800, weight: '350г', category: 'Пицца', popular: true },
  { id: 18, name: 'Пепперони', description: 'Томатный соус, моцарелла, пепперони', price: 3100, weight: '380г', category: 'Пицца', popular: true },
  { id: 19, name: 'Пицца с Семгой', description: 'Сливочный соус, руккола, лосось', price: 3100, weight: '360г', category: 'Пицца' },
  { id: 20, name: 'Альфредо', description: 'Индейка копченная, руккола, соус альфредо, шампиньон', price: 3250, weight: '370г', category: 'Пицца' },
  { id: 21, name: '4 сыра', description: 'Моцарелла, пармезан, горгонзола, дор блю', price: 3800, weight: '350г', category: 'Пицца' },

  // Горячие блюда
  { id: 22, name: 'Лосось в сливочном соусе', description: 'Стейк из лосося, сливочный соус, овощи', price: 5600, weight: '350г', category: 'Горячие блюда', popular: true },
  { id: 23, name: 'Сибас с овощами', description: 'Сибас, руккола, гранат, соус винегрет', price: 4800, weight: '380г', category: 'Горячие блюда' },
  { id: 24, name: 'Курица конфи', description: 'Куриная ножка, бэйби морковь, черри', price: 3800, weight: '350г', category: 'Горячие блюда' },
  { id: 25, name: 'Курица по-французски', description: 'Курица, сыр, помидоры, сливочный соус', price: 4300, weight: '400г', category: 'Горячие блюда' },
  { id: 26, name: 'Курица на гриле', description: 'Цыпленок гриль, запеченные черри, соус Очелизме', price: 3700, weight: '400г', category: 'Горячие блюда', popular: true },

  // Бургеры
  { id: 27, name: 'Bloom Room Бургер комбо', description: 'Бриошь, говяжья котлета, соус 1000 островов, айсберг, помидоры, фри, луковые кольца', price: 5300, weight: '450г', category: 'Бургеры', popular: true },
  { id: 28, name: 'Сырный бургер комбо', description: 'Бургер с двойным сыром, бекон, соус, картофель фри', price: 5400, weight: '420г', category: 'Бургеры' },
  { id: 29, name: 'Куриный бургер', description: 'Куриное филе, айсберг, помидоры, соус', price: 5100, weight: '380г', category: 'Бургеры' },

  // Сэндвичи
  { id: 30, name: 'Сэндвич итальянский', description: 'Тартин с льняными семечками, куриное бедро, соус песто, халапеньо, салями', price: 4100, weight: '280г', category: 'Сэндвичи' },
  { id: 31, name: 'Кубинский сэндвич', description: 'Тартин с льняными семечками, соленые огурцы, Бон филе', price: 4100, weight: '320г', category: 'Сэндвичи' },

  // Закуски и сеты
  { id: 32, name: 'Bloom Room сет', description: 'Ассорти из закусок ресторана', price: 6900, weight: '350г', category: 'Закуски', popular: true },
  { id: 33, name: 'Хайдари', description: 'Хайдари, укроп, микрозелень', price: 1800, weight: '250г', category: 'Закуски' },
  { id: 34, name: 'Турецкий сет', description: 'Хумус, бабагануш, эзме, хлеб', price: 4300, weight: '350г', category: 'Закуски' },
  { id: 35, name: 'Эзме', description: 'Очелизме, сыр Фета, начос', price: 1800, weight: '200г', category: 'Закуски' },
  { id: 36, name: 'Бабагануш', description: 'Баклажанная паста, тахини, оливковое масло', price: 1800, weight: '150г', category: 'Закуски' },
  { id: 37, name: 'Куриные палочки', description: 'Хрустящие куриные полоски в панировке', price: 4200, weight: '200г', category: 'Закуски' },
  { id: 38, name: 'Самоса', description: 'Индийские пирожки с овощной начинкой', price: 2900, weight: '100г', category: 'Закуски' },
  { id: 39, name: 'Спринг-ролл', description: 'Рисовые роллы с овощами', price: 2900, weight: '100г', category: 'Закуски' },

  // Десерты
  { id: 40, name: 'Вафли Нутелла', description: 'Бельгийские вафли, Нутелла, банан, ягоды', price: 3200, weight: '250г', category: 'Десерты', popular: true },
  { id: 41, name: 'Тирамису', description: 'Классический итальянский десерт', price: 3500, weight: '180г', category: 'Десерты' },
  { id: 42, name: 'Сказочные чизкейк', description: 'Нежный чизкейк с ягодами', price: 3800, weight: '200г', category: 'Десерты' },
  { id: 43, name: 'Шоколадный фондан', description: 'Шоколадный кекс с жидкой начинкой, ванильное мороженое', price: 2600, weight: '220г', category: 'Десерты' },

  // Напитки
  { id: 44, name: 'Капучино', description: 'Эспрессо с молочной пенкой', price: 1200, weight: '300мл', category: 'Кофе', popular: true },
  { id: 45, name: 'Латте', description: 'Эспрессо с большим количеством молока', price: 1300, weight: '350мл', category: 'Кофе' },
  { id: 46, name: 'Айс Латте', description: 'Холодный латте со льдом', price: 1500, weight: '400мл', category: 'Кофе' },
  { id: 47, name: 'Флэт Уайт', description: 'Крепкий кофе с бархатистым молоком', price: 1400, weight: '250мл', category: 'Кофе' },
  { id: 48, name: 'Свежевыжатый сок', description: 'Апельсиновый/яблочный/морковный', price: 1800, weight: '300мл', category: 'Напитки' },
  { id: 49, name: 'Лимонад домашний', description: 'Авторский лимонад', price: 1600, weight: '400мл', category: 'Напитки' },
  { id: 50, name: 'Молочный коктейль', description: 'Клубничный/шоколадный/ванильный', price: 1900, weight: '350мл', category: 'Напитки' },
];

const reviews: Review[] = [
  {
    id: 1,
    name: 'Анна К.',
    rating: 5,
    text: 'Очень приятное кафе с разнообразным меню. Здесь можно не только выпить вкусный кофе и попробовать десерты, но и заказать полноценные горячие блюда. Порции большие, еда свежая и красиво подана. Атмосфера спокойная и уютная, персонал приветливый. Отличное место для обеда и для дружеских встреч за чашкой кофе.',
    date: '2 недели назад'
  },
  {
    id: 2,
    name: 'Дмитрий М.',
    rating: 4,
    text: 'Еда вкусная, но готовили очень долго, около 40 минут. Интерьер очень красивый, ждали в очереди, чтобы сфотографировать телефонную будку. Внутри красиво, единственное - всегда очередь в туалет. В целом, место стоит посещения!',
    date: '1 месяц назад'
  },
  {
    id: 3,
    name: 'Елена В.',
    rating: 5,
    text: 'Ходили с подругами, всё очень понравился! Паста карбонара — просто бомба, а десерты тают во рту. Обслуживание на высшем уровне, официанты очень приветливые. Обязательно вернусь ещё!',
    date: '3 недели назад'
  },
  {
    id: 4,
    name: 'Артём С.',
    rating: 5,
    text: 'Лучший бургер в Астане! Комбо с картошкой и луковыми кольцами — это нечто. Порции огромные, цены адекватные. Рекомендую всем любителям вкусной еды!',
    date: '1 неделю назад'
  },
  {
    id: 5,
    name: 'Марина Л.',
    rating: 5,
    text: 'Отметили здесь день рождения, нам очень понравилось! Нас порадовали десертом в подарок. Атмосфера невероятная, цветочный декор создаёт настроение. Спасибо за прекрасный вечер!',
    date: '2 недели назад'
  },
];

// Navigation Component
const Navbar = ({ onMenuClick, cartCount, onCartClick }: { onMenuClick: () => void; cartCount: number; onCartClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button onClick={onMenuClick} className={`md:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <MenuIcon />
            </button>
            <a href="#" className={`ml-4 md:ml-0 text-2xl font-bold tracking-wider ${scrolled ? 'text-rose-600' : 'text-white'}`}>
              BLOOM ROOM
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['Главная', 'Меню', 'О нас', 'Отзывы', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-rose-600' : 'text-white hover:text-rose-200'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={onCartClick} className={`relative p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href="tel:+77057774440"
              className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${scrolled ? 'bg-rose-600 text-white hover:bg-rose-700' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}
            >
              <PhoneIcon />
              <span className="text-sm font-medium">Заказать столик</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="главная" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
          BLOOM ROOM
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Европейская кухня, уютная атмосфера и незабываемые вкусы
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#меню"
            className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-colors shadow-lg"
          >
            Смотреть меню
          </a>
          <a
            href="tel:+77057774440"
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
          >
            Позвонить нам
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <LocationIcon />
            <span>пр. Туран, 52, Астана</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <span>Ежедневно 09:00 - 24:00</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="о нас" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">О нашем ресторане</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Добро пожаловать в Bloom Room Cafe
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bloom Room Cafe — это уютное кафе с разнообразным меню европейской кухни. 
              Здесь вы можете насладиться не только вкусным кофе и десертами, но и заказать 
              полноценные горячие блюда. Порции большие, еда свежая и красиво подана.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Атмосфера спокойная и уютная, персонал приветливый. Отличное место для обеда, 
              ужина или дружеской встречи за чашкой кофе. Каждому гостью мы дарим особое внимание 
              и заботу.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-rose-50 rounded-xl">
                <div className="text-3xl font-bold text-rose-600">4.7</div>
                <div className="text-sm text-gray-600">Рейтинг на 2ГИС</div>
              </div>
              <div className="text-center p-4 bg-rose-50 rounded-xl">
                <div className="text-3xl font-bold text-rose-600">5000+</div>
                <div className="text-sm text-gray-600">Отзывов</div>
              </div>
              <div className="text-center p-4 bg-rose-50 rounded-xl">
                <div className="text-3xl font-bold text-rose-600">75</div>
                <div className="text-sm text-gray-600">Мест</div>
              </div>
              <div className="text-center p-4 bg-rose-50 rounded-xl">
                <div className="text-3xl font-bold text-rose-600">50+</div>
                <div className="text-sm text-gray-600">Позиций меню</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/pizza.jpg" alt="Пицца" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src="/images/steak.jpg" alt="Стейк" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src="/images/burger.jpg" alt="Бургер" className="rounded-xl shadow-lg w-full h-48 object-cover col-span-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Menu Section
const Menu = ({ onAddToCart }: { onAddToCart: (item: MenuItem) => void }) => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const categories = ['Все', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = activeCategory === 'Все' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="меню" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наше меню</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Откройте для себя разнообразие вкусов нашей европейской кухни
          </p>
          <div className="w-24 h-1 bg-rose-600 mx-auto mt-4"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-600 text-xs rounded-full font-medium">
                        Хит
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-rose-600">{item.price.toLocaleString()} ₸</span>
                  <span className="text-gray-400 text-sm ml-2">/ {item.weight}</span>
                </div>
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-700 transition-colors"
                >
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const Gallery = () => {
  const images = [
    '/images/pizza.jpg',
    '/images/steak.jpg',
    '/images/burger.jpg',
    '/images/salad.jpg',
    '/images/dessert.jpg',
    '/images/coffee.jpg',
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Галерея</h2>
          <p className="text-gray-600">Наши блюда и атмосфера</p>
          <div className="w-24 h-1 bg-rose-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer">
              <img
                src={img}
                alt={`Фото ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const Reviews = () => {
  return (
    <section id="отзывы" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Отзывы гостей</h2>
          <p className="text-gray-600">Что говорят о нас наши посетители</p>
          <div className="w-24 h-1 bg-rose-600 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-800">{review.name}</div>
                <div className="text-sm text-gray-400">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="контакты" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-gray-400">Мы ждём вас!</p>
          <div className="w-24 h-1 bg-rose-600 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-rose-600 p-3 rounded-full">
                <LocationIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                <p className="text-gray-400">проспект Туран, 52, Астана</p>
                <p className="text-gray-400">Нура район, Z05X4E2</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-rose-600 p-3 rounded-full">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                <a href="tel:+77057774440" className="text-gray-400 hover:text-white transition-colors">
                  +7 (705) 777-44-40
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-rose-600 p-3 rounded-full">
                <ClockIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                <p className="text-gray-400">Ежедневно: 09:00 - 24:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-rose-600 p-3 rounded-full">
                <InstagramIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Социальные сети</h3>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href="https://instagram.com/bloomroom.cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://wa.me/77057774440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-80 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1234567890123!2d71.39741644!3d51.10550277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA2JzE5LjgiTiA3McKwMjMnNTAuNyJF!5e0!3m2!1sru!2skz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold tracking-wider">BLOOM ROOM</div>
          <div className="text-gray-400 text-sm text-center">
            © 2025 Bloom Room Cafe. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/bloomroom.cafe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/77057774440" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Cart Sidebar
const CartSidebar = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
}: {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Корзина</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <CloseIcon />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                <CartIcon />
                <p className="mt-4">Корзина пуста</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-rose-600 font-semibold">{item.price.toLocaleString()} ₸</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-rose-600 text-white hover:bg-rose-700 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {items.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold">Итого:</span>
                <span className="text-2xl font-bold text-rose-600">{total.toLocaleString()} ₸</span>
              </div>
              <a
                href={`https://wa.me/77057774440?text=Здравствуйте! Хочу сделать заказ:%0A${items.map(item => `${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()}₸`).join('%0A')}%0AИтого: ${total.toLocaleString()}₸`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-rose-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-rose-700 transition-colors"
              >
                Заказать через WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Mobile Menu
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-rose-600">BLOOM ROOM</span>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <CloseIcon />
            </button>
          </div>
          <nav className="space-y-4">
            {['Главная', 'Меню', 'О нас', 'Отзывы', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={onClose}
                className="block text-gray-700 hover:text-rose-600 font-medium py-2"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

// Main App
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
      />
      <Navbar onMenuClick={() => setMobileMenuOpen(true)} cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <About />
      <Menu onAddToCart={addToCart} />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
