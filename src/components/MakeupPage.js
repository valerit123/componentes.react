import React from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import './Makeup.css';

// Use images from public/img via PUBLIC_URL to avoid importing files outside of src/
const foundationImg = process.env.PUBLIC_URL + '/img/PRODUCTO-1ST-BASES.webp';
const concealerImg = process.env.PUBLIC_URL + '/img/Pre-base-primer.webp';
const blushImg = process.env.PUBLIC_URL + '/img/Captura_606x.webp';
const eyeshadowImg = process.env.PUBLIC_URL + '/img/cw281_Kit-Rostro-Atenea-1.jpg';
const mascaraImg = process.env.PUBLIC_URL + '/img/photo1720280685-e1720281055627.webp';
const lipstickImg = process.env.PUBLIC_URL + '/img/whatsapp-image-2024-02-26-at-1-53-55-pm-7-3caeeb942367c3ed7717092210850338-640-0.jpeg';


/*
  MakeupPage: página principal que usa componentes.
 
  - ProductCard: tarjeta reutilizable para cada producto
  La página lista productos comunes y explica brevemente para qué sirve cada uno.
*/

const products = [
  {
    id: 1,
    title: 'Base (Foundation)',
    description: 'Cobertura uniforme para unificar el tono de piel.',
    useFor: 'Corregir imperfecciones, unificar el tono y preparar la piel para el resto del maquillaje.',
    price: 'COP $45.000',
    image: foundationImg,
  },
  {
    id: 2,
    title: 'Corrector (Concealer)',
    description: 'Cubrir ojeras y pequeñas imperfecciones.',
    useFor: 'Iluminar bajo los ojos y camuflar manchas puntuales.',
    price: 'COP $30.000',
    image: concealerImg,
  },
  {
    id: 3,
    title: 'Rubor (Blush)',
    description: 'Aporta color y vida a las mejillas.',
    useFor: 'Dar un aspecto saludable y definir el contorno del rostro.',
    price: 'COP $25.000',
    image: blushImg,
  },
  {
    id: 4,
    title: 'Sombra de ojos (Eyeshadow)',
    description: 'Color y profundidad al párpado.',
    useFor: 'Crear formas y dar dimensión a los ojos; puede usarse para looks naturales o dramáticos.',
    price: 'COP $40.000',
    image: eyeshadowImg,
  },
  {
    id: 5,
    title: 'Máscara de pestañas (Mascara)',
    description: 'Alarga y da volumen a las pestañas.',
    useFor: 'Abrir la mirada y resaltar los ojos.',
    price: 'COP $35.000',
    image: mascaraImg,
  },
  {
    id: 6,
    title: 'Labial (Lipstick)',
    description: 'Color y acabado para los labios.',
    useFor: 'Completar el look con un toque de color; hay acabados mate, brillo o cremoso.',
    price: 'COP $20.000',
    image: lipstickImg,
  },
];

export default function MakeupPage() {
  return (
    <main className="makeup-page">
      <Header />

      <section className="components-explained">
        <h2>Tips de Maquillaje</h2>

        <ul>
          <li><strong></strong> Hidrata tu piel antes del maquillaje para un acabado más luminoso.</li>
          <li><strong></strong> Usa una brocha limpia para aplicar tu base de forma uniforme.</li>
          <li><strong></strong> El iluminador líquido se ve más natural que el en polvo.</li>
          <li><strong></strong> Siempre desmaquíllate antes de dormir para cuidar tu piel.</li>
        </ul>
      </section>

      <section className="product-grid" aria-label="Productos de maquillaje">
        {products.map(p => (
          <ProductCard
            key={p.id}
            title={p.title}
            description={p.description}
            useFor={p.useFor}
            price={p.price}
            image={p.image}
          />
        ))}
      </section>

      <footer className="makeup-footer">
        <p>Pequeñas descripciones explican para qué sirve cada producto y cómo los componentes componen la UI.</p>
      </footer>
    </main>
  );
}
