# Instagram API Setup Guide (Backend ke liye)

## Overview
Jab aap backend setup kar lein, to Instagram posts automatically fetch ho jayengi. Ye guide batayegi ke kaise implement karna hai.

## Option 1: Instagram Basic Display API (Recommended)

### Requirements:
- Backend server (Node.js, Express, etc.)
- Instagram App (Facebook Developer me)
- Access Token

### Steps:

#### 1. Facebook Developer Account Setup
1. https://developers.facebook.com/ pe jayein
2. New App create karein
3. Instagram Basic Display product add karein
4. App ID aur App Secret note karein

#### 2. Backend API Endpoint Create Karein

**Example (Node.js/Express):**

```javascript
// server/routes/instagram.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const INSTAGRAM_USER_ID = 'YOUR_USER_ID';

router.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );
    
    const posts = response.data.data.map(post => ({
      id: post.id,
      image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      postUrl: post.permalink,
      likes: 0,
    }));
    
    res.json(posts);
  } catch (error) {
    console.error('Instagram API Error:', error);
    res.status(500).json({ error: 'Failed to fetch Instagram posts' });
  }
});

module.exports = router;
```

#### 3. Frontend me Update Karein

**Updated InstagramFeed.jsx:**

```javascript
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const instagramUsername = '_the._.muslim._.vibe';
  const API_URL = 'http://localhost:5000/api/instagram/posts'; // Your backend URL

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        // Fallback to static data if API fails
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    
    // Auto-refresh every 1 hour
    const interval = setInterval(fetchPosts, 3600000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p>Loading Instagram posts...</p>
        </div>
      </section>
    );
  }

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
            href={`https://instagram.com/${instagramUsername}`}
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
              href={post.postUrl}
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
```

## Option 2: Third-Party Service (Easier)

### Services:
1. **RapidAPI Instagram API**
2. **Apify Instagram Scraper**
3. **Instagram Graph API**

### Example with RapidAPI:

```javascript
// Backend
const axios = require('axios');

router.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(
      'https://instagram-scraper-api2.p.rapidapi.com/posts',
      {
        params: { username: '_the._.muslim._.vibe' },
        headers: {
          'X-RapidAPI-Key': 'YOUR_API_KEY',
          'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
        }
      }
    );
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Option 3: Webhook (Real-time Updates)

Instagram Graph API webhooks provide karta hai for real-time updates:

```javascript
// Webhook endpoint
router.post('/instagram/webhook', (req, res) => {
  const { object, entry } = req.body;
  
  if (object === 'instagram') {
    // New post detected
    // Update database or cache
    console.log('New Instagram post:', entry);
  }
  
  res.sendStatus(200);
});
```

## Migration Path (Current se Backend tak)

### Step 1: Current Setup (Static)
- `instagramPosts.js` me manually posts add karein
- ✅ Abhi yehi chal raha hai

### Step 2: Hybrid Approach
- Backend API banao
- Agar API fail ho to static data use karein
- ✅ Best of both worlds

### Step 3: Full Backend
- Sirf API se data fetch karein
- Auto-refresh every hour
- ✅ Fully automatic

## Benefits of Backend Setup:

1. ✅ **Automatic Updates** - Nayi posts automatically show hongi
2. ✅ **Real-time** - Webhooks se instant updates
3. ✅ **No Manual Work** - Koi manual update nahi karna padega
4. ✅ **Better Performance** - Caching se fast loading
5. ✅ **Error Handling** - API fail hone pe fallback

## Current vs Backend:

| Feature | Current (Static) | With Backend |
|---------|------------------|--------------|
| Setup | ✅ Easy | ⚠️ Requires setup |
| Updates | ❌ Manual | ✅ Automatic |
| Real-time | ❌ No | ✅ Yes |
| Maintenance | ⚠️ Regular updates | ✅ Minimal |
| Cost | ✅ Free | ⚠️ May require API costs |

## Recommendation:

**Abhi ke liye:** Static data use karein (jo abhi hai)
**Baad me:** Backend setup karein jab ready ho

Migration easy hai - bas component me `useEffect` add karna hoga aur API endpoint call karna hoga. Current code structure already compatible hai!

