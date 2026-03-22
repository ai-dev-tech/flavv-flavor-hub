import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Gourmet burger", span: "row-span-2" },
  { src: gallery2, alt: "Café drinks", span: "" },
  { src: gallery3, alt: "Restaurant ambiance", span: "" },
  { src: gallery4, alt: "Loaded fries", span: "" },
  { src: gallery5, alt: "Brownie dessert", span: "" },
  { src: gallery6, alt: "Neon sign", span: "row-span-2" },
];

const GalleryPage = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container">
        <ScrollReveal>
          <h1 className="font-heading text-5xl sm:text-6xl text-primary neon-text text-center mb-4">
            Our Vibe
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Experience the FLAVV atmosphere 🔥
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[280px]">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className={img.span}>
              <div className="group relative h-full rounded-xl overflow-hidden cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-heading text-lg text-foreground tracking-wide drop-shadow-lg">
                    Experience the Vibe 🔥
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default GalleryPage;
