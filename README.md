# Run Locally
### 1. Install Dependencies
````
 yarn install 
 or
 npm install
````
### 2. Create a new firebase project
Login to your google account and create a new firebase project here

Create an .env file and add the following variables.
````
// SAMPLE CONFIG .env, you should put the actual config details found on your project settings

FIREBASE_API_KEY=KJzaKJgkjhSdfSgkjhdkKJdkjowf
FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
FIREBASE_DB_URL=https://yourdburl.firebaseio.com
FIREBASE_PROJECT_ID=yourproject-id
FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
FIREBASE_MSG_SENDER_ID=43df97918523958
FIREBASE_APP_ID=234df8789798798fg3-034

````
### 3. Run development server
````
yarn build
or
npm build

````

# How to add products or perform CRUD operations for Admin
1. Navigate to your site to /signup
2. Create an account for yourself
3. Go to your mongodb collection users collection and edit the account you've just created. Change the role from USER to ADMIN.
4. Reload or sigin again to see the changes.

## Features
* Admin CRUD operations
* Firebase authentication
* Firebase auth provider authentication
* Account creation, Seller verify, Filter Account and delete
* Seller Add Product and delete 
* Add New Category & Delete Category
* Add Wishlist Option


