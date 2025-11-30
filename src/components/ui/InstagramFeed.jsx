import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { instagramPosts } from '../../data/instagramPosts';

const InstagramFeed = () => {
  const [posts, setPosts] = useState(instagramPosts);
  const instagramUsername = '_the._.muslim._.vibe';
  const instagramUrl = `https://instagram.com/${instagramUsername}`;

  // Sort posts by ID (newest first) - higher ID = newer post
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 8);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-black" />
            <h2 className="text-3xl md:text-4xl font-bold">Follow Us on Instagram</h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors text-lg font-medium"
          >
            @{instagramUsername}
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sortedPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.postUrl || instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;

