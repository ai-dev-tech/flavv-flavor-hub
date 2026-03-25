import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const images = [
  { src: "photo-1568901346375-23c9450c58cd", alt: "Gourmet burger", span: "row-span-2" },
  { src: "photo-1573080496219-bb080dd4f877", alt: "Loaded fries", span: "" },
  { src: "photo-1517248135467-4c7edcad34c4", alt: "Restaurant ambiance", span: "" },
  { src: "photo-1527477396000-e27163b481c2", alt: "Crispy wings", span: "" },
  { src: "photo-1572490122747-3968b75cc699", alt: "Oreo shake", span: "" },
  { src: "photo-1598214886806-c97b55ada777", alt: "Nutella waffle", span: "row-span-2" },
  { src: "photo-1551538827-9c037cb4f32a", alt: "Mojito drink", span: "" },
  { src: "photo-1606313564200-e75d5e30476c", alt: "Brownie dessert", span: "" },
  { src: "photo-1553979459-d2229ba7433b", alt: "Smash burger", span: "" },
  { src: "photo-1461023058943-07fcbe16d735", alt: "Cold coffee", span: "" },
];

const imgUrl = (id: string) =>
  `https://images.unsplash.com/${id}?w=600&h=500&fit=crop&auto=format&q=80`;

const GalleryPage = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container">
        <ScrollReveal>
          <h1 className="font-heading text-5xl sm:text-6xl text-primary neon-text text-center mb-4 leading-[1.1]">
            Our Vibe
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Experience the FLAVV atmosphere 🔥
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[280px]">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.06} className={img.span}>
              <div className="group relative h-full rounded-xl overflow-hidden cursor-pointer">
                <img
                  src={imgUrl(img.src)}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-heading text-lg text-foreground tracking-wide drop-shadow-lg">
                    {img.alt}
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
