import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageLightbox from './image-lightbox';

// Import gallery images
import img1 from '@assets/1681047608704_1753101139143.jpg';
import img2 from '@assets/1688191753068_1753101139143.jpg';
import img3 from '@assets/1699774657825_1753101139143.jpg';
import img4 from '@assets/1717500336872_1753101139144.jpg';
import img5 from '@assets/1728319921770_1753101139144.jpg';
import img6 from '@assets/1730870820922_1753101139144.jpg';
import img7 from '@assets/1733847407308_1753101139144.jpg';
import img8 from '@assets/1737475157036_1753101139144.jpg';

import img10 from '@assets/1679155208895_1753103697484.jpg';
import img11 from '@assets/1678948016956_1753103697484.jpg';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: img1,
      alt: 'Abhishek Kumar in professional attire',
      category: 'professional'
    },
    {
      src: img2,
      alt: 'Abhishek Kumar in casual leather jacket at event',
      category: 'events'
    },
    {
      src: img3,
      alt: 'Abhishek Kumar in formal ethnic wear',
      category: 'events'
    },
    {
      src: img4,
      alt: 'Abhishek Kumar at beach in casual wear',
      category: 'personal'
    },
    {
      src: img5,
      alt: 'Abhishek Kumar at evening event in ethnic wear',
      category: 'events'
    },
    {
      src: img6,
      alt: 'Abhishek Kumar with friends at group event',
      category: 'events'
    },
    {
      src: img7,
      alt: 'Abhishek Kumar at shopping center',
      category: 'personal'
    },
    {
      src: img8,
      alt: 'Abhishek Kumar at birthday celebration',
      category: 'personal'
    },

    {
      src: img10,
      alt: 'Abhishek Kumar outdoor portrait with backpack',
      category: 'personal'
    },
    {
      src: img11,
      alt: 'Abhishek Kumar professional portrait at colorful location',
      category: 'professional'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'personal', label: 'Personal' },
    { id: 'professional', label: 'Professional' },
    { id: 'events', label: 'Events' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (index: number) => {
    const actualIndex = galleryImages.findIndex(img => img === filteredImages[index]);
    setCurrentImageIndex(actualIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in text-4xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Image Gallery</h2>
          
          {/* Gallery Filter Tabs */}
          <div className="fade-in flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "ghost"}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === filter.id 
                      ? 'bg-accent text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="fade-in grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="gallery-item relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Search size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox 
        images={galleryImages}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </section>
  );
};

export default GallerySection;
