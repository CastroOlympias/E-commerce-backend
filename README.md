

# E-commerce-backend

## Description
  This is a backend for an E-commerce website to sell goods on-line. Here is a link to a higher resolution video demonstrating CRUD for all routes.  The GIF is the same as the video, just at a very limited resolution. The video and the GIF can also be accessed through the media folder at the root of the project.

  Click <a href="https://github.com/CastroOlympias/E-commerce-backend/blob/main/media/E-Commerce%20Backend%20GIF.mp4">HERE</a> for the video.

<img src="https://github.com/CastroOlympias/E-commerce-backend/blob/main/media/E-Commerce%20Backend%20MP4.gif"/>

## Table of Contents
- [Story](#Story)
- [Installation](#Installation)
- [Usage](#Usage)
- [Authors](#Authors)
- [Resources](#Resources)


## Story
  This wasn’t too bad of project, and neither was the choreography required to demonstrate CRUD. The setup of the for the video did require lots of practice as my attempts evolved over time. Copy paste is no the way to do it.

## Installation
Install in your terminal:
  <br>
* npm Install dotenv
  <br>
* npm Install express
  <br>
* npm Install sequelize
  <br>
  <br>

Download and install:
  <br>
* <a href="https://insomnia.rest/">Insomnia</a>

## Usage
  I used Insomnia to communicate with the routes. These build on top of the /api routes. Don’t forget the /id of the below routes. The order of operation is to 1st(create a category, 2nd(create a tag, and 3rd(create a product. You have to have 1 and 2 done so you can assign a product to their respective category id and tag id. 
  
  A safety feature for preventing mass deletion of products, is that you cannot delete a category that has associated products until the category has no products linked to it, then you can delete the category.

  router.use('/categories', categoryRoutes);
  router.use('/products', productRoutes);
  router.use('/tags', tagRoutes);


## Authors
    Just myself.



## Resources
Documentation:
  <br>
* <a href="https://expressjs.com/">Express.js</a> A back end web application framework for Node.js
  <br>
* <a href="https://nodejs.org/en/docs/">Node.js</a> Back-end JavaScript runtime environment
  <br>
* <a href="http://sequelize.org/">Sequelize/ORM</a> Object Realational Mapping
  <br>
* <a href="https://www.npmjs.com/package/dotenv">DotEnv</a> Secure your password to your database.
  <br>
* <a href="https://support.insomnia.rest/">Insomnia</a> Software interface with your express server application

## Testing
    Testing is performed by the Insomnia software.

## Questions
* Git Hub Link: https://github.com/CastroOlympias
  <br>
* eMail address: blackcarrera@msn.com
  <br>