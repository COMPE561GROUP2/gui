const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const blogDataPath = './blogData.json';

// Get all blog posts
app.get('/posts', (req, res) => {
  const blogData = loadBlogData();
  res.json(blogData.posts);
});

// Get a specific blog post by ID
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const blogData = loadBlogData();
  const post = blogData.posts.find((p) => p.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// Create a new blog post
app.post('/posts', (req, res) => {
  const blogData = loadBlogData();
  const newPost = req.body;
  newPost.id = generateId(); // Generate a unique ID for the new post
  blogData.posts.push(newPost);
  saveBlogData(blogData);
  res.status(201).json(newPost);
});

// Update an existing blog post
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const blogData = loadBlogData();
  const postIndex = blogData.posts.findIndex((p) => p.id === postId);

  if (postIndex !== -1) {
    blogData.posts[postIndex] = { ...req.body, id: postId };
    saveBlogData(blogData);
    res.json(blogData.posts[postIndex]);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// Delete a blog post
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const blogData = loadBlogData();
  const postIndex = blogData.posts.findIndex((p) => p.id === postId);

  if (postIndex !== -1) {
    const deletedPost = blogData.posts.splice(postIndex, 1);
    saveBlogData(blogData);
    res.json(deletedPost);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// Helper function to load blog data from file
function loadBlogData() {
  try {
    const data = fs.readFileSync(blogDataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading blog data:', error);
    return { posts: [] };
  }
}

// Helper function to save blog data to file
function saveBlogData(blogData) {
  try {
    fs.writeFileSync(blogDataPath, JSON.stringify(blogData, null, 2));
  } catch (error) {
    console.error('Error saving blog data:', error);
  }
}

// Helper function to generate a unique ID for a new post
function generateId() {
  // You can use a library like `uuid` to generate a more robust ID
  return Math.random().toString(36).substr(2, 9);
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Blog JSON server is running on port ${port}`);
});
