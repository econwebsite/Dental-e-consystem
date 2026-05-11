
import React, { useRef, useState } from 'react';
import { Carousel, Modal } from 'antd';
import './testimonial.css';
import jazGulatiImage from "../../../assets/testimonial/dr-jaz-gulati.png";
import jonfluckeImage from "../../../assets/testimonial/dr-john-flucke.png";

const densiTestimonial = {
  name: 'Dr. John Flucke',
  role: "Dentistry's \"Technology Evangelist\"",
  image: jonfluckeImage,
  quote: 'This year I’ve had the opportunity to work with the new DensiCAM intraoral camera from e-con Systems… and I’ve been impressed.',
  full: [
    'This year I’ve had the opportunity to work with the new DensiCAM intraoral camera from e-con Systems… and I’ve been impressed.',
    'The DensiCAM is a Full HD intraoral camera that provides stunning images. Its 2 megapixel CMOS sensor provides images in 1910x1080 resolution. To those of you who don’t geek out on specs, that means you get images that are crisp, clear, and show amazing amounts of detail.',
    'Capturing photos is a simple process. The DensiCAM has a touch sensitive button that allows the user to take an image with a simple tap of the finger.',
    'The DensiCAM will interface with practice management software through a simple TWAIN interface and it also comes with its own viewing application called e-CAMView for doctors that prefer to keep their images in a separate system. Installation was quick and easy.',
    'The unit is solidly built, easy to use, and has a great appearance. I’ve tested a lot of intraoral cameras in my career and the DensiCAM is a great unit. It is impressive!',
  ],
};

const staticTestimonial = {
  name: 'Dr. Jaz Gulati',
  role: 'Triangle Dental',
  image: jazGulatiImage,
  quote:
    'e-con Systems have been very communicative and have shown great interest in producing a high-quality product. After testing the intraoral camera, I was very impressed with the image quality and the ease of integration with my practice management software.',
     full: [
    'e-con Systems have been very communicative and have shown great interest in producing a high-quality product.',
    'After testing the intraoral camera, I was very impressed with the image quality and the ease of integration with my practice management software.',
   
  ],
};

const Avatar = ({ name, image }) => {
  if (image) return <div className="testimonial-avatar"><img src={image} alt={name} className="testimonial-avatar-img"/></div>;
  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('');
  return <div className="testimonial-avatar">{initials}</div>;
};

export default function Testimonial(){
  const items = [densiTestimonial, staticTestimonial];
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalParas, setModalParas] = useState([]);
  const [modalMeta, setModalMeta] = useState({ name: '', image: null, role: '' });

  const openModal = ({ paras, name, image, role }) => { setModalParas(paras); setModalMeta({ name: name || '', image: image || null, role: role || '' }); setIsModalVisible(true); };
  const closeModal = () => { setModalParas([]); setModalMeta({ name: '', image: null, role: '' }); setIsModalVisible(false); };

  return (
    <section className="testimonial-section fade-in">
      <div className="testimonial-inner">
        <h2 className="testimonial-title">What Dental Experts say</h2>
        <p className="testimonial-sub">Trusted by dental professionals worldwide</p>

        <div className="testimonial-carousel">
          <Carousel autoplay dots={false} ref={carouselRef} afterChange={setActiveIndex}>
            {items.map((t, idx) => (
              <div key={idx} className="testimonial-slide">
                <article className="testimonial-card" aria-label={`Testimonial from ${t.name}`} data-aos="fade-up" data-aos-duration="1000">
                  <div className="testimonial-row">
                    <div className="testimonial-left">
                      <Avatar name={t.name} image={t.image} />
                      <div className="testimonial-meta-left">
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-role">{t.role}</div>
                      </div>
                    </div>

                    <div className="testimonial-right">
                      {Array.isArray(t.full) ? t.full.map((p, i) => <p key={i} style={{ marginBottom: '0.9em' }}>{p}</p>):<blockquote className="testimonial-quote" data-aos="fade-in" data-aos-duration="1400">“{t.quote}”</blockquote>}
                      {/* {Array.isArray(t.full) && (
                        <div className="testimonial-readmore-wrap">
                          <button className="testimonial-readmore" onClick={() => openModal({ paras: t.full, name: t.name, image: t.image, role: t.role })}>Read full testimonial</button>
                        </div>
                      )} */}
                    </div>
                  </div>

                  <div className="testimonial-ribbon" aria-hidden>
                    <svg width="100%" height="100" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`g1-${idx}`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#d9f3ff"/><stop offset="1" stopColor="#85d5f2ff"/></linearGradient>
                        <linearGradient id={`g2-${idx}`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#00aeef"/><stop offset="1" stopColor="#3fc4f8ff"/></linearGradient>
                        <linearGradient id={`g3-${idx}`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#00aeef"/><stop offset="1" stopColor="#00aeef"/></linearGradient>
                      </defs>
                      <path d="M0 78 C24 56, 56 54, 100 78 C132 88, 148 92, 160 82 L160 140 L0 140 Z" fill={`url(#g1-${idx})`} opacity="0.95" />
                      <path d="M0 86 C34 66, 72 66, 112 86 C140 96, 156 100, 160 90 L160 140 L0 140 Z" fill={`url(#g2-${idx})`} opacity="0.9" />
                      <path d="M0 94 C28 74, 68 72, 112 94 C132 102, 152 108, 160 100 L160 140 L0 140 Z" fill={`url(#g3-${idx})`} opacity="0.98" />
                    </svg>
                  </div>
                </article>
              </div>
            ))}
          </Carousel>

          <div className="testimonial-indicators">
            {items.map((_, i) => (
              <button key={i} className={`testimonial-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => carouselRef.current && carouselRef.current.goTo(i)} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
        </div>

        <Modal
          title={
            <div className="testimonial-modal-header">
              <div className="testimonial-modal-avatar">
                {modalMeta.image ? (
                  <img src={modalMeta.image} alt={modalMeta.name} />
                ) : (
                  <div className="testimonial-modal-initials">{(modalMeta.name || '').split(' ').map(n => n[0]).slice(0,2).join('')}</div>
                )}
              </div>
              <div className="testimonial-modal-meta">
                <div className="testimonial-modal-name">{modalMeta.name}</div>
                <div className="testimonial-modal-role">{modalMeta.role}</div>
              </div>
            </div>
          }
          open={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
          okText="Close"
          cancelButtonProps={{ style: { display: 'none' } }}
        >
          {modalParas.map((p, i) => <p key={i} style={{ marginBottom: '0.9em' }}>{p}</p>)}
        </Modal>
      </div>
    </section>
  );
}
