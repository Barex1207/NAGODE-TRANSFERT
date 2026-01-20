
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Visite de Tem Alyssi Kozoo à l'agence Nagode Kara",
    excerpt: "Nous avons eu l'honneur de recevoir une visite prestigieuse ce mois-ci ! Tem Alyssi Kozoo s'est déplacé personnellement à notre agence Nagode Kara pour constater l'évolution de nos services et échanger avec notre équipe sur nos engagements.",
    date: "Janvier 2026",
    image: "https://scontent.flfw4-1.fna.fbcdn.net/v/t39.30808-6/608921620_1184820023807856_4952615361479404559_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QKA2LokeP0sQ7kNvwHffKkl&_nc_oc=AdlDKQZ0UzRgzg7SaDeS6JIWTyX2jUl-CN5Kwr08voWMJ_FCHPLD5Wxws_6Gz1BLAfU&_nc_zt=23&_nc_ht=scontent.flfw4-1.fna&_nc_gid=QTDevu3pI7zz1NpU59Z8Rg&oh=00_AfpdbsBApNuEspVkGOYzYNgSafEvVfg85mpJu17e52Gw_g&oe=6974D6D7",
    category: "Culture"
  },
  {
    id: 2,
    title: "Nagode transfert au coeur de la tradition",
    excerpt: "Plus de départs quotidiens pour mieux vous servir sur l'axe Nord-Sud. Consultez nos nouveaux horaires en agence ou sur l'application.",
    date: "Janvier 2026",
    image: "https://scontent.flfw4-1.fna.fbcdn.net/v/t39.30808-6/616374688_1189642819992243_8636104606442553471_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bqk9xbPTm0EQ7kNvwHrQ3-f&_nc_oc=AdnXA2EingymJIu2o9RZYyZ7Nb1WxvQVN-tN4h9yML0YZkGNmNmo8GUulbR8nKAq0FU&_nc_zt=23&_nc_ht=scontent.flfw4-1.fna&_nc_gid=OxspzBpFB6NEdCA6te0tHQ&oh=00_AfoSmbNR0bDUBSnWY3bLGNn2MvKGQKwtL9WdQ8Bfp0oGuw&oe=6974EF10",
    category: "Fête&Culture"
  },
    {
    id: 3,
    title: "Une nouvelle agence a Notsè",
    excerpt: "C'est officiel ! 🚗💨 Nous sommes fier d'annoncer le lancement de l'agence Nagode Notsè, votre nouvelle agence de transport fiable à Notsè. Nous sommes là pour vous déplacer en toute sécurité, ponctualité et confort, au national et a l'international. Un service proche, pour tous vos trajets",
    date: "Décembre 2025",
    image: "https://scontent.flfw4-1.fna.fbcdn.net/v/t39.30808-6/599938324_1171023865187472_5908652561230376016_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MP_dR2yBg1EQ7kNvwGKdnsM&_nc_oc=AdlcbFXmdtYTFoU-1Z0tIfb3P5zjmhqBigsMH4ZlA6RbzapPtVySG3bcp5moAXqESpM&_nc_zt=23&_nc_ht=scontent.flfw4-1.fna&_nc_gid=dSbKFyUqa2lHEjYzMHwpCQ&oh=00_AfoKjvAGIeEI9EZBXiR_3foR008txZB2_uafbBTzt5T-Jg&oe=6974EBC9",
    category: "Agence"
  }
];

const News: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-black text-[#6F1AAE] uppercase tracking-tighter">Actualités de Nagode Transfert</h2>
          <div className="w-24 h-1.5 bg-[#6F1AAE] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Restez informé des dernières nouveautés, promotions et changements de notre réseau.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-[#6F1AAE] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#6F1AAE] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {item.excerpt}
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=100068396082049&locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6F1AAE] font-black text-xs uppercase tracking-widest group/btn"
                >
                  Voir sur Facebook 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
