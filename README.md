# MidTerm
## Database Structure

The database used for this application is MongoDB. It consists of two collections: `videos` and `products`.

1. `videos` Collection:
   - `VideoID` (String, required): Unique identifier for each video.
   - `UrlImageThumbnail` (String, required): URL to the thumbnail image of the video.

2. `products` Collection:
   - `ProductID` (String, required): Unique identifier for each product.
   - `VideoID` (String, required): The ID of the video associated with the product.
   - `LinkProduct` (String, required): URL to the product page.
   - `Title` (String, required): Title of the product.
   - `Price` (Number, required): Price of the product.

## API Structure

The API is built using Node.js and Express, following RESTful standards. It provides the necessary endpoints to interact with the MongoDB database.

- **Video Thumbnail List API**
  - Endpoint: `/api/videos/thumbnails`
  - Method: GET
  - Response:
    ```json
    [
      {
        "VideoID": "video_id_1",
        "UrlImageThumbnail": "https://example.com/thumbnail1.jpg"
      },
      {
        "VideoID": "video_id_2",
        "UrlImageThumbnail": "https://example.com/thumbnail2.jpg"
      },
    ]
    ```

- **Product List API**
  - Endpoint: `/api/products/:videoID`
  - Method: GET
  - Response:
    ```json
    [
      {
        "ProductID": "product_id_1",
        "VideoID": "video_id_1",
        "LinkProduct": "https://example.com/product1",
        "Title": "Product 1",
        "Price": 29.99
      },
      {
        "ProductID": "product_id_2",
        "VideoID": "video_id_1",
        "LinkProduct": "https://example.com/product2",
        "Title": "Product 2",
        "Price": 39.99
      },
    ]
    ```

## API Requests and Responses

1. Get Video Thumbnails
   - **Request**: GET `/api/videos/thumbnails`
   - **Response**:
     ```json
     [
       {
         "VideoID": "video_id_1",
         "UrlImageThumbnail": "https://example.com/thumbnail1.jpg"
       },
       {
         "VideoID": "video_id_2",
         "UrlImageThumbnail": "https://example.com/thumbnail2.jpg"
       },
     ]
     ```

2. Get Products for a Video
   - **Request**: GET `/api/products/:videoID`
   - **Response**:
     ```json
     [
       {
         "ProductID": "product_id_1",
         "VideoID": "video_id_1",
         "LinkProduct": "https://example.com/product1",
         "Title": "Product 1",
         "Price": 29.99
       },
       {
         "ProductID": "product_id_2",
         "VideoID": "video_id_1",
         "LinkProduct": "https://example.com/product2",
         "Title": "Product 2",
         "Price": 39.99
       },
     ]
     ```
