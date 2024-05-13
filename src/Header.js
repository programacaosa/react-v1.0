import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const DesktopContent = () => {
    const citiesWithSubCities = [
      { id: 1, name: 'Aveiro', link: '/city-a', subCities: ['SubCity A1', 'SubCity A2', 'SubCity A3'] },
      { id: 2, name: 'Algarve', link: '/city-b', subCities: ['SubCity B1', 'SubCity B2', 'SubCity B3'] },
      { id: 3, name: 'Braga', link: '/city-c', subCities: ['SubCity C1', 'SubCity C2', 'SubCity C3'] },
      { id: 4, name: 'Coimbra', link: '/city-d', subCities: ['Cidede1', 'Cidade2'] },
      { id: 5, name: 'Faro', link: '/city-e', subCities: ['Sub1', 'Sub2', 'Sub3'] },
      { id: 6, name: 'Leiria', link: '/city-f', subCities: ['SubCity D1', 'SubCity D2', 'SubCity D3'] },
      { id: 7, name: 'Lisboa', link: '/city-g', subCities: ['SubCity D1', 'SubCity D2', 'SubCity D3'] },
      { id: 8, name: 'Porto', link: '/city-h', subCities: ['SubCity D1', 'SubCity D2', 'SubCity D3'] },
      { id: 9, name: 'Santarém', link: '/city-i', subCities: ['SubCity D1', 'SubCity D2', 'SubCity D3'] },
      { id: 10, name: 'Setúbal', link: '/city-j', subCities: ['SubCity D1', 'SubCity D2', 'SubCity D3'] },
      { id: 11, name: 'Viseu', link: '/city-k', subCities: ['SubCity D1', 'SubCity D2', 'SubCity D3'] },
    ];

    const [hoveredCity, setHoveredCity] = useState(null);

    return (
      <div className="desktop-content" style={{ display: 'flex', marginBottom: '20px' }}>
        <div className="menu" style={{ width: '250px', backgroundColor: '#f2f2f2', textAlign: 'center', borderRadius: '10px', padding: '20px', marginRight: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <button className="desktop-btn" style={{ backgroundColor: 'white', color: '#E83E8C', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', marginRight: '10px', borderColor: '#E83E8C' }}>Homens</button>
            <button className="desktop-btn" style={{ backgroundColor: 'white', color: '#E83E8C', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', marginRight: '10px', borderColor: '#E83E8C' }}>Mulheres</button>
            <button className="desktop-btn" style={{ backgroundColor: 'white', color: '#E83E8C', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', marginRight: '10px', borderColor: '#E83E8C' }}>Travesti</button>
            <button className="desktop-btn" style={{ backgroundColor: 'white', color: '#E83E8C', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px', borderColor: '#E83E8C' }}>Centros de massagem</button>
          </div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {citiesWithSubCities.map((city) => (
              <li
                key={city.id}
                onMouseEnter={() => setHoveredCity(city.id)}
                onMouseLeave={() => setHoveredCity(null)}
                style={{ position: 'relative', backgroundColor: hoveredCity === city.id ? '#E83E8C' : 'transparent', borderRadius: '10px', marginBottom: '5px' }}
              >
                <Link
                  to={city.link}
                  style={{ textDecoration: 'none', color: hoveredCity === city.id ? '#ffffff' : '#5a5a5a', display: 'block', padding: '15px 0', fontWeight: 'bold', fontSize: '14px' }}
                >
                  {city.name}
                </Link>
                {hoveredCity === city.id && (
                  <ul
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '100%',
                      transform: 'translateY(-50%)',
                      backgroundColor: '#ffffff',
                      padding: '10px',
                      borderRadius: '5px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      zIndex: 1,
                    }}
                  >
                    {city.subCities.map((subCity, index) => (
                      <li key={index} style={{ padding: '5px 0', fontSize: '12px' }}>
                        {subCity}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div className="banner" style={{ marginBottom: '20px', textAlign: 'center' }}>
            <img src="foto.png" alt="Banner" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <div className="desktop-cards" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              {/* Atualizando as cartas para terem imagens de fundo */}
              <div className="card" style={{ flex: '1', backgroundImage: 'url("garotas.png")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', padding: '20px', marginRight: '10px' }}>
                <h3></h3>
                <p>..............</p>
              </div>
              <div className="card" style={{ flex: '1', backgroundImage: 'url("garotos.png")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', padding: '20px', marginRight: '10px' }}>
                <h3></h3>
                <p>..............</p>
              </div>
              <div className="card" style={{ flex: '1', backgroundImage: 'url("centros.png")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', padding: '20px', marginRight: '10px' }}>
                <h3></h3>
                <p>..............</p>
              </div>
              <div className="card" style={{ flex: '1', backgroundImage: 'url("travesti.png")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', padding: '20px' }}>
                <h3></h3>
                <p>..............</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Pesquisar"
              style={{ padding: '10px', borderRadius: '20px', border: '1px solid #ccc', width: '80%', maxWidth: '300px', color: '#000', backgroundColor: '#fff' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <button className="desktop-btn" style={{ backgroundColor: '#E41779', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px', borderColor: '#E83E8C' }}>Categoria</button>
            <button className="desktop-btn" style={{ backgroundColor: '#E41779', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px', borderColor: '#E83E8C' }}>Distrito</button>
            <button className="desktop-btn" style={{ backgroundColor: '#E41779', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', borderColor: '#E83E8C' }}>Busca avançada</button>
          </div>
        </div>
      </div>
    );
  };

  const MobileFooter = () => (
    <div className="mobile-footer" style={{ backgroundColor: '#202024', padding: '20px', borderRadius: '10px', color: '#ffffff', marginTop: '20px', backgroundImage: 'url("background-footer.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="logo-app.png" alt="Logo Footer" style={{ width: '250px', height: 'auto' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '10px' }}>Informações de Contato</h4>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '10px' }}>Termos e Condições</h4>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '10px' }}>Políticas de Privacidade</h4>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://img.freepik.com/vetores-gratis/novo-design-de-icone-x-do-logotipo-do-twitter-em-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1715040000&semt=ais" alt="Ícone X" style={{ width: '24px', height: 'auto', marginRight: '10px' }} />
          <img src="https://cdn-icons-png.flaticon.com/512/6913/6913025.png" alt="Ícone +18" style={{ width: '24px', height: 'auto', marginRight: '10px' }} />
        </div>
        <p style={{ fontSize: '14px', textAlign: 'center' }}>© Copyright 2024 All Rights Reserved</p>
      </div>
    </div>
  );

  const DesktopFooter = () => (
    <div className="desktop-footer" style={{ backgroundColor: '#202024', padding: '20px', borderRadius: '10px', color: '#ffffff', marginTop: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="logo-app.png" alt="Logo Footer" style={{ width: '250px', height: 'auto' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '10px' }}>Informações de Contato</h4>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '10px' }}>Termos e Condições</h4>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '10px' }}>Políticas de Privacidade</h4>
      </div>
      {/* Adicionando o campo de pesquisa */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
       
       
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://img.freepik.com/vetores-gratis/novo-design-de-icone-x-do-logotipo-do-twitter-em-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1715040000&semt=ais" alt="Ícone X" style={{ width: '24px', height: 'auto', marginRight: '10px' }} />
          <img src="https://cdn-icons-png.flaticon.com/512/6913/6913025.png" alt="Ícone +18" style={{ width: '24px', height: 'auto', marginRight: '10px' }} />
        </div>
        <p style={{ fontSize: '14px', textAlign: 'center' }}>© Copyright 2024 All Rights Reserved</p>
      </div>
    </div>
  );

  return (
    <div className="container" style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '0', position: 'relative' }}>
      <div className="header" style={{ backgroundColor: '#202024', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', marginBottom: '20px' }}>
        <img src="logo-app.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
        {isMobileView && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className="extra-btn" style={{ backgroundColor: '#E41779', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>
              Entrar
            </button>
            <div className="mobile-menu-toggle" style={{ cursor: 'pointer', color: 'white', fontSize: '24px' }} onClick={toggleMobileMenu}>
              ☰
            </div>
          </div>
        )}
        {!isMobileView && (
          <div className="user-info" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '20px' }} />
            <Link to="/acessar-conta" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>
              Acessar conta
            </Link>
            <Link to="/entrar" style={{ textDecoration: 'none' }}>
              <button className="entrar-btn" style={{ backgroundColor: '#E41779', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold' }}>Entrar</button>
            </Link>
          </div>
        )}
      </div>
      {isMobileView ? (
        <div className="mobile-content">
          <div className="mobile-banner" style={{ marginBottom: '20px', textAlign: 'center' }}>
            <img src="foto.png" alt="Banner" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
          <div className="mobile-search" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Pesquisar"
              style={{ padding: '10px', borderRadius: '20px', border: '1px solid #ccc', width: '80%', maxWidth: '300px' }}
            />
          </div>
          <div className="mobile-buttons" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <button className="mobile-btn" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px', border: '2px solid #E41779' }}>MULHER</button>
            <button className="mobile-btn" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px', border: '2px solid #E41779' }}>HOMEM</button>
            <button className="mobile-btn" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginRight: '10px', border: '2px solid #E41779' }}>TRAVESTI</button>
          </div>
        </div>
      ) : (
        <DesktopContent />
      )}
      {isMobileView && !isMobileMenuOpen && <MobileFooter />}
      {isMobileView && isMobileMenuOpen && (
        <div className="mobile-menu" style={{ backgroundColor: '#202024', padding: '20px', borderRadius: '10px', color: '#ffffff', marginTop: '20px' }}>
          <Link to="/acessar-conta" style={{ textDecoration: 'none', color: '#ffffff', display: 'block', padding: '15px 0', fontWeight: 'bold', fontSize: '14px' }}>
            Acessar conta
          </Link>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>MULHERES</p>
            <Link to="/menu-item-4" style={{ display: 'block' }}>
              <img src="garotas.png" alt="Menu Item 4" style={{ width: '100%', borderRadius: '5px' }} />
            </Link>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>HOMENS</p>
            <Link to="/menu-item-1" style={{ display: 'block' }}>
              <img src="garotos.png" alt="Menu Item 1" style={{ width: '100%', borderRadius: '5px' }} />
            </Link>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>TRAVESTI</p>
            <Link to="/menu-item-2" style={{ display: 'block' }}>
              <img src="travesti.png" alt="Menu Item 2" style={{ width: '100%', borderRadius: '5px' }} />
            </Link>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>MASSAGENS</p>
            <Link to="/menu-item-3" style={{ display: 'block' }}>
              <img src="centros.png" alt="Menu Item 3" style={{ width: '100%', borderRadius: '5px' }} />
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="mobile-btn" style={{ backgroundColor: '#E41779', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold' }}>ENTRAR</button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="mobile-btn" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold' }}>CADASTRAR</button>
          </div>
        </div>
      )}
      {!isMobileView && <DesktopFooter />}
    </div>
  );
};

export default Header;
