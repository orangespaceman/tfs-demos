# API design challenge

## Part 1

### Task 1 - Model the core API

We have been asked to design a public JSON API for a new website - a blog for a well known company. Let's call them _The Guardian 2_.


**Requirements**
- The API must expose **blog posts** and **authors**
- Each post has a single author
- Each author may have many posts
- Each post has a `title`, `summary`, `body`, and `published_at` date
- Each author has `name`, `email`, `password_hash`, `bio`, and `joined_at`
- Consumers must be able to
  - list posts and authors
  - create, read, update and delete posts
  - create authors and read author profiles
- Responses are JSON `application/json`
- Choose sensible status codes and headers

**Tasks**
1. **Resource modelling and URLs**
   - List the resources, their attributes and relationships
   - Propose URL patterns for:
     - requesting all posts
     - creating a new post
     - requesting a specific post
     - updating a post
     - deleting a post
     - requesting all authors
     - creating a new author
     - requesting a specific author
     - requesting posts for a specific author
2. **Methods and status codes**
   - For each endpoint, choose the HTTP method and document the expected status codes including success and error cases
3. **Request and response bodies**
   - Define JSON request schemas for creating a new post and updating a post, and the expected response
4. **Validation rules**
   - Document which fields are required when creating new posts

---

### Task 2 - Collections, filtering, pagination, sorting

The content team wants to filter and browse efficiently

**Requirements**
- Clients must be able to filter posts by author, by date range, and by a free text query over `title` and `summary`
- Add **pagination** with `page` and `per_page`
- Add **sorting** by `published_at` and `title`
- Include navigation links and totals

**Tasks**
1. Define the query parameters for requesting all posts
2. Provide two example requests and responses
   - Filter by author id and a date range
   - Search by a query `q` with pagination


---

## Part 2

A second company has seen the API we designed for _The Guardian 2_ and have decided to employ us to build them a new e-commerce API. Let's call them _Etsy 2_.

### Task 1 - Core catalogue

**Requirements**
- The API must expose **products** and **sellers**
- Each product belongs to one seller
- Each seller can have many products
- Product fields `title`, `summary`, `description`, `price`, `listed_at`
- Seller fields `name`, `email`, `password_hash`, `bio`, `joined_at`

**Tasks**
1. **Resources and URLs**
   - Design endpoints for:
     - Requesting all products
     - Creating a new product
     - Requesting a specific product
     - Updating a product
     - Deleting a product
     - Requesting all sellers
     - Creating a new seller
     - Requesting a specific seller
     - Requesting all products for a specific seller
2. **Validation**
   - price should be a decimal with two places, minimum `0.00`
   - title should be required, description should be optional
3. **Examples**
   - Document a product request and the HTTP status code for its response
   - List products for a seller


---

### Task 2 - Search, filters, and sorting

**Requirements**
- Filter by seller, price range, and a search query for title and summary
- Sort by date listed and price with an order (either ascending or descending)

**Tasks**
1. Define the query parameters for `GET /products`
   Examples `seller_id`, `price_min`, `price_max`, `q`, `sort`, `order`, `page`, `per_page`
2. Provide two example responses
   - Price range and sort by price desc
   - Full-text search with pagination
3. Describe error cases for invalid parameter combinations

---

### Task 3 - Images and media subresources

**Requirements**
- A product can have multiple images
- Each image has `url`, `alt`, `width`, `height`, and `position`

**Tasks**
1. Model images as a subresource
   - `GET /products/{id}/images`, `POST /products/{id}/images`, `PATCH /products/{id}/images/{image_id}`, `DELETE /products/{id}/images/{image_id}`
2. Choose how ordering works
   - Document `position` rules and conflict handling `409`
3. Provide example requests and responses, including a list with images ordered by `position`

