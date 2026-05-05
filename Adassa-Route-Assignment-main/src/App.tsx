import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { blogData } from './myData';


function Navbar() {
  return (
    <div className="top-part">
      <div className="container d-flex align-items-center justify-content-between">
        
        <Link to="/" className="logo-text">عدسة</Link>
        
        <div>
          <Link to="/" className="nav-link-simple">الرئيسية</Link>
          <Link to="/blog" className="nav-link-simple">المدونة</Link>
          <Link to="/about" className="nav-link-simple">من نحن</Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          <i className="fa-solid fa-magnifying-glass text-white"></i>
          <button className="orange-button">ابدأ القراءة</button>
        </div>

      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="big-banner shabaka">
      <div className="container">
        <div className="big-heading">
          اكتشف فن <span style={{color: '#ff7e20'}}>التصوير الفوتوغرافي</span>
        </div>
        <p style={{fontSize: '20px', color: '#888', maxWidth: '600px', margin: 'auto'}}>
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>
        <div className="mt-4">
          <button className="orange-button me-2">تصفح المقالات</button>
          <button className="border-button">انضم إلينا</button>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="container py-5">
      <div className="row g-4 text-center">
        
        <div className="col-6 col-md-3">
          <div className="small-box">
            <i className="fa-solid fa-graduation-cap fs-1 mb-3" style={{color: '#ff7e20'}}></i>
            <div className="big-number">6</div>
            <div className="gray-text">دورات</div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="small-box">
            <i className="fa-solid fa-layer-group fs-1 mb-3" style={{color: '#ff7e20'}}></i>
            <div className="big-number">4</div>
            <div className="gray-text">أقسام</div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="small-box">
            <i className="fa-solid fa-users fs-1 mb-3" style={{color: '#ff7e20'}}></i>
            <div className="big-number">+10 آلاف</div>
            <div className="gray-text">متابع</div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="small-box">
            <i className="fa-solid fa-newspaper fs-1 mb-3" style={{color: '#ff7e20'}}></i>
            <div className="big-number">+50</div>
            <div className="gray-text">مقال</div>
          </div>
        </div>

      </div>
    </div>
  );
}

function BlogCard(props: any) {
  const post = props.data;
  /* function bta3et el card */

  return (
    <div className="col-md-4">
      <div className="article-box">
        <img src={post.image} className="article-image" alt="photo" />
        <div style={{padding: '25px'}}>
          <div style={{color: '#ff7e20', fontSize: '13px', marginBottom: '10px'}}>{post.category}</div>
          <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px'}}>{post.title}</div>
          <p className="gray-text mb-4" style={{lineHeight: '1.6'}}>{post.excerpt}</p>
          
          <div style={{borderTop: '1px solid #333', paddingTop: '20px'}} className="d-flex align-items-center">
            <img src={post.author.avatar} style={{width: '40px', height: '40px', borderRadius: '50%', marginLeft: '12px'}} />
            <div>
              <div style={{fontSize: '14px', fontWeight: '500'}}>{post.author.name}</div>
              <div style={{fontSize: '12px', color: '#666'}}>{post.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Featured() {
  const list = blogData.posts.filter(x => x.featured == true);
  
  return (
    <div className="container py-5">
      <div className="title-text text-center">مقالات <span style={{color: '#ff7e20'}}>مختارة</span></div>
      <div className="row g-4">
        {list.map(p => (
          <BlogCard key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

function Categories() {
  /* el aqsam elly fe el site */
  return (
    <div className="container py-5">
      <div className="title-text text-center">تصفح حسب <span style={{color: '#ff7e20'}}>التصنيفات</span></div>
      <div className="row g-4 text-center">
        
        <div className="col-6 col-md-3">
          <div className="cat-box">
            <i className="fa-solid fa-gear fs-2 mb-3" style={{color: '#ff7e20'}}></i>
            <div style={{fontWeight: 'bold'}}>تقنيات</div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="cat-box">
            <i className="fa-solid fa-user fs-2 mb-3" style={{color: '#ff7e20'}}></i>
            <div style={{fontWeight: 'bold'}}>بورتريه</div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="cat-box">
            <i className="fa-solid fa-mountain fs-2 mb-3" style={{color: '#ff7e20'}}></i>
            <div style={{fontWeight: 'bold'}}>مناظر طبيعية</div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="cat-box">
            <i className="fa-solid fa-camera fs-2 mb-3" style={{color: '#ff7e20'}}></i>
            <div style={{fontWeight: 'bold'}}>معدات</div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Latest() {
  const latest_list = blogData.posts.filter(x => x.featured == false).slice(0, 3);
  
  return (
    <div className="container py-5">
      <div className="title-text text-center">أحدث <span style={{color: '#ff7e20'}}>المقالات</span></div>
      <div className="row g-4">
        {latest_list.map(m => (
          <BlogCard key={m.id} data={m} />
        ))}
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="container">
      <div className="email-box text-center">
        <div className="title-text mb-2">اشترك في نشرتنا البريدية</div>
        <p className="gray-text mb-4">احصل على أحدث الدروس والنصائح مباشرة في بريدك الإلكتروني.</p>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3" style={{maxWidth: '500px'}}>
            <button className="orange-button">اشترك</button>
            <input type="text" className="form-control" placeholder="بريدك الإلكتروني" style={{textAlign: 'right'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bottom-part mt-5">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="logo-text">عدسة</div>
            <p className="gray-text mt-3">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <div style={{fontWeight: 'bold', marginBottom: '15px'}}>روابط سريعة</div>
            <div className="mb-2"><Link to="/" style={{color: '#888', textDecoration: 'none'}}>الرئيسية</Link></div>
            <div className="mb-2"><Link to="/blog" style={{color: '#888', textDecoration: 'none'}}>المدونة</Link></div>
            <div className="mb-2"><Link to="/about" style={{color: '#888', textDecoration: 'none'}}>من نحن</Link></div>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <div style={{fontWeight: 'bold', marginBottom: '15px'}}>التصنيفات</div>
            <div className="gray-text mb-2">تقنيات</div>
            <div className="gray-text mb-2">بورتريه</div>
            <div className="gray-text mb-2">مناظر طبيعية</div>
          </div>

          <div className="col-md-4 mb-4">
            <div style={{fontWeight: 'bold', marginBottom: '15px'}}>تابعنا</div>
            <div className="d-flex gap-3">
              <a href="#" style={{color: 'white', fontSize: '20px'}}><i className="fa-brands fa-facebook"></i></a>
              <a href="#" style={{color: 'white', fontSize: '20px'}}><i className="fa-brands fa-instagram"></i></a>
              <a href="#" style={{color: 'white', fontSize: '20px'}}><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

        </div>
        <div className="text-center mt-5 pt-4" style={{borderTop: '1px solid #222'}}>
          <p className="gray-text">© 2026 عدسة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Featured />
      <Categories />
      <Latest />
      <Newsletter />
    </>
  );
}

function Blog() {
  return (
    <div className="container text-center" style={{padding: '120px 0'}}>
      <div className="big-heading">المدونة</div>
    </div>
  );
}

function About() {
  return (
    <div className="container text-center" style={{padding: '120px 0'}}>
      <div className="big-heading">من نحن</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
