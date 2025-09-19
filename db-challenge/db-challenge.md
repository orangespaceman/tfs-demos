# Database design challenge

## Part 1

### Task 1

We have been asked to design a database for a new website - a blog for a well known company. Let's call them _The Guardian 2_.

We need to design the table(s) for this blog.

Here are some requirements:

- The database needs to store information on blog posts
- Each blog post can have a single author
- Each author can write multiple blog posts
- Each blog post should have a title, summary, the full blog post, and the date it was written
- We should also store each author's name, email address, password, a short bio, and the date that they joined

Here are some tasks:

- Design the table(s), and which fields they should have
- Specify the data types for each field
- Specify any constraints (e.g. primary keys, foreign keys, unique constraints)
- Write the SQL to create these table(s)
- Write the SQL to insert some fake blog data
  - There should be at least five authors
  - Each author should have written between 1-5 blog posts
- Write the SQL queries to retrieve the following data:
  - List all blog post titles
  - List all blog post titles, with the author's name
  - List all authors
  - List all authors, alphabetically
  - List all authors, and a count of how many blogs they have created
  - List all blog posts for a specific author
  - List all blog posts, sorted by the oldest first


### Task 2

The company has decided that they would like to add tags to blog posts.

Here are some requirements:

- Each blog post can have one or more tags
- Each tag can be applied to one or more blog posts

Here are some tasks:

- Design the table(s), and which fields they should have
- Specify the data types for each field
- Specify any constraints (e.g. primary keys, foreign keys, unique constraints)
- Write the SQL to create these table(s)
- Write the SQL to insert some tags
  - There should be at least five tags
  - Each blog post should have between 1-5 tags
- Write the SQL queries to retrieve the following data:
  - A list of all tags
  - A list of all tags and how many times they have been used
  - A list of all tags for a particular blog post
  - A list of all blog posts for a particular tag


### Task 3

(Note that you may want to create a second database for this part)

The company has decided that a blog post could have more than one author.

Here are some updated requirements:

- Each blog post can have one or more authors
- Each author can write one or more blog posts

Here are some tasks:

- Design/update the table(s), and which fields they should have
- Specify the data types for each field
- Specify any constraints (e.g. primary keys, foreign keys, unique constraints)
- Write the SQL to create/update these table(s)
- Write the SQL to update the authors
  - Each blog post should have at least one author
- Write the SQL queries to retrieve the following data:
  - List all blog post titles
  - List all authors
  - List all authors, and a count of how many blogs they have created
  - List all blog posts for a specific author
  - List all authors for a specific blog post

### Task 4

What else could we add to this database?


---

## Part 2

### Task 1

(Again, you may want to create a new database)

A second company has seen the website we designed for _The Guardian 2_ and have decided to employ us to build them a new e-commerce store. Let's call them _Etsy 2_.


We need to design the table(s) for this e-commerce website.

Here are some requirements:

- The database needs to store information on products
- Each product can have a single seller
- Each seller can have multiple products
- Each product should have a title, summary, the full product, price, and the date it was advertised
- We should also store each seller's name, email address, password, a short bio, and the date that they joined

Here are some tasks:

- Design the table(s), and which fields they should have
- Specify the data types for each field
- Specify any constraints (e.g. primary keys, foreign keys, unique constraints)
- Write the SQL to create these table(s)
- Write the SQL to insert some fake product data
  - There should be at least five sellers
  - Each seller should have between 1-5 products
- Write the SQL queries to retrieve the following data:
  - List all product titles
  - List all product titles, with the seller's name
  - List all sellers
  - List all sellers, and a count of how many products they have
  - List all product titles for a specific seller


### Task 2

What else could we add to this table?
