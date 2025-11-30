// Instagram posts data for _the._.muslim._.vibe
// To add new posts, add them to this array
// Get post image URL from Instagram post and add here

export const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example1',
    likes: 0,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example2',
    likes: 0,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example3',
    likes: 0,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example4',
    likes: 0,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example5',
    likes: 0,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example6',
    likes: 0,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example7',
    likes: 0,
  },
  {
    id: 8,
    image: 'https://instagram.flhe25-1.fna.fbcdn.net/v/t51.71878-15/502760622_1077167694228928_4878231428125221205_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&cb=8438d1d6-0aee74db&ig_cache_key=MzExODMxMTQxNjUzMzE5MjE0Mg%3D%3D.3-ccb7-5-cb8438d1d6-0aee74db&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjQ4MHg2NDAuc2RyLkMzIn0%3D&_nc_ohc=ZGoJXq9CuPAQ7kNvwEQof42&_nc_oc=Adn485cXPG1oBu4p8EOqqG6A-cjkbgDLpCdNCWMqIQVIA4sGC7MQIfbfBCI9tBDPS98&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.flhe25-1.fna&_nc_gid=Cbu9hgpeSVNi0iXcmpP7qQ&oh=00_AfiA1uWAwxDzQzKWAFU1fMNJqvO_XiPS4OGuNhu96rUirA&oe=6932506C', // Replace with actual image URL (see instructions below)
    postUrl: 'https://www.instagram.com/reel/CtGd7Y5gY3O/',
    likes: 0,
  },
];

// ============================================
// HOW TO GET INSTAGRAM POST/REEL IMAGE URL:
// ============================================
// 
// METHOD 1: Browser Inspect (Easiest)
// ------------------------------------
// 1. Instagram post/reel ko browser me kholen (desktop)
// 2. F12 press karein (Developer Tools)
// 3. Elements tab me jayein
// 4. Ctrl+F karein aur "og:image" search karein
// 5. Content attribute me jo URL hai wo copy karein
//    Example: content="https://scontent.cdninstagram.com/v/..."
// 
// METHOD 2: Right-Click Method
// -----------------------------
// 1. Instagram post/reel ko browser me kholen
// 2. Post ki image/thumbnail pe right-click karein
// 3. "Inspect" ya "Inspect Element" select karein
// 4. Image tag me src attribute me jo URL hai wo copy karein
// 
// METHOD 3: Online Tools (For Reels)
// -----------------------------------
// Use these tools to get reel thumbnail:
// - https://gramfetchr.com/thumbnail-downloader
// - https://www.submagic.co/tools/instagram-reels-thumbnail-downloader
// - Paste your reel URL and download thumbnail
// - Upload to your server or use direct URL
// 
// METHOD 4: Screenshot Method
// -----------------------------
// 1. Reel ko play karein
// 2. Best frame pe pause karein
// 3. Screenshot lein
// 4. Image ko assets folder me save karein
// 5. Import karein: import reelImg from '../assets/reel1.jpg'
// 
// ============================================
// TO ADD NEW POST:
// ============================================
// 1. Get image URL using any method above
// 2. Copy Instagram post/reel URL
// 3. Add new object to array:
//    {
//      id: 9, // next number
//      image: 'YOUR_IMAGE_URL_HERE', // from step 1
//      postUrl: 'YOUR_INSTAGRAM_POST_URL', // from step 2
//      likes: 0,
//    }

